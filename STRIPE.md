# Intégration Stripe — Guide de mise en place

## Architecture

Le site étant statique (Astro), on utilise **Stripe Payment Links** — pas besoin de backend.

```
Visiteur → clique "Payer" → Stripe Checkout (hébergé) → paiement → redirect /merci-paiement
                                                                  ↓
                                                          Webhook Stripe
                                                                  ↓
                                                           n8n webhook
                                                                  ↓
                                                    Notion CRM + email confirmation
```

## Étapes de mise en place

### 1. Créer les produits Stripe

Dans le [Dashboard Stripe](https://dashboard.stripe.com/products) :

| Produit | Prix | Type |
|---------|------|------|
| Essentiel | 399 € HT | Paiement unique |
| Complet | 699 € HT | Paiement unique |
| Premium | 1 199 € HT | Paiement unique |
| Suivi mensuel | 99 € HT/mois | Abonnement récurrent |

### 2. Créer les Payment Links

Pour chaque produit, créer un [Payment Link](https://dashboard.stripe.com/payment-links) avec :
- `after_completion` → redirect vers `https://eddiemiller.agency/merci-paiement`
- Activer "Collect email address"
- Activer "Allow promotion codes" (pour offrir des réductions)

### 3. Ajouter les variables d'environnement

Dans Vercel → Settings → Environment Variables :

```
PUBLIC_STRIPE_LINK_ESSENTIEL=https://buy.stripe.com/xxx
PUBLIC_STRIPE_LINK_COMPLET=https://buy.stripe.com/xxx
PUBLIC_STRIPE_LINK_PREMIUM=https://buy.stripe.com/xxx
PUBLIC_STRIPE_LINK_SUIVI=https://buy.stripe.com/xxx
```

### 4. Mettre à jour formules.astro

Remplacer les `ctaHref: '#diagnostic'` des formules payantes par les liens Stripe :

```js
ctaHref: import.meta.env.PUBLIC_STRIPE_LINK_ESSENTIEL || '#diagnostic',
```

Le composant `StripeCheckout.astro` est prêt à être utilisé pour les boutons de paiement.

### 5. Configurer le webhook Stripe → n8n

Dans Stripe → Developers → Webhooks :
- Endpoint URL : ton webhook n8n
- Events : `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.deleted`

Dans n8n, créer un workflow :
1. Webhook trigger (Stripe)
2. Vérifier la signature Stripe (sécurité)
3. Mise à jour Notion (statut client → "Payé", formule choisie)
4. Envoi email de confirmation + facture

### 6. Portail client Stripe (pour le suivi mensuel)

Pour l'abonnement mensuel, activer le [Customer Portal](https://dashboard.stripe.com/settings/billing/portal) Stripe pour que les clients puissent :
- Voir leurs factures
- Modifier leur carte
- Résilier leur abonnement

## Fichiers concernés

- `src/components/StripeCheckout.astro` — Composant bouton de paiement (prêt)
- `src/pages/merci-paiement.astro` — Page de confirmation post-paiement (prêt)
- `src/pages/formules.astro` — Page des formules (à mettre à jour avec les liens)

## Préfill des données client

Les Payment Links supportent le pré-remplissage via URL params :

```
https://buy.stripe.com/xxx?prefilled_email=jean@example.com&client_reference_id=Restaurant-Le-Bon-Coin
```

Quand Stripe sera actif, on pourra pré-remplir l'email du client s'il a déjà fait son diagnostic.

## Sécurité

- Les Payment Links sont hébergés par Stripe (PCI DSS compliant)
- Aucune donnée de carte ne transite par le site
- Les webhooks Stripe doivent être vérifiés via la signature (`stripe-signature` header)
- Le `connect-src` CSP n'a pas besoin d'être modifié (le paiement se fait sur buy.stripe.com, pas via fetch)

# Eddie Miller Agency — site public

Mis à jour par Codex le 6 septembre 2026. Sources : demande de publication et code du site.

Site Astro, sept langues. Décision d’Adam, 20 novembre 2026 : Paris intra-muros uniquement. Deux offres indépendantes : être trouvé sur ChatGPT, Claude et Gemini (Google Maps comme source locale) ou simplifier les tâches internes avec l’IA. Pour les restaurants, hôtels et bars, partir des recherches des touristes ; ne pas appliquer cet angle aux cabinets par défaut. La création de site reste accessible en complément, pas comme troisième offre principale.
Le dépôt contient uniquement le site et ses ressources publiques. Aucun secret ni dossier client.

La vitrine française et ses deux parcours sont dans `src/pages/index.astro`, `diagnostic-geo.astro`, `conseil-ia.astro` et `src/layouts/RueCoulisses.astro`. Les textes des autres parcours commerciaux vivent dans `src/data/agency.ts` et `agency-translations.json`.
La collection Astro active est `src/content.config.ts`. Ne pas réintroduire les chiffres ou témoignages des anciens composants non utilisés. Les études marquées `needs-review` restent masquées et hors sitemap.

`npm run build` produit un aperçu sans envoi et sans indexation. La publication Git Vercel utilise `scripts/build-vercel.mjs` : mode live uniquement lorsque `VERCEL_ENV=production`.
Le contact public prépare un email que le visiteur envoie lui-même. Aucun formulaire reçu ni automatisation de collecte ne doit être annoncé sans destination vérifiée.

Conserver le design crème / terre cuite, les polices locales et l’accessibilité mobile/clavier.
Toute publication modifie le domaine réel : vérifier le build, l’indexation et le parcours de contact.
Chaque commit Codex porte `Co-Authored-By: Codex <noreply@openai.com>`.

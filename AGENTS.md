# Eddie Miller Agency — site public

Mis à jour par Codex le 6 septembre 2026. Sources : demande de publication et code du site.

Site Astro, sept langues, visibilité IA et Google Maps, automatisation et sites web à Paris.
Le dépôt contient uniquement le site et ses ressources publiques. Aucun secret ni dossier client.

Les textes actuels vivent dans `src/data/agency.ts` et `agency-translations.json`.
La collection Astro active est `src/content.config.ts`. Ne pas réintroduire les chiffres ou témoignages des anciens composants non utilisés. Les études marquées `needs-review` restent masquées et hors sitemap.

`npm run build` produit un aperçu sans envoi et sans indexation. La publication Git Vercel utilise `scripts/build-vercel.mjs` : mode live uniquement lorsque `VERCEL_ENV=production`.
Le contact public prépare un email que le visiteur envoie lui-même. Aucun formulaire reçu ni automatisation de collecte ne doit être annoncé sans destination vérifiée.

Conserver le design crème / terre cuite, les polices locales et l’accessibilité mobile/clavier.
Toute publication modifie le domaine réel : vérifier le build, l’indexation et le parcours de contact.
Chaque commit Codex porte `Co-Authored-By: Codex <noreply@openai.com>`.

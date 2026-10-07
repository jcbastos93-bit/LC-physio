# Audit SEO — lc-physio.ch (7 octobre 2026)

Audit réalisé avec Lighthouse (bureau + mobile), html-validate et des tests dans Chromium, avant et après les modifications.

## Résultat

| | Avant | Après |
|---|---|---|
| Lighthouse SEO | 100 | 100 |
| Accessibilité | 96 | 100 |
| Performance / Bonnes pratiques | 100 / 100 | 100 / 100 |
| Décalage de mise en page (CLS) | 0,015 | 0 |
| HTML valide | non vérifié | oui |

Lighthouse met 100 en SEO dès que les bases techniques sont là. Il ne vérifie ni les données structurées, ni la balise canonique, ni l'image de partage, ni les mots-clés. Les vrais gains sont donc ci-dessous.

## Ce qui a été corrigé

**Balises et indexation**
- Titre raccourci à 57 caractères (l'ancien en faisait 74 et risquait d'être tronqué) : « LC Physio – Physiothérapeute en neurologie à Puidoux (VD) ».
- Meta description recentrée sur ce que les gens cherchent : AVC, Parkinson, sclérose en plaques, lésions médullaires, cabinet et domicile (148 caractères).
- Ajout de `<link rel="canonical">`, `robots` (avec `max-image-preview:large`), `theme-color`.
- Ajout de `robots.txt` et `sitemap.xml` (qui manquaient), page `404.html` en `noindex`.

**Données structurées (JSON-LD)**
- Fiche `Physiotherapy` (cabinet) : adresse, téléphone, e-mail, carte, accès fauteuil roulant, domaines d'intervention et visites à domicile.
- Fiche `Person` pour Laetitia Cuypers, et `WebSite`. C'est ce qui aide Google à associer le site à « physiothérapeute Puidoux ».

**Partage sur les réseaux**
- Nouvelle image 1200×630 (`images/og-image.png`) : l'ancienne était un logo de 764×2215 px, mal recadré par Facebook/WhatsApp/LinkedIn.
- URL absolues, `og:locale fr_CH`, `og:site_name`, Twitter/X card.

**Contenu et structure**
- H1 : « Physiothérapie neurologique à Puidoux » (avant : seulement la phrase d'accroche, sans mot-clé). La phrase « Améliorons, ensemble, votre qualité de vie. » est conservée juste dessous, en sous-titre.
- Titres H2 enrichis naturellement (« Laetitia Cuypers, physiothérapeute en neurologie », « Cabinet à Puidoux et visites à domicile », « Prendre rendez-vous à Puidoux »).
- Fautes corrigées (elles nuisent à la crédibilité et à la recherche) : « réfloxologie » → réflexologie, « fonctionelles » → fonctionnels, « accesibilité » → accessibilité, « J'ai » → j'ai, « conduit » → conduite.
- Texte alternatif sur le logo du hero ; lien d'accès rapide « Aller au contenu » pour le clavier.

**Performance et accessibilité**
- Dimensions explicites sur les images (plus de décalage au chargement), chargement différé des images hors écran, préchargement des 2 polices principales.
- Contraste du texte orange corrigé (2,1:1 → 4,8:1) via une teinte plus foncée pour le texte ; l'orange de marque reste pour les décors et le logo.
- Favicon complet (`.ico`, 192, 512), icône Apple 180 px, `site.webmanifest`.
- Numéros de téléphone avec espaces insécables (ils ne se coupent plus sur mobile). Attributs invalides de l'iframe de la carte retirés.

## À faire de votre côté (hors du code)

1. **Fiche Google Business Profile** : c'est le levier n° 1 pour une recherche du type « physiothérapeute Puidoux ». À créer ou à revendiquer, avec l'adresse, le téléphone, le site, les horaires et des photos.
2. **Vérifier le domaine** : j'ai supposé `https://lc-physio.ch/` (sans `www`) partout (canonical, sitemap, données structurées). Si le site est servi sur `www.` ou un autre domaine, remplacer dans `index.html`, `sitemap.xml` et `robots.txt`. Puis ajouter le site dans **Google Search Console** et y soumettre `sitemap.xml`.
3. **Compléter les données structurées** quand l'information existe : horaires d'ouverture (`openingHoursSpecification`), rayon des visites à domicile (`areaServed`), coordonnées GPS exactes (`geo`). Je ne les ai pas inventées.
4. **Contenu à ajouter** (le site fait ~400 mots, c'est court pour Google) : photos réelles de Laetitia et du cabinet avec un texte alternatif descriptif, horaires, modalités de prise en charge (ordonnance, assurances), une page par pathologie (AVC, Parkinson, sclérose en plaques…) pour se positionner sur ces recherches. À valider par Laetitia, car ce sont des informations médicales et tarifaires.
5. **Annuaires locaux** avec le même nom, adresse et téléphone partout (local.ch, search.ch, annuaires de physiothérapeutes) : les liens et mentions cohérentes renforcent le référencement local.
6. **Hébergement** : activer HTTPS et la redirection `www` → domaine principal (automatique sur GitHub Pages / Vercel avec un domaine personnalisé).

# Site LC Physio

Site pour le cabinet de physiothérapie de Laetitia Cuypers (lc-physio.ch), spécialisé en neurologie, à Puidoux (VD).

Site statique en HTML/CSS/JS pur — pas de build, pas de dépendances. Il suffit de le déposer sur GitHub. Identité visuelle basée sur les fichiers de marque fournis (logo, palette de couleurs, police Mank Sans).

## Contenu du dossier

```
lc-physio-site/
├── index.html              → la page (unique) du site + données structurées (JSON-LD)
├── css/style.css            → tous les styles + déclarations de police
├── js/main.js                → menu latéral mobile, lien actif, année du footer
├── fonts/                     → police de marque Mank Sans (woff2, auto-hébergée)
├── images/                     → logo, icône, favicons, image de partage (og-image.png)
├── robots.txt, sitemap.xml     → référencement (domaine supposé : https://lc-physio.ch/)
├── site.webmanifest, favicon.ico, 404.html
├── SEO-AUDIT.md                → audit SEO, changements et actions à faire
└── README.md
```

## Mettre le site en ligne avec GitHub Pages (gratuit)

1. Crée un nouveau dépôt sur GitHub, par exemple `lc-physio`.
2. Dépose (ou pousse avec git) tout le contenu de ce dossier à la racine du dépôt.
3. Sur GitHub : **Settings → Pages**.
4. Sous « Build and deployment », choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Après une minute ou deux, le site est visible à une adresse du type `https://<ton-nom-utilisateur>.github.io/lc-physio/`.
6. Pour utiliser le nom de domaine `lc-physio.ch` : ajoute un fichier `CNAME` à la racine contenant `lc-physio.ch`, puis configure chez le registrar du domaine un enregistrement DNS pointant vers ton hébergeur (Vercel, GitHub Pages, etc.).

## Identité de marque utilisée

- **Couleurs** (variables CSS en haut de `css/style.css`) : orange `#F59F18`, brun `#7D4E24`, brun foncé `#5C3A1B`, beige `#EAE3D2`.
- **Police** : Mank Sans (fichiers fournis), auto-hébergée en `.woff2` dans `fonts/` — aucune dépendance à Google Fonts.
- **Logo** : utilisé dans l'en-tête, le hero, le portrait (en attendant une vraie photo) et le pied de page.

## Coordonnées déjà intégrées (depuis la carte de visite)

- Adresse : Route du village 6, 1070 Puidoux
- Téléphone : 078 612 69 72
- E-mail : l.cuypers@etik.com
- Une carte Google Maps est intégrée dans la section Localisation (pointant sur cette adresse).

## Ce qu'il reste à compléter

- **SEO** : voir `SEO-AUDIT.md` (fiche Google Business Profile, Search Console, horaires, contenu).
- **Photos** : un vrai portrait de Laetitia et une photo du cabinet, à mettre dans `images/` puis à référencer dans `index.html` à la place du placeholder actuel (icône du logo dans un cercle beige).
- Éventuellement une photo pour la section Localisation (façade, salle d'attente, etc.).

## Menu mobile

Sous 700 px de large, la navigation devient un menu latéral qui glisse depuis la droite (voile sombre, bouton de fermeture, touche Échap, clic en dehors, focus gardé dans le menu). Le HTML est dans `<header>`, les styles dans le bloc `@media (max-width: 700px)` de `css/style.css` et le comportement dans `js/main.js`.

## Personnalisation rapide

- Couleurs, police et espacements : tout est centralisé en haut de `css/style.css` dans le bloc `:root`.
- Le contenu (textes, domaines d'intervention, formations) est directement dans `index.html`, organisé par sections commentées.

C'est volontairement simple pour l'instant — une fois que Laetitia aura donné plus de retours, on pourra étoffer (page tarifs, témoignages, prise de rendez-vous en ligne, etc.).

# Site LC Physio

Premier brouillon du site pour le cabinet de physiothérapie de Laetitia Cuypers (LC-physio.ch), spécialisé en neurologie, à Puidoux (VD).

Site statique en HTML/CSS/JS pur — pas de build, pas de dépendances. Il suffit de le déposer sur GitHub.

## Contenu du dossier

```
lc-physio-site/
├── index.html        → la page (unique) du site
├── css/style.css      → tous les styles
├── js/main.js          → menu mobile + année du footer
├── images/              → à remplir avec de vraies photos (portrait, cabinet, etc.)
└── README.md
```

## Mettre le site en ligne avec GitHub Pages (gratuit)

1. Crée un nouveau dépôt sur GitHub, par exemple `lc-physio`.
2. Dépose (ou pousse avec git) tout le contenu de ce dossier à la racine du dépôt.
3. Sur GitHub : **Settings → Pages**.
4. Sous « Build and deployment », choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Après une minute ou deux, le site est visible à une adresse du type `https://<ton-nom-utilisateur>.github.io/lc-physio/`.
6. Pour utiliser le nom de domaine `lc-physio.ch` : ajoute un fichier `CNAME` à la racine contenant `lc-physio.ch`, puis configure chez le registrar du domaine un enregistrement DNS de type `CNAME` (ou `A`) pointant vers GitHub Pages. GitHub explique la marche à suivre exacte dans Settings → Pages une fois le domaine renseigné.

## Ce qu'il reste à compléter (marqué `TODO` dans le code)

- **Photos** : portrait de Laetitia et photo du cabinet, à mettre dans `images/` puis à référencer dans `index.html` à la place des placeholders actuels (cercle avec initiales « LC »).
- **Coordonnées** : téléphone et e-mail dans la section Contact (`index.html`, section `#contact`) sont des exemples à remplacer.
- **Adresse exacte** du cabinet à Puidoux, dans la section Localisation.
- **Carte** : une fois l'adresse confirmée, remplacer le bloc « Carte à venir » par une iframe Google Maps (Google Maps → Partager → Intégrer une carte).
- Éventuellement un vrai nom de domaine e-mail (`contact@lc-physio.ch`) si Laetitia en met un en place.

## Personnalisation rapide

- Couleurs, polices et espacements : tout est centralisé en haut de `css/style.css` dans le bloc `:root`.
- Le contenu (textes, domaines d'intervention, formations) est directement dans `index.html`, organisé par sections commentées.

C'est volontairement simple pour l'instant — une fois que Laetitia aura donné plus d'infos ou de retours, on pourra étoffer (page dédiée aux tarifs, témoignages, blog, prise de rendez-vous en ligne, etc.).

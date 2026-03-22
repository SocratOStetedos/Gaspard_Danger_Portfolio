# 🚀 Portfolio — Gaspard Danger

Site web portfolio pour la recherche d'alternance.

## 📁 Structure des fichiers

```
portfolio/
├── index.html          → Page CV principale
├── projets.html        → Mes projets (GasPrompt en vedette)
├── competences.html    → Compétences techniques
├── interets.html       → Centres d'intérêt
├── liens.html          → Liens utiles
├── style.css           → Feuille de style globale
├── nav.js              → Navigation JS partagée
├── Gaspard-Danger-CV_alternance.pdf   ← À PLACER ICI
└── images/             ← Dossier images (optionnel)
    └── logouniv.png    ← Logo faculté (optionnel)
```

## ⚙️ Installation

1. **Télécharge et dézippe** le dossier portfolio
2. **Place ton CV PDF** dans le même dossier que les HTML, renommé : `Gaspard-Danger-CV_alternance.pdf`
3. **(Optionnel)** Ajoute ton dossier `images/` si tu veux le favicon et ta photo de profil
4. **Photo de profil** : dans `index.html`, remplace le bloc `hero-avatar-placeholder` par :
   ```html
   <img src="images/pdp.jpeg" alt="Gaspard Danger" class="hero-avatar">
   ```
5. **Ouvre `index.html`** dans ton navigateur — c'est prêt !

## 🌐 Héberger en ligne (gratuit)

### Option A — GitHub Pages (recommandé)
1. Crée un repo GitHub public
2. Upload tous les fichiers
3. Active GitHub Pages dans les Settings → Pages → `main` branch
4. Ton site sera sur `https://[ton-pseudo].github.io/[nom-repo]`

### Option B — Netlify (drag & drop)
1. Va sur [netlify.com](https://netlify.com)
2. Crée un compte gratuit
3. Glisse le dossier portfolio sur la page d'accueil
4. Ton site est en ligne instantanément !

## 🎨 Personnalisation rapide

- **Couleur principale** : dans `style.css`, change `--accent: #00d4ff;`
- **Police des titres** : change `'Syne'` dans l'import Google Fonts
- **Ajouter un projet** : dans `projets.html`, duplique un bloc `.project-card`

---
*Design : Dark Tech / Cybersecurity aesthetic*

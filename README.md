# Aydin Ezzatpour — Personal Website

A dark, minimalist, responsive personal portfolio built for GitHub Pages.

## Included

- English single-page portfolio
- GitHub profile photo with an initials fallback
- Education, research interests, teaching experience, projects, skills, and activities
- Public GitHub project links
- LinkedIn and email links
- Downloadable résumé
- Responsive navigation and subtle reveal animations
- SEO metadata, JSON-LD, sitemap, robots.txt, and custom 404 page
- No phone number and no contact form

## Publish with GitHub Pages

1. Create a **public** repository named exactly `AydinEZP.github.io`.
2. Upload all files and folders from this package to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save. The site will be available at `https://aydinezp.github.io/`.

## Local preview

From this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Editing

- Main content: `index.html`
- Visual design: `styles.css`
- Navigation and reveal effects: `script.js`
- Résumé: `assets/Aydin-Ezzatpour-Resume.pdf`
- Favicon: `assets/favicon.svg`

The GitHub profile image is loaded from GitHub's avatar CDN. An initials fallback appears if the image cannot load.

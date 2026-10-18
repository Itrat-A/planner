# Itrat's Daily Planner (standalone)

Your own copy of the planner. It works without Claude, saves on your device, and works offline once opened.

## Put it online with GitHub Pages (about 5 minutes)

1. Create a new **public** repository on GitHub, for example `planner`.
2. Upload everything in this folder, including the **img** folder (index.html, quran.json, sw.js, manifest.webmanifest, the two icons, and img/).
3. In the repo go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait a minute. Your planner is live at `https://<your-username>.github.io/planner/`.

## Add it to your phone like an app

- **Android (Chrome):** open the link, tap the **⋮** menu, then **Add to Home screen** (or **Install app**).
- **iPhone (Safari):** open the link, tap **Share**, then **Add to Home Screen**.

## Your data

- Everything is saved in your phone's browser storage for that site. Nothing is sent anywhere.
- Each device keeps its own copy.
- Go to **Growth → Backup → Export backup** every week or so, and keep the file in Google Drive.
- To move data from the Claude version: export a backup there, then **Import backup** here.

## Updating

Replace `index.html` in the repo with a newer version. The app picks it up next time you open it online.
If you ever change other files, also bump `CACHE` in `sw.js` (for example `planner-v3`).

Quran text: Arabic from Tanzil (Quran Simple), English translation by Marmaduke Pickthall (1930, public domain).

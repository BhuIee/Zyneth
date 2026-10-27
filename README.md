# Minimalist PC Setup & Configs — GitHub Pages

A clean, light-first minimalist personal site for showcasing your **PC Setup & Photo Gallery**, **Hardware Specs**, **Software & Game Configs**, and **Social Links**.

Zero build step required — pure HTML, CSS, and vanilla JavaScript driven by a single configuration file (`config.js`).

## How to Customize

1. Open **`config.js`** in any text editor.
2. Update your details:
   - **`profile`**: Change your name, handle, bio, status badge, and avatar.
   - **`socials`**: Add or remove links (`github`, `discord`, `steam`, `x`, `youtube`, `twitch`, `mail`, `link`).
   - **`gallery`**: Replace the image URLs with your own setup photos (you can create an `images/` folder, drop your photos in, and reference `"images/desk.jpg"`).
   - **`hardware`**: Edit your CPU, GPU, RAM, Monitor, Mouse, Keyboard, etc.
   - **`softwareAndConfigs`**: Update your daily driver apps, DPI/sensitivity parameters, and copyable config snippets (crosshairs, Steam launch options, etc.).
   - **`otherThings`**: Share what you're currently playing, desk dimensions, or upcoming upgrades.

## How to Publish to GitHub Pages

1. Create a new repository on GitHub named **`<your-github-username>.github.io`** (or any repository name you like).
2. Upload or push the files in this folder (`index.html`, `styles.css`, `config.js`, `app.js`, `README.md`).
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select the **`main`** branch and **`/ (root)`**, and click **Save**.
5. Your site will be live at `https://<your-github-username>.github.io` within ~60 seconds!

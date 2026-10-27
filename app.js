// ============================================================================
// APP RENDERER
// Reads SITE_CONFIG from config.js and populates the entire page dynamically.
// ============================================================================

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c3.5 1 6.5 1 10 0"/><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.5 4.16 9 4l1 2.5"/></svg>`,
  steam: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path d="M14 14.5 9.5 17"/><circle cx="7.5" cy="17.5" r="2"/><path d="M12 2a10 10 0 1 1-9.54 13l3.1 1.3"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3v6Z"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>`,
  roblox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.2 3 21 6.8 17.2 21.6 2.4 17.8 6.2 3Z"/><path d="m10.5 9.8 3.7 1-1 3.7-3.7-1 1-3.7Z"/></svg>`,
  namemc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10h2v2H7zM15 10h2v2h-2zM9 15h6v2H9z"/></svg>`,
  gunslol: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
};

function getIcon(name) {
  return ICONS[name?.toLowerCase()] || ICONS.link;
}

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2000);
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`Copied ${label || "to clipboard"}`);
  } catch {
    showToast("Copy failed");
  }
}

function renderSite() {
  const cfg = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : window.SITE_CONFIG;
  if (!cfg) return;

  // 1. Profile & Header
  document.title = `${cfg.profile.name} — ${cfg.profile.tagline}`;
  document.getElementById("nav-brand").textContent = cfg.profile.handle || cfg.profile.name;

  const bannerWrap = document.getElementById("hero-banner-wrap");
  const bannerImg = document.getElementById("profile-banner");
  if (cfg.profile.banner && bannerImg && bannerWrap) {
    bannerImg.src = cfg.profile.banner;
    bannerWrap.style.display = "block";
  } else if (bannerWrap) {
    bannerWrap.style.display = "none";
  }

  document.getElementById("profile-avatar").src = cfg.profile.avatar;
  document.getElementById("profile-avatar").alt = cfg.profile.name;
  document.getElementById("profile-name").textContent = cfg.profile.name;
  document.getElementById("profile-handle").textContent = cfg.profile.handle;
  document.getElementById("profile-location").textContent = cfg.profile.location;
  document.getElementById("profile-status").textContent = cfg.profile.status;
  document.getElementById("profile-tagline").textContent = cfg.profile.tagline;
  document.getElementById("profile-bio").textContent = cfg.profile.bio;
  document.getElementById("footer-copy").textContent = `© ${new Date().getFullYear()} ${cfg.profile.name}`;

  // Hero social pills
  const heroSocials = document.getElementById("hero-socials");
  heroSocials.innerHTML = (cfg.socials || [])
    .map(
      (s) => `
      <a class="social-pill" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${getIcon(s.icon)}
        <span>${s.label}</span>
      </a>
    `
    )
    .join("");

  // 2. Gallery / Setup Showcase (optional section)
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.innerHTML = (cfg.gallery || [])
      .map(
        (item, idx) => `
        <article class="gallery-card ${item.featured ? "featured" : ""}" data-gallery-idx="${idx}">
          <div class="gallery-image-wrap">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="gallery-info">
            <span class="gallery-tag">${item.category}</span>
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-caption">${item.caption}</p>
          </div>
        </article>
      `
      )
      .join("");

    galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = Number(card.getAttribute("data-gallery-idx"));
        openLightbox(cfg.gallery[idx]);
      });
    });
  }

  // 3. Hardware & PC Specs
  const hardwareGrid = document.getElementById("hardware-grid");
  hardwareGrid.innerHTML = (cfg.hardware || [])
    .map(
      (hw) => `
      <div class="spec-card" data-copy="${hw.name}" data-label="${hw.category}">
        <div>
          <span class="spec-category">${hw.category}</span>
          <h3 class="spec-name">${hw.name}</h3>
          <p class="spec-detail">${hw.detail}</p>
        </div>
        <span class="copy-hint">Copy</span>
      </div>
    `
    )
    .join("");

  hardwareGrid.querySelectorAll(".spec-card").forEach((card) => {
    card.addEventListener("click", () => {
      copyText(card.getAttribute("data-copy"), card.getAttribute("data-label"));
    });
  });

  // 4. Software, Apps & Game Settings
  const sw = cfg.softwareAndConfigs || {};

  const settingsStrip = document.getElementById("settings-strip");
  settingsStrip.innerHTML = (sw.gameSettings || [])
    .map(
      (st) => `
      <div class="setting-box">
        <span class="setting-label">${st.label}</span>
        <span class="setting-value">${st.value}</span>
      </div>
    `
    )
    .join("");

  const appsGrid = document.getElementById("apps-grid");
  appsGrid.innerHTML = (sw.apps || [])
    .map(
      (app) => `
      <div class="app-card">
        <div class="app-top">
          <span class="app-name">${app.name}</span>
          <span class="app-tag">${app.tag || app.category}</span>
        </div>
        <p class="app-desc">${app.description}</p>
      </div>
    `
    )
    .join("");

  const snippetsList = document.getElementById("snippets-list");
  snippetsList.innerHTML = (sw.snippets || [])
    .map(
      (snip, idx) => `
      <div class="snippet-card">
        <div class="snippet-header">
          <div>
            <div class="snippet-title">${snip.title}</div>
            <div class="snippet-subtitle">${snip.subtitle}</div>
          </div>
          <button class="copy-btn" type="button" data-snippet-idx="${idx}">Copy Config</button>
        </div>
        <code class="snippet-code">${snip.code}</code>
      </div>
    `
    )
    .join("");

  snippetsList.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-snippet-idx"));
      const snip = sw.snippets[idx];
      copyText(snip.code, snip.title);
    });
  });

  // 5. Other Things
  const otherList = document.getElementById("other-list");
  otherList.innerHTML = (cfg.otherThings || [])
    .map(
      (item) => `
      <div class="other-row">
        <div class="other-cat">${item.category}</div>
        <div>
          <div class="other-title">${item.title}</div>
          <div class="other-detail">${item.detail}</div>
        </div>
      </div>
    `
    )
    .join("");

  // 6. Socials Grid
  const socialsGrid = document.getElementById("socials-grid");
  socialsGrid.innerHTML = (cfg.socials || [])
    .map(
      (s) => `
      <a class="social-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <div class="social-card-left">
          ${getIcon(s.icon)}
          <div>
            <span class="social-label">${s.label}</span>
            <span class="social-handle">${s.handle}</span>
          </div>
        </div>
        <span class="social-arrow">↗</span>
      </a>
    `
    )
    .join("");
}

// Lightbox Modal Controls
function openLightbox(item) {
  if (!item) return;
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = item.image;
  document.getElementById("lightbox-img").alt = item.title;
  document.getElementById("lightbox-category").textContent = item.category;
  document.getElementById("lightbox-title").textContent = item.title;
  document.getElementById("lightbox-caption").textContent = item.caption;
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
}

function initInteractions() {
  // Lightbox events
  document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Theme Toggle (defaults to light minimalist aesthetic)
  const savedTheme = localStorage.getItem("site-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("site-theme", next);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initInteractions();
  renderSite();
});

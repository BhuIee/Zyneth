// ============================================================================
// SITE CONFIGURATION
// Edit the values below to customize your GitHub Page!
// Everything on the page updates automatically from this single file.
// ============================================================================

const SITE_CONFIG = (window.SITE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. PROFILE & ABOUT ME
  // --------------------------------------------------------------------------
  profile: {
    name: "BhuIe",
    handle: "@BhuIe",
    tagline: "PC Setup, Daily Drivers & Configs",
    bio: "Here you'll find my current PC build, desk showcase, daily software stack, and in-game settings.",
    status: "Online • Building & Gaming",
    location: "Earth",
    // Profile picture & top banner image (stored right in this folder)
    avatar: "pfp.jpg",
    banner: "banner.png",
  },

  // --------------------------------------------------------------------------
  // 2. SOCIAL LINKS
  // Supported icons: "gunslol", "namemc", "roblox", "twitch", "github", "discord", "youtube", "steam", "x", "mail", "link"
  // --------------------------------------------------------------------------
  socials: [
    {
      label: "guns.lol",
      handle: "guns.lol/BhuIe",
      url: "https://guns.lol/BhuIe",
      icon: "gunslol",
    },
    {
      label: "NameMC",
      handle: "namemc.com/profile/BhuIe.1",
      url: "https://namemc.com/profile/BhuIe.1",
      icon: "namemc",
    },
    {
      label: "Roblox",
      handle: "BhuIe",
      url: "https://www.roblox.com/users/11353392590/profile",
      icon: "roblox",
    },
    {
      label: "Twitch",
      handle: "twitch.tv/o_bhuie",
      url: "https://www.twitch.tv/o_bhuie",
      icon: "twitch",
    },
    {
      label: "Discord",
      handle: "BhuIe",
      url: "https://discord.gg/6PwYjKv5fS",
      icon: "discord",
    },
    {
      label: "YouTube",
      handle: "@BhuIe",
      url: "https://www.youtube.com/@BhuIe",
      icon: "youtube",
    },
    {
      label: "GitHub",
      handle: "github.com/BhuIee",
      url: "https://github.com/BhuIee",
      icon: "github",
    },
  ],

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 3. PC SPECS & GEAR OVERVIEW
  // Quick-reference hardware cards (click any item on the page to copy its name)
  // --------------------------------------------------------------------------
  hardware: [
    { category: "CPU", name: "Intel Core i5-13400F", detail: "13th Gen • 10 Cores (6P+4E) / 16 Threads • Up to 4.6 GHz" },
    { category: "GPU", name: "NVIDIA GeForce RTX 4060", detail: "8GB GDDR6 • Ada Lovelace • DLSS 3" },
    { category: "RAM", name: "16GB System Memory", detail: "Dual Channel Configuration" },
    { category: "Monitor", name: "240Hz ASUS TUF VG259QM5A", detail: "24.5\" 1080p 240Hz Fast IPS • G-Sync Compatible" },
    { category: "Mouse", name: "Attack Shark X3", detail: "49g Ultralight Wireless • PAW3395 • 900 DPI @ 1000Hz" },
    { category: "Keyboard", name: "Akko TAC75 HE (Black)", detail: "75% Hall Effect Magnetic Switches • Rapid Trigger" },
    { category: "Primary SSD (C:)", name: "256GB Micron 2450 NVMe", detail: "PCIe Gen4 x4 M.2 SSD • OS & Core Apps" },
    { category: "Secondary Storage (Y:)", name: "1TB WD Blue (WD10EZEX)", detail: "\"Zyneth\" • Games & Media Library" },
  ],

  // --------------------------------------------------------------------------
  // 5. SOFTWARE, APPS & GAME SETTINGS
  // --------------------------------------------------------------------------
  softwareAndConfigs: {
    // Daily driver apps & tools
    apps: [
      {
        name: "Helium Browser",
        category: "Browser",
        description: "Ultralight, privacy-focused Chromium browser for fast daily browsing.",
        tag: "Daily Driver",
      },
      {
        name: "Pandora Launcher",
        category: "Minecraft",
        description: "Main launcher for Minecraft PvP, SMPs & Survival (Fabric, Zoomify, GammaUtils, EntityCulling, Zyneth Optimizer).",
        tag: "Launcher",
      },
      {
        name: "Medal.tv",
        category: "Clipping",
        description: "Instant background gameplay clipping for Minecraft PvP, Roblox, and GTA.",
        tag: "Clips",
      },
      {
        name: "Discord & Spotify",
        category: "Comms & Audio",
        description: "Daily voice comms, SMP servers, and background playlists.",
        tag: "Social",
      },
      {
        name: "Roblox",
        category: "Gaming",
        description: "240Hz native fullscreen setup paired with low-latency NVIDIA settings.",
        tag: "Games",
      },
      {
        name: "Windows 11 Home (26H2)",
        category: "OS",
        description: "Build 26300 • Hardware-accelerated GPU scheduling enabled, Game Mode ON.",
        tag: "System",
      },
    ],

    // Game settings & tuning parameters
    gameSettings: [
      { label: "Mouse DPI & Polling", value: "900 DPI • 1000 Hz" },
      { label: "MC Sensitivity", value: "31% • Raw Input ON" },
      { label: "FOV & View", value: "90 FOV • Dynamic FOV & Bobbing OFF" },
      { label: "FPS & Display", value: "240 FPS Cap • VSync OFF • GUI Scale 2" },
      { label: "Render & Simulation", value: "10 Chunks Render • 6 Chunks Sim" },
      { label: "Graphics Tweaks", value: "Entity Shadows OFF • Smooth Lighting OFF" },
    ],

    // Copyable config snippets (Crosshairs, launch options, dotfiles, etc.)
    snippets: [
      {
        title: "Minecraft Hotbar & PvP Keybinds",
        subtitle: "Pandora Launcher • Custom Keybind Layout",
        code: `Hotbar 1–9 : [1] [Q] [E] [4] [R] [Z] [C] [V] [Mouse 4]
Inventory  : Tab          | Offhand Swap : F
Drop Item  : X            | Sprint       : 5 (Toggle Sprint ON)
Perspective: Mouse 5      | Player List  : Y
Zoom       : G (Zoomify)  | Optimizer    : Right Shift`,
      },
      {
        title: "Minecraft Video & Resource Pack Setup",
        subtitle: "240Hz PvP Optimized Settings",
        code: `Resolution : 1920x1080 @ 240Hz (Fullscreen ON, VSync OFF)
FOV / Sens : 90 FOV (0.0 FOV Effect Scale) | 31% Sens | GUI Scale 2
Distances  : 10 Render | 6 Simulation | Clouds & Vignette OFF
Packs      : vanilla pvp 1.33.zip, Reaper's PVP Pack.zip, Fast Better Grass.zip`,
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. OTHER THINGS (Currently Playing, Bookmarks, or Notes)
  // --------------------------------------------------------------------------
  otherThings: [
    {
      category: "Currently Playing",
      title: "Minecraft (PvP / SMPs / Survival), Roblox, GTA V & CS2",
      detail: "Mainly grinding Minecraft PvP & SMPs on Pandora Launcher, plus Roblox and GTA.",
    },
    {
      category: "Minecraft Packs",
      title: "vanilla pvp 1.33 • Reaper's PVP Pack • Fast Better Grass",
      detail: "Clean low-fire / short-sword overlays with zero dynamic FOV and view bobbing off.",
    },
    {
      category: "Client & Mods",
      title: "Pandora Launcher + Zyneth Optimizer",
      detail: "Running Fabric with EntityCulling, GammaUtils, Zoomify, Iris, and Zyneth Optimizer.",
    },
  ],
});

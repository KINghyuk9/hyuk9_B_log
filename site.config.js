const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyuk_9_log",
    image: "/sit.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "junior developer",
    bio: "공부하면 행복하다",
    email: "dlgur9612@gmail.com",
    linkedin: "",
    github: "KINhyuk9",
    instagram: "hyuk9world",
  },
  projects: [
    {
      name: `Study with me`,
      href: "https://hyuk9_b_log.web.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hyuk_9_log",
    description: "Hello, I'm hyuk_9",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://hyukBlog.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: 'c289d549a5a1482da44a77a8ceb7c989',
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "KINghyuk9/hyuk9_B_log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

const CONFIG = {
  // profile setting
  profile: {
    name: 'hyuk_9_log',
    image: ['/profile.png', '/profile-hover.png'],
    discription: 'junior developer',
    linkedin: 'morethanmin',
    email: 'dlgur9612@gmail.com',
    github: 'KINhyuk9',
    instagram: 'hyuk9world',
  },
  projects: [
    {
      name: 'Study with me',
      // href: 'https://untilled.web.app'
    }
  ],
  // blog setting
  blog: {
    title: 'hyuk_9_log', // blog 타이틀과
    description: '개발자로 성장하기',
  },

  // CONFIG configration
  link: 'https://hyukBlog.web.app',
  // link: 'https://morethan-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: '6101917972ce4602a1e764eaaec15e1f' ,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: 'G-9N3FE0117Q'
    }
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: 'qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w'
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log'
    }
  },

  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

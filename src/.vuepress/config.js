module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'Twitch Streamers Guide',
      description: 'Twitch OBS Streamlabs 配信 ツール ガイド'
    }
  },
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
      integrity: 'sha384-xxx',
      crossorigin: 'anonymous'
    }],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js'
    }],
    ['script', {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'
    }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      href: '/apple-touch-icon.png'
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    }],
    ['link', {
      rel: 'manifest',
      href: '/site.webmanifest'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#73c9c9'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#00aba9',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff',
    }],
    ['meta', {
      name: "keywords",
      content: "Twitch, 配信, ガイド,　OBS, Streamlabs"
    }],
    ['meta', {
      name: "og:title",
      content: "Twitch Streamers Guide"
    }],
    ['meta', {
      name: "og:description",
      content: "Twitch OBS Streamlabs 配信 ツール ガイド"
    }],
    ['meta', {
      name: "og:type",
      content: "website"
    }],
    ['meta', {
      name: "og:url",
      content: "og　url"
    }],
    ['meta', {
      name: "og:image",
      content: "/android-chrome-512x512.png"
    }]
  ],
  themeConfig: {
    logo: '/android-chrome-512x512.png',
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Twitch',
        link: 'https://www.twitch.tv/'
      },
      {
        text: 'OBS',
        link: 'https://obsproject.com/ja'
      },
      {
        text: 'Streamlabs',
        link: 'https://streamlabs.com/login?r=https://streamlabs.com/dashboard'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'twitch.md',
        'obs.md',
        'streamlabs.md',

      ],
      sidebarDepth: 2
    },
    markdown: {
      linkify: true,
      config: md => {
        md.use(require('markdown-it-fontawesome'))
      },
    }
  }
}
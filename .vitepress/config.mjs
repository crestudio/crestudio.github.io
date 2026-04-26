import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caramel Macchiato",
  description: "| DESIGN. DRAW. PLAY.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo/caramel_macchiato_black.png',
      dark: '/logo/caramel_macchiato_white.png',
      alt: 'Caramel Macchiato'
    },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      link: '/'
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/'
    }
  }
})

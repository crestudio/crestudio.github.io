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

    search: {
      provider: 'local'
    },

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
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://macchiato.booth.pm',
        ariaLabel: 'BOOTH'
      },
      { icon :{
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.8,0H7.2C2.23,0,0,2.23,0,7.2v9.6c0,4.97,2.23,7.2,7.2,7.2h9.6c4.97,0,7.2-2.23,7.2-7.2V7.2c0-4.97-2.23-7.2-7.2-7.2ZM5.32,14.85c-1.57,0-2.85-1.28-2.85-2.85s1.28-2.85,2.85-2.85,2.85,1.28,2.85,2.85-1.28,2.85-2.85,2.85ZM21.53,12c0,1.67-.9,2.6-2.52,2.6h-6.88c-1.61,0-2.52-.93-2.52-2.6h0c0-1.66.9-2.6,2.52-2.6h6.88c1.61,0,2.52.93,2.52,2.6h0Z"/></svg>'
        },
        link : 'https://www.vrsuya.com',
        ariaLabel: 'VRSuya'
      },
      { icon: 'twitter', link: 'https://twitter.com/VRC_Macchiato' },
      { icon: 'discord', link: 'https://discord.gg/macchiato' },
      { icon: 'youtube', link: 'https://www.youtube.com/@%EB%A7%88%EB%81%BC%EC%95%84%EB%98%90-Art' },
      { icon: 'github', link: 'https://github.com/crestudio' }
    ],

    externalLinkIcon: true,

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'MIT 라이선스에 따라 릴리즈되었습니다.',
      copyright: 'Copyright 2011-2026 Caramel Macchiato. All rights reserved. Powered by VitePress'
    }
  },
  lang: 'ko',
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
  },
  cleanUrls: true,
  sitemap: {
    hostname: 'https://macchiato.kr'
  }
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Caramel Macchiato",
  description: "| DESIGN. DRAW. PLAY.",
  themeConfig: {
    logo: {
      light: '/assets/logo/caramel_macchiato_logo_light.svg',
      dark: '/assets/logo/caramel_macchiato_logo_dark.svg',
      alt: 'Caramel Macchiato'
    },
    siteTitle: false,

    search: {
      provider: 'local'
    },

    socialLinks: [
      { 
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0,0h24v24H0V0ZM18.14,10.27v-1.15l-2.88-4.62h-1l-1.57,3.78-1.55-3.25h-.87s-2.62,6.19-2.62,6.19v-5.88h-1.78v.52h-1.36v1.81h1.36v5.23c0,.46.38.84.84.84h.89v5.76h1.82s0-2.61,0-2.61c0-1.45,1.25-2.62,2.8-2.63,0,0,.01,0,.02,0h0c2.53,0,4.58,1.92,4.58,4.28v.96h1.33v-5.17h1.36v-2.86l-1.36-1.2Z"/></svg>'
        },
        link: 'https://macchiato.booth.pm',
        ariaLabel: 'BOOTH'
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
      message: 'Reproduction and distribution of the website without written permission of the author is prohibited. Built with VitePress.',
      copyright: 'Copyright 2011-2026 Caramel Macchiato. All rights reserved.'
    }
  },
  lang: 'ko',
  locales: {
    root: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/',
      themeConfig: {
        nav: [
          { text: '처음으로', link: '/' },
          { text: '마끼아또',
            items: [
              {text: '소개', link: '/macchiato' },
              {text: '포트폴리오', link: '/macchiato/portfolio' }
            ]
          },
          { text: '새로운 소식', link: '/news' },
          { text: 'VRChat',
            items: [
              {
                text: '로코나',
                items: [
                  {text: '아바타 소개', link: '/vrchat/rokona' },
                  {text: '대응 아이템', link: '/vrchat/rokona/item' },
                  {text: '업데이트 로그', link: '/vrchat/rokona/update' }
                ]
              },
              {
                text: '애드온',
                items: [
                  {text: 'VPM', link: '/vrchat/addon/vpm' },
                  {text: 'Cleaner', link: '/vrchat/addon/cleaner' },
                  {text: 'Core', link: '/vrchat/addon/core' },
                  {text: 'Utility', link: '/vrchat/addon/utility' }
                ]
              }
            ]
          },
          { text: '블로그',
            items: [
              {
                text: '마인크래프트',
                items: [
                  {text: '서버 정보', link: '/minecraft' },
                  {text: '서버 규칙', link: '/minecraft/rule' },
                  {text: '커맨드 목록', link: '/minecraft/command' },
                  {text: '웹 지도', link: 'http://minecraft.macchiato.kr' }
                ]
              },
              {
                text: '리썰 컴퍼니',
                items: [
                  {text: '모드 리스트', link: '/lethal-company/mod-information/mod-list' },
                  {text: '모드 세팅 방법', link: '/lethal-company/mod-setup' },
                  {text: '모드 플레이', link: '/lethal-company/play' }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/macchiato/': [
            {
              text: '마끼아또',
              items: [
                {text: '소개', link: '/macchiato' }
              ]
            },
            {
              text: '포트폴리오',
              collapsed: false,
              items: [
                {text: '포트폴리오', link: '/macchiato/portfolio' },
                {text: '로코나', link: '/vrchat/rokona' }
              ]
            }
          ],
          '/news/': [
            {
              text: '새로운 소식',
              items: [
                {text: '개요', link: '/news' }
              ]
            }
          ],
          '/vrchat/': [
            {
              text: '로코나',
              items: [
                {text: '아바타 소개', link: '/vrchat/rokona' },
                {text: '대응 아이템', link: '/vrchat/rokona/item' },
                {text: '업데이트 로그', link: '/vrchat/rokona/update' },
                {text: 'BOOTH 페이지', link: 'https://macchiato.booth.pm/items/7682496' }
              ]
            },
            {
              text: 'VPM',
              items: [
                {text: 'VPM 등록', link: '/addon/vpm' }
              ]
            },
            {
              text: '애드온',
              collapsed: false,
              items: [
                {text: 'Cleaner', link: '/addon/cleaner' },
                {text: 'Core', link: '/addon/core' },
                {text: 'Utility', link: '/addon/utility' }
              ]
            }
          ],
          '/minecraft/': [
            {
              text: '마인크래프트',
              items: [
                {text: '서버 정보', link: '/minecraft' },
                {text: '서버 규칙', link: '/minecraft/rule' },
                {text: '커맨드 목록', link: '/minecraft/command' },
                {text: '웹 지도', link: 'http://minecraft.macchiato.kr' }
              ]
            }
          ],
          '/lethal-company/': [
            {
              text: '리썰 컴퍼니',
              collapsed: false,
              items: [
                {text: '모드 리스트', link: '/lethal-company/mod-information/mod-list' },
                {text: '이지 모드', link: '/lethal-company/mod-information/easy-mod' },
                {text: '하드 모드', link: '/lethal-company/mod-information/hard-mod' },
                {text: '인세인 모드', link: '/lethal-company/mod-information/insane-mod' },
              ]
            },
            {
              text: '가이드',
              items: [
                {text: '모드 세팅 방법', link: '/lethal-company/mod-setup' },
                {text: '모드 플레이', link: '/lethal-company/play' }
              ]
            }
          ]
        },
        sidebarMenuLabel: '메뉴',
        outline: {
          label: '목차'
        },
        returnToTopLabel: '맨 위로 이동'
      },
      markdown: {
        container: {
          tipLabel: '팁',
          warningLabel: '주의',
          dangerLabel: '중요',
          infoLabel: '안내',
          detailsLabel: '상세'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'はじめに', link: '/ja' },
          { text: 'マキアート',
            items: [
              {text: '紹介', link: '/ja/macchiato' },
              {text: 'ポートフォリオ', link: '/ja/macchiato/portfolio' }
            ]
          },
          { text: '新着情報', link: '/ja/news' },
          { text: 'VRChat',
            items: [
              {
                text: 'ロコナ',
                items: [
                  {text: 'アバター紹介', link: '/ja/vrchat/rokona' },
                  {text: '対応アイテム', link: '/ja/vrchat/rokona/item' },
                  {text: 'アップデート記録', link: '/ja/vrchat/rokona/update' }
                ]
              },
              {
                text: 'アドオン',
                items: [
                  {text: 'VPM', link: '/ja/vrchat/addon/vpm' },
                  {text: 'Cleaner', link: '/ja/vrchat/addon/cleaner' },
                  {text: 'Core', link: '/ja/vrchat/addon/core' },
                  {text: 'Utility', link: '/ja/vrchat/addon/utility' }
                ]
              }
            ]
          },
          { text: 'ブログ',
            items: [
              {
                text: 'マインクラフト',
                items: [
                  {text: 'サーバー情報', link: '/ja/minecraft' },
                  {text: 'サーバールール', link: '/ja/minecraft/rule' },
                  {text: 'コマンド一覧', link: '/ja/minecraft/command' },
                  {text: 'Webマップ', link: 'http://minecraft.macchiato.kr' }
                ]
              },
              {
                text: 'Lethal Company',
                items: [
                  {text: 'MODリスト', link: '/ja/lethal-company/mod-information/mod-list' },
                  {text: 'MODの設定方法', link: '/ja/lethal-company/mod-setup' },
                  {text: 'MODでプレイする方法', link: '/ja/lethal-company/play' }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/ja/macchiato/': [
            {
              text: 'マキアート',
              items: [
                {text: '紹介', link: '/ja/macchiato' }
              ]
            },
            {
              text: 'ポートフォリオ',
              collapsed: false,
              items: [
                {text: 'ポートフォリオ', link: '/ja/macchiato/portfolio' },
                {text: 'ロコナ', link: '/ja/vrchat/rokona' }
              ]
            }
          ],
          '/ja/news/': [
            {
              text: '新着情報',
              items: [
                {text: '新着情報', link: '/ja/news' }
              ]
            }
          ],
          '/ja/vrchat/': [
            {
              text: 'ロコナ',
              items: [
                {text: 'アバター紹介', link: '/ja/vrchat/rokona' },
                {text: '対応アイテム', link: '/ja/vrchat/rokona/item' },
                {text: 'アップデート記録', link: '/ja/vrchat/rokona/update' },
                {text: 'BOOTHページ', link: 'https://macchiato.booth.pm/items/7682496' }
              ]
            },
            {
              text: 'VPM',
              items: [
                {text: 'VPM登録', link: '/ja/addon/vpm' }
              ]
            },
            {
              text: 'アドオン',
              collapsed: false,
              items: [
                {text: 'Cleaner', link: '/ja/addon/cleaner' },
                {text: 'Core', link: '/ja/addon/core' },
                {text: 'Utility', link: '/ja/addon/utility' }
              ]
            }
          ],
          '/ja/minecraft/': [
            {
              text: 'マインクラフト',
              items: [
                {text: 'サーバー情報', link: '/ja/minecraft' },
                {text: 'サーバールール', link: '/ja/minecraft/rule' },
                {text: 'コマンド一覧', link: '/ja/minecraft/command' },
                {text: 'Webマップ', link: 'http://minecraft.macchiato.kr' }
              ]
            }
          ],
          '/ja/lethal-company/': [
            {
              text: 'Lethal Company',
              collapsed: false,
              items: [
                {text: 'MODリスト', link: '/ja/lethal-company/mod-information/mod-list' },
                {text: 'イージーモード', link: '/ja/lethal-company/mod-information/easy-mod' },
                {text: 'ハードモード', link: '/ja/lethal-company/mod-information/hard-mod' },
                {text: 'インセインモード', link: '/ja/lethal-company/mod-information/insane-mod' },
              ]
            },
            {
              text: 'ガイド',
              items: [
                {text: 'MODの設定方法', link: '/ja/lethal-company/mod-setup' },
                {text: 'MODでプレイする方法', link: '/ja/lethal-company/play' }
              ]
            }
          ]
        },
        sidebarMenuLabel: 'メニュー',
        outline: {
          label: '目次'
        },
        returnToTopLabel: 'ページ top へ'
      },
      markdown: {
        container: {
          tipLabel: 'ヒント',
          warningLabel: 'ご注意',
          dangerLabel: '重要',
          infoLabel: 'ご案内',
          detailsLabel: '詳細'
        }
      }
    }
  },
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Caramel Macchiato' }],
    ['meta', { property: 'og:description', content: '| DESIGN. DRAW. PLAY.' }],
    ['meta', { property: 'og:siteName', content: 'Caramel Macchiato' }],
    ['meta', { property: 'og:image', content: 'https://macchiato.kr/assets/card/website_card.jpg' }],
    ['meta', { property: 'og:url', content: 'https://macchiato.kr' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Caramel Macchiato' }],
    ['meta', { name: 'twitter:description', content: '| DESIGN. DRAW. PLAY.' }],
    ['meta', { name: 'twitter:image', content: 'https://macchiato.kr/assets/card/website_card.jpg' }],
    ['meta', { name: 'twitter:creator', content: '@VRSuya' }],
    ['meta', { name: 'twitter:domain', content: 'macchiato.kr' }]
  ],
  sitemap: {
    hostname: 'https://macchiato.kr'
  },

  async transformHead({ pageData, siteConfig }) {
    const head = []

    const title =
      pageData.frontmatter.title ||
      pageData.title ||
      siteConfig.site.title

    const description =
      pageData.frontmatter.description ||
      siteConfig.site.description

    const image = pageData.frontmatter.image || 'https://macchiato.kr/assets/card/website_card.jpg'
    const isJa = pageData.relativePath.startsWith('ja/')
    const locale = isJa ? 'ja_JP' : 'ko_KR'
    const alternateLocale = isJa ? 'ko_KR' : 'ja_JP'

    if (title) {
      head.push(['meta', { property: 'og:title', content: title }])
      head.push(['meta', { name: 'twitter:title', content: title }])
    }
    if (description) {
      head.push(['meta', { property: 'og:description', content: description }])
      head.push(['meta', { name: 'twitter:description', content: description }])
    }
    if (image) {
      head.push(['meta', { property: 'og:image', content: image }])
      head.push(['meta', { name: 'twitter:image', content: image }])
      head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
    }

    head.push(['meta', { property: 'og:siteName', content: 'Caramel Macchiato' }])
    head.push(['meta', { property: 'og:url', content: `https://macchiato.kr${pageData.relativePath.replace(/(index)?\.md$/, '')}` }])
    head.push(['meta', { property: 'og:type', content: 'website' }])
    head.push(['meta', { property: 'og:locale', content: locale }])
    head.push(['meta', { property: 'og:locale:alternate', content: alternateLocale }])

    head.push(['meta', { property: 'twitter:domain', content: 'macchiato.kr' }])
    head.push(['meta', { property: 'twitter:creator', content: '@VRC_Macchiato' }])

    return head
  }
})

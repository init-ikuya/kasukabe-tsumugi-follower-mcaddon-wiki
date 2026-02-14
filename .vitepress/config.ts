import { defineConfig } from 'vitepress'

/**
 * このWikiが対応しているアドオンのバージョン
 * 更新時はここを変更すれば、ナビバーとトップページに反映される
 */
export const ADDON_VERSION = 'v1.0.0'

export default defineConfig({
  base: '/kasukabe-tsumugi-follower-mcaddon-wiki/',
  title: '春日部つむぎ フォロワーアドオン Wiki',
  description: 'Minecraft Bedrock Edition 用フォロワーアドオンの攻略Wiki',
  lang: 'ja',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://init-ikuya.github.io/kasukabe-tsumugi-follower-mcaddon-wiki/',
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffcd31' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:site_name', content: '春日部つむぎ フォロワーアドオン Wiki' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/guide/introduction' },
      { text: '機能', link: '/features/taming' },
      { text: 'リファレンス', link: '/reference/stats' },
      { text: `対応: ${ADDON_VERSION}`, link: '/reference/changelog' },
      {
        text: '不具合報告・要望',
        link: 'https://github.com/init-ikuya/kasukabe-tsumugi-follower-mcaddon-wiki/issues',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: 'はじめに', link: '/guide/introduction' },
            { text: 'インストール方法', link: '/guide/installation' },
            { text: '遊び方ガイド', link: '/guide/getting-started' },
            { text: 'よくある質問', link: '/guide/faq' },
          ],
        },
      ],
      '/features/': [
        {
          text: '機能詳細',
          items: [
            { text: 'テイムシステム', link: '/features/taming' },
            { text: '好感度システム', link: '/features/affection' },
            { text: '戦闘システム', link: '/features/combat' },
            { text: '装備システム', link: '/features/equipment' },
            { text: '追従・ナビゲーション', link: '/features/follow' },
            { text: 'ボイスシステム', link: '/features/voice' },
            { text: 'カレーアイテム', link: '/features/curry' },
            { text: 'UIメニュー', link: '/features/ui-menu' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'リファレンス',
          items: [
            { text: 'ステータスリファレンス', link: '/reference/stats' },
            { text: 'ボイスライン一覧', link: '/reference/voice-lines' },
            { text: 'コマンド一覧', link: '/reference/commands' },
            { text: '変更履歴', link: '/reference/changelog' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ikuya-sato/kasukabe-tsumugi-follower-mcaddon' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: '検索',
          },
          modal: {
            noResultsText: '結果が見つかりませんでした',
            resetButtonTitle: 'リセット',
            footer: {
              selectText: '選択',
              navigateText: '移動',
              closeText: '閉じる',
            },
          },
        },
      },
    },

    footer: {
      message: '音声: VOICEVOX:春日部つむぎ',
      copyright: 'キャラクターデザイン: 春日部つむぎ公式',
    },

    outline: {
      label: '目次',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },

    lastUpdated: {
      text: '最終更新',
    },

    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'テーマ切替',
  },

  markdown: {
    config: (md) => {
      // Mermaid support is built into VitePress
    },
  },
})

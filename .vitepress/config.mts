import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ponies Of Fayra Wiki",
  description: "The unofficial Ponies Of Fayra wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Characters', link: '/characters/characters-list' }
    ],

    sidebar: [
      {
        text: 'Characters',
        items: [
		  { text: 'Characters List', link: '/characters/characters-list' },
		  { text: 'Zeph', link: '/characters/zeph' },
		  {text: 'Argon', link: '/characters/argon' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import DefaultTheme from 'vitepress/theme-without-fonts'
import EmbedTweet from './component/embedtweet.vue'
import IllustrationGrid from './component/illustrationgrid.vue'
import ItemGrid from './component/itemgrid.vue'

import './caramel_macchiato.css'
import './features.css'
import './hero.css'
import './hero_macchiato.css'
import './hero_minecraft.css'
import './minecraft_table.css'
import './video.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('EmbedTweet', EmbedTweet),
    app.component('IllustrationGrid', IllustrationGrid),
    app.component('ItemGrid', ItemGrid)
  }
}
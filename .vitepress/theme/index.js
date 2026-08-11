import DefaultTheme from 'vitepress/theme-without-fonts'
import ItemGrid from './component/itemgrid.vue'
import IllustrationGrid from './component/illustrationgrid.vue'

import './caramel_macchiato.css'
import './features.css'
import './hero.css'
import './hero_macchiato.css'
import './video.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ItemGrid', ItemGrid),
    app.component('IllustrationGrid', IllustrationGrid)
  }
}
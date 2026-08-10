import DefaultTheme from 'vitepress/theme-without-fonts'
import ItemGrid from './component/itemgrid.vue'

import './caramel_macchiato.css'
import './features.css'
import './hero.css'
import './video.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ItemGrid', ItemGrid)
  }
}
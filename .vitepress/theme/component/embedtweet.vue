<template>
  <div class="tweet-container" :key="tweetKey">
    <blockquote 
      class="twitter-tweet" 
      :data-theme="isDark ? 'dark' : 'light'"
      data-align="center"
    >
      <a :href="url"></a>
    </blockquote>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const { isDark } = useData()
const tweetKey = ref(0)

const renderTwitterWidget = () => {
  if (typeof window === 'undefined') return
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load()
  } else if (!document.getElementById('twitter-wjs')) {
    const script = document.createElement('script')
    script.id = 'twitter-wjs'
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.head.appendChild(script)
  }
}

onMounted(() => {
  renderTwitterWidget()
})

watch(isDark, () => {
  tweetKey.value++
  nextTick(() => {
    renderTwitterWidget()
  })
})
</script>

<style scoped>
.tweet-container {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  min-height: 250px;
}
</style>
<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const tagTranslations = {
  'ko-KR': {
    cloth: '의상',
    hair: '헤어',
    accessory: '액세서리',
    gimmick: '기믹',
    material: '머테리얼',
    texture: '텍스쳐',
    free: '무료'
  },
  'ja-JP': {
    cloth: '衣装',
    hair: '髪型',
    accessory: 'アクセサリー',
    gimmick: 'ギミック',
    material: 'マテリアル',
    texture: 'テクスチャ',
    free: '無料'
  }
}

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const getTagLabel = (tagKey) => {
  const currentLang = lang.value || 'ko-KR'
  const isJapanese = currentLang.includes('ja')
  const langKey = isJapanese ? 'ja-JP' : 'ko-KR'
  return tagTranslations[langKey]?.[tagKey] || tagKey
}

const getLearnMoreText = computed(() => {
  return lang.value?.includes('ja') ? '詳しく見る' : '더 알아보기'
})
</script>

<template>
  <div class="product-grid">
    <div v-for="(item, idx) in items" :key="idx" class="product-card">
      <img :src="item.image" :alt="item.title" class="card-bg-image" />
      <div class="card-overlay">
        <span v-if="item.store" class="store-badge">{{ item.store }}</span>
        <h3 class="product-title">{{ item.title }}</h3>
        <div v-if="item.tags && item.tags.length" class="tag-container">
          <span v-for="tag in item.tags" :key="tag" class="tag-pill">
            {{ getTagLabel(tag) }}
          </span>
        </div>
        <a :href="item.link" target="_blank" rel="noopener noreferrer" class="learn-more-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
          </svg>
          {{ getLearnMoreText }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.product-card {
  position: relative;
  height: 420px;
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid var(--vp-c-bg-soft);
  transition: border-color 0.25s;
}

.product-card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  color: #ffffff;
}

.store-badge {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  padding: 0 0;
  width: fit-content;
  margin-bottom: 0px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.product-title {
  font-size: 1.25rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  margin: 0 0 10px 0 !important;
  padding: 0 !important;
  border: none !important;
  line-height: 1.25;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.product-title::before {
  display: none !important;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.tag-pill {
  font-size: 0.75rem;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 0px 10px;
  border-radius: 14px;
  font-weight: 500;
}

.learn-more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  color: #ffffff !important;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.learn-more-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
}
</style>
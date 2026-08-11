<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

const selectedImage = ref(null)

const openLightbox = (item) => {
  selectedImage.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && selectedImage.value) {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div>
    <div class="illust-grid">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="illust-card"
        @click="openLightbox(item)"
      >
        <img
          :src="item.src"
          :alt="item.alt || 'Illustration'"
          class="illust-img"
          :style="{ objectPosition: item.offset || 'center' }"
        />
      </div>
    </div>
    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="lightbox-overlay"
        @click="closeLightbox"
      >
        <div class="lightbox-content">
          <img :src="selectedImage.src" :alt="selectedImage.alt || 'Illustration'" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.illust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

@media (min-width: 960px) {
  .illust-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.illust-card {
  position: relative;
  width: 100%;
  aspect-ratio: 257 / 182;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.illust-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}

.illust-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
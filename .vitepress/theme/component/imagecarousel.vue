<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  if (touchStartX.value - touchEndX.value > 50) {
    nextSlide()
  } else if (touchEndX.value - touchStartX.value > 50) {
    prevSlide()
  }
}
</script>

<template>
  <div class="carousel-container">
    <div 
      class="carousel-wrapper"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div 
        class="carousel-track" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(img, idx) in images" 
          :key="idx" 
          class="carousel-slide"
        >
          <img 
            :src="typeof img === 'string' ? img : img.src" 
            :alt="typeof img === 'string' ? `Slide ${idx + 1}` : (img.alt || `Slide ${idx + 1}`)"
            class="slide-img"
          />
        </div>
      </div>
      <template v-if="images.length > 1">
        <button 
          type="button"
          class="nav-button prev" 
          aria-label="Previous slide"
          @click="prevSlide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>

        <button 
          type="button"
          class="nav-button next" 
          aria-label="Next slide"
          @click="nextSlide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
        <div class="carousel-indicators">
          <button
            v-for="(_, idx) in images"
            :key="idx"
            type="button"
            class="indicator-dot"
            :class="{ active: idx === currentIndex }"
            :aria-label="`Go to slide ${idx + 1}`"
            @click="goToSlide(idx)"
          ></button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 1.5rem auto;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  user-select: none;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.slide-img {
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

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  z-index: 2;
  padding: 0;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.nav-button:active {
  transform: translateY(-50%) scale(0.92);
}

.nav-button svg {
  width: 1.5rem;
  height: 1.5rem;
}

.nav-button.prev {
  left: 0.75rem;
}

.nav-button.next {
  right: 0.75rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 0.85rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.45rem;
  padding: 0.35rem 0.6rem;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  z-index: 2;
}

.indicator-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.25s, transform 0.25s, width 0.25s;
}

.indicator-dot:hover {
  background-color: rgba(255, 255, 255, 0.85);
}

.indicator-dot.active {
  width: 1.1rem;
  border-radius: 10px;
  background-color: var(--vp-c-brand-1, #ffffff);
}
</style>
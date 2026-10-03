<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="link-grid">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      :href="item.link"
      :target="item.link && item.link.startsWith('http') ? '_blank' : '_self'"
      :rel="item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
      class="link-card"
    >
      <div class="card-image-wrapper">
        <img
          :src="item.src"
          :alt="item.title || 'Link image'"
          class="card-img"
          :style="{ objectPosition: item.offset || 'center' }"
        />
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ item.title }}</h3>
        <p v-if="item.description" class="card-description">
          {{ item.description }}
        </p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

@media (min-width: 960px) {
  .link-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.link-card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  aspect-ratio: 257 / 182;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none !important;
  color: inherit !important;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-bg-soft);
  transition: border-color 0.25s;
  cursor: pointer;
}

.link-card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-image-wrapper {
  width: 100%;
  height: 80%;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.card-img {
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

.card-content {
  height: 40%;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--vp-c-text-1);
  border: none !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-description {
  margin: 0.25rem 0 0 0 !important;
  padding: 0 !important;
  font-size: 0.7rem;
  line-height: 1.25;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
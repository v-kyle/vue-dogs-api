<template>
  <div class="images-grid">
    <template v-for="(src, i) in items">
      <ImageContainer :key="i" :src="src" :general-alt="generalAlt" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

export default Vue.extend({
  name: 'ImagesGrid',

  components: { ImageContainer },

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    generalAlt: {
      type: String,
      default: 'Image',
    },
  },
});
</script>

<style>
.images-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}

@media (max-width: 1600px) {
  .images-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1300px) {
  .images-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1000px) {
  .images-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .images-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

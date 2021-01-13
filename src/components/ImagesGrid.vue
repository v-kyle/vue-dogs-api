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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

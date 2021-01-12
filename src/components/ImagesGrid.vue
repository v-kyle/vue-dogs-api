<template>
  <div class="images-grid">
    <template v-for="(src, i) in items">
      <div class="image-container" :key="i" @click="() => clickHandler(src)">
        <img :src="src" style="width: 300px; height: 200px" :alt="generalAlt" />
        <div class="image-icon">❤</div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ImagesGrid',

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

  computed: {
    ...mapGetters('favorites', {
      favorites: 'favorites',
    }),
  },

  methods: {
    clickHandler(src) {
      // this.favorites.includes(src) ?
      console.log(src);
    },
  },
};
</script>

<style>
.images-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.image-container {
  position: relative;
}

.image-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  z-index: 100;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid grey;
  text-align: center;
  line-height: 30px;
  display: none;
  color: red;
  font-weight: bold;
  font-size: 1rem;
}

.image-container:hover .image-icon {
  display: block;
}

.image-container > img {
  cursor: pointer;
}
</style>

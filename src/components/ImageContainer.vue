<template>
  <div class="image-container" @click="clickHandler">
    <img :src="src" :alt="generalAlt" />
    <div class="image-icon" :class="{ show: isFavorite }">❤</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'ImageContainer',

  props: {
    src: {
      type: String,
      required: true,
    },

    generalAlt: {
      type: String,
      default: 'Image',
    },
  },

  computed: {
    ...mapState({
      favorites: state =>
        (state as Record<string, Record<string, string>>).favorites.favorites,
    }),

    isFavorite(): boolean {
      return this.favorites.includes(this.src);
    },
  },

  methods: {
    clickHandler() {
      if (this.isFavorite) {
        this.$store.dispatch('favorites/removeFromFavorites', this.src);
      } else {
        this.$store.dispatch('favorites/addToFavorite', this.src);
      }
    },
  },
});
</script>

<style lang="scss">
@import 'src/assets/vars';

.image-container {
  position: relative;
  border-radius: 0.5rem;

  img {
    cursor: pointer;
    border-radius: 0.5rem;
    width: 300px;
    height: 200px;

    &:hover {
      box-shadow: $base-shadow;
    }
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
}

.image-container .image-icon.show,
.image-container:hover .image-icon:not(.show) {
  display: block;
}
</style>

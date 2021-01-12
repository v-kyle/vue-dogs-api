<template>
  <div class="dogs-grid">
    <template v-for="i in dogs">
      <img :src="i" style="width: 300px; height: 200px" :key="i" alt="dog" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getDogs } from '@/api/dogs';
import { debounce } from 'lodash';

export default Vue.extend({
  name: 'Home',

  data() {
    return {
      dogs: [] as Array<string>,
    };
  },

  async created() {
    window.addEventListener('scroll', this.debouncedScrollHandler());

    await this.loadDogs();
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.debouncedScrollHandler());
  },

  methods: {
    async loadDogs() {
      const data = await getDogs(40);
      if (data) {
        this.dogs.push(...data);
      }
    },

    async scrollHandler() {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >
        0.95 * document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        await this.loadDogs();
      }
    },

    debouncedScrollHandler() {
      return debounce(this.scrollHandler, 500);
    },
  },
});
</script>

<style lang="scss">
.dogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import { getDogs } from '@/api/dogs';
import { debounce } from 'lodash';
import ImagesGrid from '@/components/ImagesGrid.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',

  components: { ImagesGrid },

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

  computed: {
    ...mapGetters('breeds', {
      selectedBreed: 'selectedBreed',
    }),
  },

  methods: {
    async loadDogs() {
      const data = await getDogs(this.selectedBreed);
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

  watch: {
    async selectedBreed(value) {
      const data = await getDogs(value);
      if (data) {
        this.dogs = [];
        this.dogs.push(...data);
      }
    },
  },
});
</script>

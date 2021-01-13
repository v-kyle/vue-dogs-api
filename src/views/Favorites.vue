<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ImagesGrid from '@/components/ImagesGrid.vue';

export default Vue.extend({
  name: 'Favorites',

  components: { ImagesGrid },

  computed: {
    ...mapGetters('favorites', {
      dogs: 'favorites',
    }),
  },
});
</script>

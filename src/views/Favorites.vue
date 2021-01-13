<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import ImagesGrid from '@/components/ImagesGrid.vue';

export default Vue.extend({
  name: 'Favorites',

  components: { ImagesGrid },

  computed: {
    ...mapState({
      dogs: state =>
        (state as Record<string, Record<string, string>>).favorites.favorites,
    }),
  },
});
</script>

<template>
  <select v-model="selectedBreed" @change="updateBreed" class="dogs-picker">
    <option v-for="(breed, i) in breeds" :key="i">{{ breed }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'DogsPicker',

  data() {
    return {
      selectedBreed: 'random',
    };
  },

  computed: {
    ...mapState({
      breeds: state =>
        (state as Record<string, Record<string, string>>).breeds.breeds,
    }),
  },

  methods: {
    updateBreed() {
      this.$store.dispatch('breeds/updateSelectedBreed', this.selectedBreed);
    },
  },
});
</script>

<style>
.dogs-picker {
  margin: 0 2px;
  font-weight: bold;
  font-size: 1rem;
  width: 165px;
}
</style>

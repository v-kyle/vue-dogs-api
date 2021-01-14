<template>
  <select v-model="selectedBreed" @change="updateBreed" class="dogs-picker">
    <option>random</option>
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

<style lang="scss">
@import 'src/assets/vars';

.dogs-picker {
  border-radius: 0.25rem;
  margin: 0 2px;
  font-weight: bold;
  font-size: 1rem;
  width: 165px;
  background: $base-color;
  padding: 0.25rem 0.5rem;

  &:hover {
    box-shadow: $base-shadow;
  }
}
</style>

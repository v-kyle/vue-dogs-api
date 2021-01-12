<template>
  <select v-model="selectedBreed" class="dogs-picker">
    <option v-for="(breed, i) in breeds" :key="i">{{ breed }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'DogsPicker',

  data() {
    return {
      selectedBreed: 'random',
    };
  },

  computed: {
    ...mapGetters('breeds', {
      breeds: 'dogsBreeds',
    }),
  },

  watch: {
    async selectedBreed(value) {
      if (value) {
        this.$emit('input', value);
      }
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

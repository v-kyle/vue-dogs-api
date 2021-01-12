<template>
  <div>
    <h1>Select a breed</h1>
    <select v-model="selectedBreed">
      <option disabled value="">Choose breed</option>
      <option v-for="breed in breeds" :key="breed">{{ breed }}</option>
    </select>
    <div class="dogs-grid">
      <template v-for="i in dogs">
        <img :src="i" style="width: 300px; height: 200px" :key="i" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { getDogs } from '@/api/dogs';

export default Vue.extend({
  name: 'Breeds',

  data() {
    return {
      selectedBreed: '',
      dogs: [] as Array<string>,
    };
  },

  computed: {
    ...mapGetters('dogs', {
      breeds: 'dogsBreeds',
    }),
  },

  watch: {
    async selectedBreed(value) {
      if (value) {
        const data = await getDogs(40, value);
        if (data) {
          this.dogs = [];
          this.dogs.push(...data);
        }
      }
    },
  },
});
</script>

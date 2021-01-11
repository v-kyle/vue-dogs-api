<template>
  <div class="about">
    <h1>This is an breeds page</h1>
    <select v-model="selectedBreed">
      <option v-for="breed in breeds" :key="breed">{{ breed }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Breeds",

  data() {
    return {
      selectedBreed: null
    };
  },

  computed: {
    ...mapGetters("dogs", {
      breeds: "dogsBreeds"
    })
  }
});
</script>

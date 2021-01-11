<template>
  <div class="home">
    <template v-for="i in dogs">
      <img :src="i" style="width: 300px; height: 200px" :key="i" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getDogs } from "@/api/dogs";

export default Vue.extend({
  name: "Home",

  data() {
    return {
      dogs: [] as Array<string>
    };
  },

  async created() {
    const data = await getDogs(40);
    if (data) {
      this.dogs.push(...data);
    }
  }
});
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

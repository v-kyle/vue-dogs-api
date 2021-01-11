<template>
  <div class="dogs-grid">
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
      test: false
    };
  },

  async created() {
    window.addEventListener("scroll", () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.test = true;
      }
    })

    const data = await getDogs(40);
    if (data) {
      this.dogs.push(...data);
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", )
  }
});
</script>

<style lang="scss">
.dogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

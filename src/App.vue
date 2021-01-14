<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'App',

  components: { Header },

  created() {
    this.$store.dispatch('breeds/loadAllBreeds');
    this.$store.dispatch('favorites/loadSavedFavorites');
  },
});
</script>

<style lang="scss">
@import 'assets/vars';

body {
  margin: 0;
  background: $base-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

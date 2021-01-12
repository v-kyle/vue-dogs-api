<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <DogsPicker @input="pickerHandler" /> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DogsPicker from '@/components/DogsPicker.vue';

export default Vue.extend({
  name: 'App',

  components: { DogsPicker },

  created() {
    this.$store.dispatch('breeds/loadAllBreeds');
    this.$store.dispatch('favorites/loadSavedFavorites');
  },

  methods: {
    pickerHandler(value: string) {
      this.$store.dispatch('breeds/updateSelectedBreed', value);
    },
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  position: sticky;
  top: 0;
  background: white;
  width: 100%;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

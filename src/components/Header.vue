<template>
  <header id="nav">
    <div class="links-container">
      <router-link to="/">Home</router-link>
      <DogsPicker />
      <router-link to="/favorites">Favorites</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import DogsPicker from '@/components/DogsPicker.vue';

export default Vue.extend({
  name: 'Header',

  components: { DogsPicker },
});
</script>

<style lang="scss">
@import 'src/assets/vars';

#nav {
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: $base-shadow;
  width: 100%;
  padding: 0.5rem;
  z-index: 1000;
  display: flex;
  justify-content: center;

  .links-container {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

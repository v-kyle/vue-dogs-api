import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import breeds from './modules/breeds';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    breeds,
    favorites,
  },
});

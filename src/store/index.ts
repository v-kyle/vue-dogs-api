import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import dogs from "./modules/dogs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dogs
  }
});

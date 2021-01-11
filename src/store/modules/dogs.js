import { getBreeds } from "@/api/dogs";

const state = () => ({
  breeds: []
});

const getters = {
  dogsBreeds: state => {
    return state.breeds;
  }
};

const actions = {
  async getAllBreeds({ commit }) {
    const data = await getBreeds();
    commit("setBreeds", data && data.length ? data : []);
  }
};

const mutations = {
  setBreeds(state, breeds) {
    state.breeds = [...breeds];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

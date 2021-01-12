import { getBreeds } from '@/api/dogs';

const state = () => ({
  breeds: [],
  selectedBreed: 'random',
});

const getters = {
  dogsBreeds(state) {
    return state.breeds;
  },

  selectedBreed(state) {
    return state.selectedBreed;
  },
};

const actions = {
  async loadAllBreeds({ commit }) {
    const data = await getBreeds();
    if (data && data.length) {
      data.push('random');
    }
    commit('setBreeds', data && data.length ? data : []);
  },

  updateSelectedBreed({ commit }, breed) {
    commit('setBreed', breed);
  },
};

const mutations = {
  setBreeds(state, breeds) {
    state.breeds = [...breeds];
  },

  setBreed(state, breed) {
    state.selectedBreed = breed;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

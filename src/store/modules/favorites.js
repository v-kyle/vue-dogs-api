import { getFavorites, saveFavorites } from '../../../services/storage';

const state = () => ({
  favorites: [],
});

const getters = {
  favorites(state) {
    return state.favorites;
  },
};

const actions = {
  loadSavedFavorites({ commit }) {
    const favorites = getFavorites();
    commit('setFavorites', favorites);
  },

  addToFavorite({ commit }, src) {
    commit('addToFavorite', src);
  },

  removeFromFavorites({ commit }, src) {
    commit('removeFromFavorites', src);
  },
};

const mutations = {
  setFavorites(state, favorites) {
    state.favorites = favorites;
  },

  addToFavorite(state, src) {
    state.favorites.push(src);
    saveFavorites(state.favorites);
  },

  removeFromFavorites(state, src) {
    const index = state.favorites.indexOf(src);
    if (index > -1) {
      state.favorites.splice(index, 1);
    }
    saveFavorites(state.favorites);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

const settings = {
  namespaced: true,
  state: {
    toggled: false
  },
  mutations: {
    SET_TOGGLED(state) {
      state.toggled = !state.toggled;
    }
  },
  actions: {
    setToggled({ commit }) {
      commit('SET_TOGGLED');
    }
  }
};

export default settings;

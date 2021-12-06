import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    authUser: {}
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.authUser = payload;
    }
  },
  actions: {
    async getAuthUser({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('https://jsonplaceholder.typicode.com/users/1')
          .then(res => {
            commit('SET_USER_DATA', res.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default auth;

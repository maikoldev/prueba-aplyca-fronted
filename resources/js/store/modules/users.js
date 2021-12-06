import axios from 'axios';

const users = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async getUsers({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            commit('SET_USERS', res.data);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default users;

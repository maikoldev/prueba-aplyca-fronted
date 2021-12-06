import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import settings from './modules/settings';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    settings,
    users
  }
});

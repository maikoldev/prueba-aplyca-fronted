import Vue from 'vue';

// Vue Router
import router from './router';

// Vuex
import store from './store';

// Vue FontAwesome
import './fontawesome';

Vue.component('AppPrueba', require('./AppPrueba').default);

// Layouts
Vue.component('LayoutApp', require('./layouts/App').default);

// Vue.component('Register', require('./pages/Register').default);

// Vue Components
Vue.component('Sidebar', require('./components/layout/Sidebar').default);
Vue.component('Topbar', require('./components/layout/Topbar').default);

/* Vue Init */
const app = new Vue({
  el: '#app',
  router,
  store
});

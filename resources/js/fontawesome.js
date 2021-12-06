import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faUserFriends, faBars, faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserFriends, faBars, faPlus, faEllipsisH);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

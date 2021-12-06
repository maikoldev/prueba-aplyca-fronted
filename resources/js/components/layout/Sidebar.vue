<template>
  <div
    :class="toggled ? 'toggled w-0' : 'w-2/12'"
    class="sidebar | bg-white | h-screen | sticky top-0 | overflow-hidden transition-width duration-500"
  >
    <div class="content | py-4">
      <div class="px-6">
        <span class="block | text-2xl leading-11 | mb-6">System</span>
      </div>
      <nav class="menu">
        <ul class="nav | ml-0 | list-none">
          <li
            class="nav-item | px-6 | border-l-4 border-solid border-transparent | hover:bg-ghost-white"
            v-for="item in navItems"
            :key="`icon-${item.label}`"
          >
            <router-link
              :to="item.path"
              class="nav-link | flex items-center | no-underline font-medium text-sm leading-11"
            >
              <FontAwesomeIcon :icon="item.icon" class="mr-4 | text-navy-blue" />
              <span> {{ item.label }} </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script >
import { mapState } from 'vuex';

export default {
  data() {
    return {
      navItems: [
        {
          icon: ['fas', 'user-friends'],
          label: 'Users',
          path: { name: 'Users' }
        }
      ]
    };
  },
  computed: {
    ...mapState('settings', ['toggled'])
  }
};
</script>
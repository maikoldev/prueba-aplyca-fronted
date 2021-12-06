<template>
  <div>
    <button class="bg-navy-blue hover:bg-navy-blue-dark | px-6 py-3 mb-6 | rounded-lg | transition-all duration-300">
      <FontAwesomeIcon :icon="['fas', 'plus']" class="mr-4 | text-white" />
      <span class="text-white text-sm font-medium leading-4 | mr-4">Add new user</span>
    </button>
    <div class="bg-white | px-6 py-7 mb-6">
      <div class="title | flex items-center justify-between | mb-4">
        <h1 class="text-midnight-express font-medium text-base">
          {{ $route.name }}
        </h1>
        <FontAwesomeIcon :icon="['fas', 'ellipsis-h']" class="text-mischka" />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Users',
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions('users', ['getUsers'])
  }
};
</script>

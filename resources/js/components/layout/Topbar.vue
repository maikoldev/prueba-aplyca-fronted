<template>
  <div class="topbar | bg-white | mb-6 md:mx-6 | sticky top-0">
    <div class="content | py-1 px-6 | flex items-center justify-between">
      <button type="button" @click="setToggled">
        <FontAwesomeIcon :icon="['fas', 'bars']" class="mr-4 | text-storm-grey" />
        <span class="text-storm-grey text-sm font-medium leading-11">Dashboard</span>
      </button>
      <div class="flex items-center">
        <img src="/public/images/avatar.png" alt="" class="mr-4" />
        <span class="text-storm-grey text-sm font-medium leading-11">{{ authUser.name }}</span>
      </div>
    </div>
  </div>
</template>


<script >
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['authUser'])
  },
  methods: {
    ...mapActions('settings', ['setToggled'])
  }
};
</script>
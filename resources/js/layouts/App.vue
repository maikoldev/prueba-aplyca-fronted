<template>
  <div class="wrapper | flex">
    <Sidebar />
    <div class="page-wrapper | w-full">
      <Topbar />
      <div class="px-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('settings', ['toggled'])
  },
  created() {
    this.getAuthUser();
  },
  mounted() {
    this.setDesktopView();
    window.addEventListener('resize', () => {
      this.setDesktopView();
    });
  },
  methods: {
    ...mapActions('auth', ['getAuthUser']),
    ...mapActions('settings', ['setToggled']),
    setDesktopView() {
      if (window.innerWidth < 992 && !this.toggled) {
        this.setToggled();
      }

      if (window.innerWidth >= 992 && this.toggled) {
        this.setToggled();
      }
    }
  }
};
</script>
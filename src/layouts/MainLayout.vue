<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Demo
        </q-toolbar-title>

        <div>Demo project</div>
      </q-toolbar>
    </q-header>

    <LeftDrawer :drawerOpen.sync="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawer from 'components/LeftDrawer';

export default {
  name: 'MainLayout',

  components: {
    LeftDrawer
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    setDataFromAPI: function() {
      this.$store.dispatch('jobs/SET_JOBS_API');
      this.$store.dispatch('menu/SET_MENU_API');
      this.$store.dispatch('jobs/SET_JOB_STATUSES_API');
    }
  },
  created() {
    this.setDataFromAPI();
  }
};
</script>

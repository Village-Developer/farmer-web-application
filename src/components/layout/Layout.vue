<template>
  <v-app>
    <v-app-bar app color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="mr-10">Farmer Project</v-toolbar-title>
        <v-spacer></v-spacer>
        <LoginDialog />
      </v-container>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>

import LoginDialog from '../login/LoginDialog.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data: () => ({
    drawer: false,
    group: null,
    links: ['Home', 'Dashboard', 'User Management']
  }),
  components: {
    LoginDialog
  }
}
</script>

<style>
</style>

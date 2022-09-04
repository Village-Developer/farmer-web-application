<template>
  <v-app-bar
    dark
    color="deep-purple"
    absolute
  >
    <v-container class="py-0 fill-height">
      <v-toolbar-title class="mr-10">Farmer Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <LoginDialog v-if="token == false"/>
      <RegisterDialog v-if="token == false"/>
      <v-btn
        dark
        plain
        v-if="token == true"
        @click="logout()"
      >
        Logout
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>

import LoginDialog from './login/LoginDialog.vue'
import RegisterDialog from './register/RegisterDialog.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data: () => ({
    test: '',
    drawer: true,
    group: null,
    links: ['Home', 'Dashboard', 'User Management'],
    token: !!localStorage.getItem('token')
  }),
  components: {
    LoginDialog,
    RegisterDialog
  },
  methods: {
    async logout () {
      localStorage.clear()
      this.$router.go()
    }
  },
  mounted () {

  },
  watch: {

  }
}
</script>

<style>
</style>

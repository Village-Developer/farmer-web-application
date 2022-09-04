<template>
  <v-app>
    <Navbar />
    <v-app>
      <router-view />
    </v-app>
  </v-app>
</template>

<script>

import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navbar
  }
}
</script>

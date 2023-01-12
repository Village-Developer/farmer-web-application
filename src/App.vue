<template>
  <v-app>
    <Snackbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Snackbar from './views/components/Snackbar.vue'

export default {
  name: 'App',

  data: () => ({

  }),
  components: {
    Snackbar
  }

}
</script>

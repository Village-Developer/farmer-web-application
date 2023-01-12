<template>
  <v-snackbar
      class="mt-16"
      v-model="snackbar"
      color="primary"
      text
      outlined
      top
    ><div class="text-center text-subtitle-2">{{ message }}</div></v-snackbar>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Snackbar',
  computed: {
    ...mapState(['message']),
    ...mapGetters(['snackbar'])
  }

}
</script>

<style>

</style>

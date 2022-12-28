<template>
    <v-footer
      class="pa-0"
      padless
      dark
      color="#252323"
      height="60px"
    >
      <v-row no-gutters>
        <v-col
          class="text-center"
        >
          <strong>© {{ new Date().getFullYear() }} Village Co., Ltd.  All Rights Reserved.</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script>
export default {
  methods: {
    drawer () {
      this.$emit('drawer')
    }
  }

}
</script>

<style>

</style>

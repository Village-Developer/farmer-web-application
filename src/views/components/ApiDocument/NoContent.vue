<template>
  <v-card
    width="100%"
    elevation="0"
    class="d-flex align-center justify-center"
    :min-height="deviceHeight - appBarHeight"
  >
    <div class="text-body-1">Coming soon.</div>
  </v-card>
</template>

<script>
export default {
  name: 'NoContent',
  data: () => ({
    deviceHeight: 0
  }),
  methods: {
    handleResize () {
      this.deviceHeight = window.innerHeight
    }
  },
  computed: {
    appBarHeight () {
      return this.$store.getters.getAppBarHeight
    }
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>

</style>

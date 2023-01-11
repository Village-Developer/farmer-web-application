<template>
  <v-container
    class="pa-0 overflow-hidden"
    fluid
  >
    <v-row
      no-gutters
    >
      <AppHeader/>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="d-flex">
          <SideMenu
            :items="apiLists"
            style="margin-right: 1px"
            v-show="getSideBarDrawer"
          ></SideMenu>
          <api-document />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideMenu from './components/SideMenu'
import ApiDocument from './components/ApiDocument'
import AppHeader from '@/layout/AppHeader'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ApiDocumentView',
  data: () => ({
    overview: true,
    sample: false
  }),
  components: {
    SideMenu,
    ApiDocument,
    AppHeader
  },
  methods: {
    ...mapActions('apiDocument', ['getAllApiList'])
  },
  computed: {
    ...mapGetters('apiDocument', ['apiLists']),
    ...mapGetters(['getSideBarDrawer'])
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push({ name: 'login' })
    }
    this.getAllApiList()
  }
}
</script>

<style>

</style>

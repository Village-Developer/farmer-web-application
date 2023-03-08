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
          <api-document v-if="getApiInfo"/>
          <no-content v-if="!getApiInfo"/>
          <!-- <v-card v-if="true" class="d-flex align-center justify-center" width="100%">
            <v-img
              src="../assets/eggplant.png"
              aspect-ratio="3"
              contain
            >
            </v-img>
          </v-card> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideMenu from './components/SideMenu'
import ApiDocument from './components/ApiDocument/ApiDocument.vue'
import NoContent from './components/ApiDocument/NoContent.vue'
import AppHeader from '@/layout/AppHeader'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ApiDocumentView',
  data: () => ({
    overview: true,
    sample: false,
    snackbar: true,
    text: 'hello'
  }),
  components: {
    SideMenu,
    ApiDocument,
    AppHeader,
    NoContent
  },
  methods: {
    ...mapActions('apiDocument', ['getAllApiList']),
    ...mapMutations('apiDocument', ['setApiInfo'])
  },
  computed: {
    ...mapGetters('apiDocument', ['apiLists', 'getApiInfo']),
    ...mapGetters(['getSideBarDrawer'])
  },
  mounted () {
    if (localStorage.getItem('activeRequest')) {
      this.setApiInfo(true)
    } else {
      this.setApiInfo(false)
    }
    // if (!localStorage.getItem('token')) {
    //   this.$router.push({ name: 'login' })
    // }
    this.getAllApiList()
  }
}
</script>

<style>

</style>

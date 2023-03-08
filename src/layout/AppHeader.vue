<template>
  <v-row ref="appBar" no-gutters>
    <v-app-bar
      color="blue-grey darken-4"
      elevation="1"
      dark
      dense
    >
      <v-container
        class="d-flex align-center pa-0"
        fluid
      >
        <v-row no-gutters>
          <v-col class="d-flex align-center">
            <a
              href="/farmer/api-document"
              v-if="showTitle"
            >
              <v-img
                class="mr-1"
                contain
                max-height="40"
                max-width="40"
                src="../assets/login/logo.png"
              ></v-img>
            </a>
            <v-btn
              @click="switchDrawer()"
              icon
              small
              class="mr-1"
            >
              <v-icon
              > {{ getSideBarDrawer ? "mdi-menu-open" : "mdi-menu" }}</v-icon>
            </v-btn>
            <!-- <v-icon
              @click="switchDrawer()"
              class="mr-1"
              :ripple="false"
            >mdi-menu</v-icon> -->
            <div
              class="text-h6 font-weight-medium"
              v-show="showTitle"
            >Farmer Project</div>
          </v-col>
          <v-col
            class="d-flex justify-center align-center"
            v-if="!showTitle"
            >
              <a
                href="/farmer/api-document"
              >
                <v-img
                  contain
                  max-height="40"
                  max-width="40"
                  src="../assets/login/logo.png"
                ></v-img>
            </a>
          </v-col>
          <v-col class="text-right my-auto">
            <v-menu
              offset-y
              left
              transition="slide-y-transition"
              rounded="lg"
              min-width="150"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  small
                >
                  <v-icon
                    v-bind="attrs"
                    v-on="on">mdi-account</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  class="mx-2"
                  dense
                  link
                >
                  <v-list-item-title>XeonEVO</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-for="(item, index) in items"
                  class="mx-2 "
                  :key="index"
                  :href="item.link"
                  link
                  dense
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    items: [
      {
        title: 'Logout',
        link: '/farmer/login'
      }
    ]
  }),
  methods: {
    switchDrawer () {
      this.$store.commit('setSideBarDrawer')
    },
    setAppBarHeight () {
      this.$store.commit('setAppBarHeight', this.$refs.appBar.clientHeight)
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    showTitle () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    },
    ...mapGetters(['getSideBarDrawer'])
  },
  mounted () {
    this.setAppBarHeight()
  }
}
</script>

<style>

</style>

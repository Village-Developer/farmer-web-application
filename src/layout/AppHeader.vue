<template>
  <v-app-bar
    color="white"
    elevation="1"
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
         <v-app-bar-nav-icon
          @click="switchDrawer()"
        />
        <h2
          class="font-weight-medium"
          v-show="showTitle"
        >Farmer Project</h2>
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
      <v-col class="text-right">
        <v-menu
          offset-y
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
            >
              <v-icon
                v-bind="attrs"
                v-on="on">mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :href="item.link"
              link
            >
              <v-list-item-title class="menuFont"><v-icon>mdi-logout</v-icon> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
  </v-app-bar>
</template>

<script>
import { EventBus } from '../event-bus.js'
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
      EventBus.$emit('drawer')
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
    }
  }
}
</script>

<style>

</style>

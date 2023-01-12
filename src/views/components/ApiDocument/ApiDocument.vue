<template>
  <v-card
    elevation="0"
    width="100%"
    tile
  >
    <v-card
      style="overflow-y: auto;"
      :height="deviceHeight - appBarHeight"
      elevation="0"
      tile
    >
      <v-row
        ref="content"
        class="px-8 py-0 mt-0"
        no-gutters
      >
        <v-row
          ref="header"
          no-gutters
        >
          <v-col
            class="mb-2"
            cols="12"
          >
            <v-row
              ref="title"
              no-gutters
            >
              <v-col cols="12" class="mt-4 ">
                <v-card
                  class="d-flex mb-4"
                  elevation="0"
                >
                  <v-text-field
                    class="text-h5 font-weight-regular pl-0 mr-2"
                    dense
                    solo
                    flat
                    :outlined="getMode"
                    full-width
                    :readonly="!getMode"
                    :value="title"
                    hide-details
                  ></v-text-field>
                  <!-- <v-btn
                    class="my-auto mx-2"
                    icon
                  >
                    <v-icon @click="editTitle">mdi-pencil-outline</v-icon>
                  </v-btn> -->
                  <!-- <v-btn
                    class="px-3 my-auto mx-2"
                    color="green lighten-1"
                    elevation="0"
                    :disabled="false"
                  ><v-icon
                    class="mr-1"
                  >mdi-content-save-outline</v-icon>Save</v-btn> -->
                  <v-card
                    elevation="0"
                  >
                    <!-- <v-select
                      :items="mode"
                      dense
                      value="Editing"
                      outlined
                      hide-details
                    >
                    </v-select> -->
                    <v-btn-toggle
                      mandatory
                      dense
                    >
                      <v-btn height="40px" @click="switchMode(false)"><v-icon>mdi-content-save</v-icon></v-btn>
                      <v-btn height="40px" @click="switchMode(true)"><v-icon>mdi-pencil</v-icon></v-btn>
                    </v-btn-toggle>
                  </v-card>
                   <v-card
                    class="mx-2 my-auto"
                    elevation="0"
                  >
                    <v-btn
                      icon
                      @click="showSnackbar('Developing')"
                    ><v-icon>mdi-dots-vertical</v-icon></v-btn>
                  </v-card>
                </v-card>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-col cols="12">
          <v-row
            ref="detail"
            no-gutters
          >
            <v-card
              class="mb-0"
              elevation="0"
              width="100%"
              :min-height="deviceHeight - headerHeight - footer - appBarHeight"
            >
              <v-tabs
                v-model="tab"
                background-color="blue-grey lighten-5"
              >
                <v-tab>Document</v-tab>
                <v-tab>Sample</v-tab>
              </v-tabs>
              <v-tabs-items
                v-model="tab"
              >
                <v-tab-item>
                  <Document />
                </v-tab-item>
                <v-tab-item>
                  <Sample />
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        ref="footer"
        class="mt-0"
        no-gutters
      >
        <v-col cols="12">
          <AppFooter />
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import AppFooter from '@/layout/AppFooter.vue'
import Document from './components/Document.vue'
import Sample from './components/Sample.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ApiDocument',
  data: () => ({
    title: 'Login Website',
    edit: false,
    deviceHeight: 0,
    headerHeight: 0,
    footer: 0,
    tab: null,
    mode: ['Editing', 'Viewing']
  }),
  components: {
    AppFooter,
    Document,
    Sample
  },
  methods: {
    handleResize () {
      this.deviceHeight = window.innerHeight
    },
    getContentHeight () {
      this.headerHeight = this.$refs.header.clientHeight
      this.footer = this.$refs.footer.clientHeight
    },
    editTitle () {
      this.edit = !this.edit
    },
    ...mapMutations('apiDocument', ['switchMode']),
    ...mapMutations(['showSnackbar'])
  },
  computed: {
    appBarHeight () {
      return this.$store.getters.getAppBarHeight
    },
    ...mapGetters('apiDocument', ['getMode'])
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
    this.getContentHeight()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>

</style>

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
                    id="test"
                    class="text-h6 font-weight-regular pl-0 mr-2"
                    dense
                    solo
                    :background-color="!getMode ? '' : 'blue-grey lighten-4'"
                    :flat="!getMode"
                    :readonly="!getMode"
                    :value="getApiDetail.name"
                    hide-details
                  ></v-text-field>
                  <v-card
                    elevation="0"
                  >
                    <v-btn-toggle
                      mandatory
                      dense
                      class="my-auto"
                    >
                      <v-btn
                        :disabled="!getMode"
                        @click="confirmChangeDialog = true"
                        color="success darken-5"
                      ><v-icon>mdi-content-save</v-icon></v-btn>
                      <v-btn
                        :disabled="getMode"
                        @click="switchMode(true)"
                      ><v-icon>mdi-pencil</v-icon></v-btn>
                    </v-btn-toggle>
                  </v-card>
                   <v-card
                    class="mx-2 my-auto"
                    elevation="0"
                  >
                    <v-btn
                      icon
                      @click="showSnackbar('Coming soon.')"
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
                height="40px"
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
    <v-dialog
      v-model="confirmChangeDialog"
      max-width="500px"
    >
      <v-card
      >
        <v-card-title>Save</v-card-title>
        <v-divider></v-divider>
        <div>
          <p class="text-center my-8">Are you sure you want to save new change?</p>
        </div>
        <v-divider></v-divider>
        <v-card-actions class="py-5">
          <v-spacer></v-spacer>
          <v-btn
            min-width="80px"
            elevation="0"
            @click="cancel()"
          >Cancel</v-btn>
          <v-btn
            min-width="80px"
            elevation="0"
            color="success darken-5"
            @click="save()"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    mode: ['Editing', 'Viewing'],
    confirmChangeDialog: false
  }),
  components: {
    AppFooter,
    Document,
    Sample
  },
  methods: {
    save () {
      this.confirmChangeDialog = false
      this.switchMode(false)
    },
    cancel () {
      this.confirmChangeDialog = false
      this.switchMode(false)
    },
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
    ...mapGetters('apiDocument', ['getMode', 'getApiDetail'])
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

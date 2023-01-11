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
              <v-col cols="12" class="mt-4">
                <v-card
                  class="d-flex mb-4"
                  elevation="0"
                >
                  <v-text-field
                    class="text-h5 font-weight-regular pl-0"
                    dense
                    solo
                    flat
                    :outlined="edit"
                    full-width
                    :readonly="!edit"
                    :value="title"
                    hide-details
                  ></v-text-field>
                  <v-btn
                    class="my-auto mx-2"
                    icon
                  >
                    <v-icon @click="editTitle">mdi-pencil-outline</v-icon>
                  </v-btn>
                  <v-btn
                    class="px-3 my-auto"
                    color="green lighten-1"
                    elevation="0"
                    :disabled="false"
                  ><v-icon
                    class="mr-1"
                  >mdi-content-save-outline</v-icon>Save</v-btn>
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
                  <div
                    v-for="document, index in documents"
                    :key="index"
                  >
                    <v-row
                      class="mt-6 text-center"
                      no-gutters
                    >
                      <div class="text-h6 font-weight-light">{{document.name}}</div>
                      <v-divider class="my-auto mx-3"></v-divider>
                      <v-btn
                        icon
                        @click="document.edit = !document.edit"
                      ><v-icon>mdi-pencil-outline</v-icon></v-btn>
                    </v-row>
                    <v-textarea
                      class="my-1"
                      :value="description"
                      flat
                      solo
                      :outlined="document.edit"
                      auto-grow
                      hide-details
                      :readonly="!document.edit"
                    />
                  </div>
                  <v-row
                    class="mt-6 text-center"
                    no-gutters
                  >
                    <div class="text-h6 font-weight-light">Usage Example</div>
                    <v-divider class="my-auto mx-3"></v-divider>
                    <v-btn
                      icon
                      @click="document.edit = !document.edit"
                    ><v-icon>mdi-pencil-outline</v-icon></v-btn>
                  </v-row>
                    <div class="ml-5">
                      <v-row
                        class="align-center mt-4"
                        no-gutters
                      >
                        <div class="mr-2 font-weight-medium">Path:</div>
                        <v-text-field
                          dense
                          hide-details
                          solo
                          flat
                          :outlined="false"
                          value="www.village.com/api/api_document/api_group/api_list/:api_list_id"
                          readonly
                        >
                        </v-text-field>
                      </v-row>
                      <v-row
                        class="align-center"
                        no-gutters
                      >
                        <div class="mr-2 font-weight-medium">Method:</div>
                        <v-text-field
                          dense
                          hide-details
                          solo
                          flat
                          :outlined="false"
                          value="POST"
                          readonly
                        >
                      </v-text-field>
                    </v-row>
                  </div>
                    <v-row
                      class="mt-6 text-center"
                      no-gutters
                    >
                    <div class="text-h6 font-weight-light">Response Example</div>
                    <v-divider class="my-auto mx-3"></v-divider>
                    <v-btn
                      icon
                      @click="document.edit = !document.edit"
                    ><v-icon>mdi-pencil-outline</v-icon></v-btn>
                  </v-row>
                  <v-textarea
                    class="mt-4"
                    outlined
                    auto-grow
                    background-color="blue-grey lighten-5"
                    :readonly="false"
                  >
                  </v-textarea>
                </v-tab-item>
                <v-tab-item>
                  <v-row
                    ref="method"
                    class="mt-1 mb-4"
                    no-gutters
                  >
                    <v-col
                      class="mt-4"
                      cols="12"
                    >
                      <v-card
                        class="d-flex"
                        elevation="0"
                      >
                        <v-card
                          width="100px"
                          elevation="0"
                        >
                          <v-select
                            dense
                            :items="method"
                            value="GET"
                            hide-details
                            outlined
                            flat
                          >
                          </v-select>
                        </v-card>
                        <v-text-field
                          class="mx-1"
                          outlined
                          dense
                          elevation="0"
                          prefix="https://"
                          hide-details
                        >
                        </v-text-field>
                        <v-btn
                          class="my-auto"
                          width="95px"
                          color="primary"
                          elevation="0"
                          height="40px"
                          :disabled="false"
                        >Send</v-btn>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-card
                      elevation="0"
                      width="100%"
                    >
                      <v-tabs
                        v-model="tabSample"
                        height="30px"
                      >
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                        <v-tab>Params</v-tab>
                        <v-tab>Authorization</v-tab>
                        <v-tab>Headers</v-tab>
                        <v-tab>Body</v-tab>
                      </v-tabs>
                      <v-tabs-items
                        class="mt-2"
                        v-model="tabSample"
                      >
                        <v-tab-item>
                          <div class="text-subtitle-1 font-weight-light">Query Params</div>
                          <v-row
                            no-gutters
                            class="align-center"
                          >
                            <v-checkbox class="ml-3"></v-checkbox>
                            <v-col>
                              <v-text-field
                                dense
                                outlined
                                hide-details
                                placeholder="Key"
                                style="border-radius: 0px"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col>
                              <v-text-field
                                dense
                                outlined
                                hide-details
                                placeholder="Value"
                                style="border-radius: 0px"
                              >
                              </v-text-field>
                            </v-col>
                            <v-btn
                              class="ml-2"
                              icon
                            >
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-row>
                          <v-btn
                            rounded color="grey"
                            elevation="0"
                          >
                            <v-icon class="mr-1">mdi-plus</v-icon>Add query parameter
                          </v-btn>
                        </v-tab-item>
                      </v-tabs-items>
                    </v-card>
                  </v-row>
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
export default {
  name: 'ApiDocument',
  data: () => ({
    title: 'Login Website',
    edit: false,
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    deviceHeight: 0,
    headerHeight: 0,
    footer: 0,
    tab: null,
    tabSample: null,
    documents: [
      { name: 'Description', edit: false },
      { name: 'Features', edit: false }
    ],
    description: 'It allows developers to test their code and applications without having to set up a real login system or connect to a production database. The mockup login API typically returns predetermined responses for various input scenarios, allowing developers to test how their code handles different types of responses. Some mockup login APIs may even allow developers to customize the responses that are returned, allowing for more comprehensive testing.'
  }),
  components: {
    AppFooter
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
    this.getContentHeight()
    console.log(this.edit)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
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
              :value="getApiDetail.method"
              hide-details
              outlined
              flat
              :readonly="!getMode"
              class="text-subtitle-2 font-weight-regular"
            >
            </v-select>
          </v-card>
          <v-text-field
            class="mx-1"
            outlined
            dense
            elevation="0"
            hide-details
            :value="getApiDetail.url"
            :readonly="!getMode"
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
              class="align-center mt-1"
            >
              <v-checkbox v-if="getMode" class="ml-3"></v-checkbox>
              <v-col>
                <v-text-field
                  dense
                  outlined
                  hide-details
                  placeholder="Key"
                  style="border-radius: 0px"
                  :readonly="!getMode"
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
                v-if="getMode"
                class="ml-2"
                icon
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-row>
            <v-btn
              v-if="getMode"
              rounded color="grey"
              elevation="0"
            >
              <v-icon class="mr-1">mdi-plus</v-icon>Add query parameter
            </v-btn>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sample',
  data: () => ({
    tabSample: null
  }),
  methods: {
    ...mapActions('apiDocument', ['getAllMethod'])
  },
  computed: {
    ...mapState('apiDocument', ['method']),
    ...mapGetters('apiDocument', ['getMode', 'getApiDetail'])
  },
  mounted () {
    this.getAllMethod()
  }

}
</script>

<style>

</style>

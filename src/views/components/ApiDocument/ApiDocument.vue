<template>
  <v-card
    elevation="0"
    width="100%"
    tile
  >
    <!-- <v-card
      width="300px"
      height="70px"
      elevation="0"
      tile
    ></v-card> -->
    <v-card
      style="overflow-y: auto;"
      :height="deviceHeight - 50"
      elevation="0"
      tile
    >
      <v-row
        class="px-5 py-2 mt-6"
        no-gutters
      >
        <v-col cols="12">
          <h2 class="font-weight-regular mb-4">{{title}}</h2>
          <hr>
        </v-col>
        <v-col
          class="mt-4"
          cols="12"
        >
          <v-card
            class="d-flex"
            elevation="0"
          >
            <!-- <v-btn
              class="my-auto mr-2"
              color="success"
            >{{method}}</v-btn> -->
            <v-text-field
              prepend-icon="mdi-api"
              dense
              outlined
              hide-details
            ></v-text-field>
          </v-card>
        </v-col>
        <v-card-text class="px-0">
        <div
          v-for="n in 12"
          :key="n"
          class="mb-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
        </div>
      </v-card-text>
      </v-row>
      <!-- Footer -->
      <v-row
        class="mt-1"
        no-gutters>
        <v-col>
          <AppFooter />
        </v-col>
      </v-row>
    </v-card>
    <!-- <v-row>
      <v-col>
        <h1 class="d-flex justify-center pt-2 font-weight-regular">
          {{ title }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col>
        <v-sheet color="green" rounded class="py-6 px-4">
          <v-row no-gutters>
            <v-col class="mr-3" :cols="resizeMethod">
              <v-card outlined>
                <v-card-text class="font-weight-bold text-center">{{
                  apiDetail.method
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-text-field
                :value="apiDetail.path"
                full-width
                solo
                hide-details
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet
          color="#EBE8E8"
          height="60px"
          fil
          class="d-flex align-center"
          rounded
        >
          <v-btn class="mx-5" depressed @click="showOverview">Overview</v-btn>
          <v-btn depressed @click="showSample">Sample</v-btn>
        </v-sheet>
      </v-col>
    </v-row> -->
    <!-- <OverviewAPI v-show="overview" />
    <SampleAPI v-show="sample" /> -->
  </v-card>
</template>

<script>
import AppFooter from '@/layout/AppFooter.vue'
export default {
  name: 'ApiDocument',
  data: () => ({
    title: 'Login',
    method: 'POST',
    deviceHeight: 0
  }),
  components: {
    AppFooter
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.deviceHeight = window.innerHeight
    }
  }
}
</script>

<style>

</style>

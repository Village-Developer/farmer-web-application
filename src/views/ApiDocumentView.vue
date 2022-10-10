<template>
  <v-container class="mt-16 mb-10 pt-16">
    <v-row justify="center">
      <v-col
        sm="0"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card
          elevation="0"
          class="menuFont"
        >
          <v-list-group
            no-action
            v-for="(list, index) in apiLists"
            :key="index"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ list.apiGroup }}</v-list-item-title>
            </template>
            <v-list-item
              link
              v-for="(api, index) in list.api"
              :key="index"
              @click="getApiDetail"
            >
              <v-list-item-title >{{ api }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-card>
      </v-col>
      <v-col
        sm="0"
        md="8"
        lg="7"
        xl="6"
      >
        <v-card
          min-width="600px"
          elevation="0"
        >
          <v-row>
            <v-col>
              <h1 class="titleDetailFont d-flex justify-left pt-2 pl-10">{{ title }}</h1>
            </v-col>
            <!-- <v-col>
              <v-btn depressed color="success" x-small>1.1.1</v-btn>
            </v-col> -->
          </v-row>
          <v-row class="mt-8">
            <v-col>
              <v-sheet color="#D3E5D0" rounded class="py-6">
                <v-row>
                  <v-btn
                    class="subTitleFont ml-8 d-flex"
                    color="#56D143"
                    depressed
                  >{{ apiDetail.method }}</v-btn>
                  <h3 class="subTitleFont d-flex justify-left ml-2">{{ apiDetail.path }}</h3>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-sheet color="#EBE8E8" height="60px" fil class="d-flex align-center" rounded>
                <v-btn class="subTitleFont mx-5" depressed @click="showOverview">Overview</v-btn>
                <v-btn class="subTitleFont" depressed @click="showSample">Sample</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
          <OverviewAPI v-show="overview" />
          <SampleAPI v-show="sample" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import OverviewAPI from './components/ApiDocument/OverviewAPI'
import SampleAPI from './components/ApiDocument/SampleAPI'
import { EventBus } from './../event-bus.js'

export default {
  data: () => ({
    overview: true,
    sample: false,
    title: 'Login website',
    apiLists: [
      {
        apiGroup: 'Authentication',
        api: [
          'Login Website',
          'Login mobile'
        ]
      },
      {
        apiGroup: 'Registration',
        api: [
          'Register'
        ]
      }
    ],
    apiDetail: {
      title: 'Login website',
      method: 'POST',
      path: 'http://village-developer.com/farmer/api/login',
      description: "\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\""
    }
  }),
  components: {
    OverviewAPI,
    SampleAPI
  },
  methods: {
    getApiDetail () {
      this.title = this.apiDetail.title
    },
    showOverview () {
      EventBus.$emit('overview')
      this.overview = true
      this.sample = false
    },
    showSample () {
      EventBus.$emit('sample')
      this.overview = false
      this.sample = true
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
  .menuFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
  }
  .titleDetailFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 28px;
  }
  .subTitleFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
  }
  .detailFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
</style>

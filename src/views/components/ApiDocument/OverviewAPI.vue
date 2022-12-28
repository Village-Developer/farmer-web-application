<template>
    <v-sheet>
      <v-container v-show="overview">
        <v-row class="mt-5">
          <v-col>
            <p>{{ apiDetail.description }}</p>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h2>Features</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</li>
              <li>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h2>Parameters</h2>
            <ul class="ml-5 mt-4">
              <li>Body</li>
            </ul>
            <v-textarea
              background-color="black"
              auto-grow
              dark
              v-model="json"
              disabled
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col>
            <p>Parameter content type</p>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="parameter"
              :items="parameters"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h2>Response</h2>
            <ul class="ml-5 mt-4">
              <li>Status Code 200 OK</li>
            </ul>
            <v-textarea
              background-color="black"
              auto-grow
              dark
              v-model="json"
              disabled
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col>
            <p>Response content type</p>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="parameter"
              :items="responses"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
</template>

<script>

import { EventBus } from './../../../event-bus.js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'OverviewAPI',
  data: () => ({
    overview: true,
    sample: false,
    parameter: 'application/json',
    apiDetail: {
      title: 'Login website',
      method: 'POST',
      path: 'http://village-developer.com/login',
      description: "\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\""
    },
    parameters: ['application/json', 'application/xml'],
    status: ['200 OK', '400 Bad Request', '500 Internal error'],
    responses: ['application/json', 'application/xml'],
    json: `{
      test: 'dsd',
      test: 'dsd',
      test: 'dsd',
      test: 'dsd',
      test: 'dsd',
      test: 'dsd'
    }`
  }),
  mounted () {
    EventBus.$on('overview', () => {
      this.overview = true
    })
    EventBus.$on('sample', () => {
      this.overview = false
    })
  }
}
</script>

<style>

</style>

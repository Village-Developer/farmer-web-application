<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="success"
        dark
        v-bind="attrs"
        v-on="on"
        plain
        @click="closeLogin"
      >
        Register
      </v-btn>
    </template>
    <v-card class="elevation-12" outlinsed>
      <!-- <v-toolbar color="deep-purple" dark>
        <v-toolbar-title >Register</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-toolbar> -->
      <v-img
        class="white--text align-top"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Register To Farm Of Village
          <v-spacer></v-spacer>
          <v-btn
              icon
              dark
              @click="dialog = false"
            >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
      </v-img>
      <v-container
        class="pb-0"
        grid-list-xs
      >
        <v-card-text
          class="pb-0"
        >
        <v-form>
          <v-text-field
            prepend-icon="mdi-account"
            v-model="username"
            name="username"
            label="Username"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-mail"
            v-model="email"
            name="email"
            label="Email"
            type="email"
            outlined
          ></v-text-field>
          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-model="password"
            name="password"
            label="Password"
            outlined
          ></v-text-field>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            :type="show2 ? 'text' : 'password'"
            prepend-icon="mdi-lock-check"
            v-model="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      </v-container>
      <v-card-actions
        class="pb-5"
      >
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          :loading="loading"
          @click="register"
          block
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { eventBus } from '../../../event-bus'
const axios = require('axios')

export default {

  name: 'RegisterDialog',
  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dialog: false,
    loading: false,
    show1: false,
    show2: false
  }),
  methods: {
    async closeLogin () {
      eventBus.$emit('close-login', false)
      this.dialog = true
    },
    async register () {
      this.loading = true

      await new Promise(resolve => setTimeout(resolve, 1000))

      this.loading = false

      axios.post('http://localhost:9000/register/user', {
        credential: {
          user: this.username,
          pass: this.password
        },
        addr: '',
        job: '',
        role: {
          role: ''
        },
        fname: '',
        lname: ''
      })
        .then(function (response) {
          alert(response.data)
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>

<style>

</style>

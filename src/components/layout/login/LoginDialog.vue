<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        v-bind="attrs"
        v-on="on"
        plain
      >
        Login
      </v-btn>
    </template>
    <v-card
      class="elevation-12"
      outlined
    >
      <!-- <v-toolbar color="deep-purple" dark>
        <v-toolbar-title >Login</v-toolbar-title>
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
        src="../../../assets/Login/Login.jpg"
      >
        <v-card-title>Login To Farm Of Village
          <v-spacer></v-spacer>
          <v-btn
            icon
            dark
            @click="closeLoginForm()"
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
            :rules="usernameRules"
            outlined
          ></v-text-field>
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-model="password"
            name="password"
            label="Password"
            :rules= "passowrdRules"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      </v-container>
      <v-card-actions
        class="pb-5"
      >
        <RegisterDialog />
        <v-spacer></v-spacer>
        <v-btn
          class="px-7"
          color="primary"
          :loading="loading"
          @click="login"
          outlined
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { eventBus } from '@/event-bus'
import RegisterDialog from '../register/RegisterDialog.vue'
const axios = require('axios')

export default {

  name: 'LoginDialog',
  data: () => ({
    username: '',
    password: '',
    dialog: false,
    loading: false,
    showPassword: false,
    usernameRules: [
      v => !!v || 'Username is required'
    ],
    passowrdRules: [
      v => !!v || 'Password is required'
    ]
  }),
  components: {
    RegisterDialog
  },
  methods: {
    async login () {
      this.loading = true
      await new Promise(resolve => setTimeout(resolve, 500))

      axios.post('http://localhost:9000/auth/login', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          localStorage.setItem('token', response.data.accToken)
          this.$router.go()
        })
        .catch(error => {
          const fail = error
          alert(fail)
        })

      this.loading = false
    },
    async closeLoginForm () {
      this.dialog = false
      this.username = ''
      this.password = ''
    }
  },
  mounted () {
    eventBus.$on('close-login', (x) => {
      this.dialog = x
    })
  }
}
</script>

<style>

</style>

<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400px"
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
    <v-card class="elevation-12" outlined>
      <v-toolbar color="purple">
        <v-toolbar-title >Login</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      </v-toolbar>
      <v-container grid-list-xs>
        <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            name="username"
            label="Username"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            type="password"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>
      </v-container>
      <v-card-actions>
        <RegisterDialog />
        <v-spacer></v-spacer>
        <v-btn color="success" :loading="loading" @click="login"> Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import RegisterDialog from '../register/RegisterDialog.vue'
const axios = require('axios')

export default {

  name: 'LoginDialog',
  data: () => ({
    username: '',
    password: '',
    dialog: false,
    loading: false
  }),
  components: {
    RegisterDialog
  },
  methods: {
    async login () {
      this.loading = true

      await new Promise(resolve => setTimeout(resolve, 3000))

      this.loading = false

      axios.post('http://localhost:9000/auth/login', {
        username: this.username,
        password: this.password
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

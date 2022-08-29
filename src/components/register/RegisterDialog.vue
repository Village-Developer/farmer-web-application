<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="success"
        dark
        v-bind="attrs"
        v-on="on"
        plain
      >
        Register
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
            outlined
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
        <v-spacer></v-spacer>
        <v-btn color="success" :loading="loading" @click="dialog = false"> Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

// const axios = require('axios')

export default {

  name: 'RegisterDialog',
  data: () => ({
    username: '',
    password: '',
    dialog: false,
    loading: false
  }),
  methods: {
    // async login () {
    //   this.loading = true

    //   await new Promise(resolve => setTimeout(resolve, 3000))

    //   this.loading = false

    //   axios.post('http://localhost:9000/auth/login', {
    //     username: this.username,
    //     password: this.password
    //   })
    //     .then(function (response) {
    //       alert(response.data)
    //     })
    //     .catch(function (error) {
    //       alert(error)
    //     })
    // }
  }
}
</script>

<style>

</style>

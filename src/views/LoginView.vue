<template>
  <v-container
    fluid
    fill-height
    dark
  >
    <v-container
      class=""
      grid-list-xs
    >
      <v-row>
        <v-col
          class="d-flex justify-center mb-4"
        >
          <v-img
            class="mr-4"
            contain
            max-height="50"
            max-width="50"
            src="../assets/login/logo.png"
          ></v-img>
          <h1
            class="titleFont"
          >
            Farmer Project
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card
            max-width="450"
            min-width="450"
            elevation="2"
          >
            <v-form
              ref="form"
              lazy-validation
            >
              <v-container
                class="px-16"
              >
                <v-row>
                  <v-col
                    class="d-flex justify-center my-5"
                  >
                    <h1
                      class="titleFormFont"
                    >
                      Login
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex justify-center ma-0 pa-0">
                    <h1
                        class="alertFont"
                        v-show="alert"
                    >
                      {{ message }}
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="px-0">
                    <v-text-field
                      v-model="username"
                      hide-details
                      prepend-inner-icon="mdi-account"
                      name="username"
                      placeholder="Username"
                      type="text"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="px-0">
                    <v-text-field
                      ref="password"
                      v-model="password"
                      hide-details
                      prepend-inner-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword=!showPassword"
                      name="password"
                      placeholder="Password"
                      :type="showPassword ? 'text' : 'password'"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="px-0">
                    <v-btn
                      class="btnFormFont"
                      color="success"
                      height="50px"
                      elevation="5"
                      block
                      @click="login"
                    >
                        Login
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="line px-0">
                    <v-btn
                      href="/farmer/register"
                      class="btnFormFont mb-7"
                      color="white"
                      height="50px"
                      elevation="3"
                      block
                    >
                      Register
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-container
              grid-list-xs
              class="d-flex justify-center"
              height="50px"
            >
              <h6 class="forgotFont"><a>Forgot password?</a></h6>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    valid: true,
    username: '',
    password: '',
    showPassword: false
  }),
  methods: {
    login () {
      const body = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('authentication/login', body)
    }
  },
  computed: {
    ...mapState('authentication', ['message', 'alert'])
  },
  mounted () {
    // localStorage.removeItem('token')
    localStorage.clear()
  }
}
</script>

<style>
.titleFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 47px;
}
.titleFormFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 47px;
}
.btnFormFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 47px;
}
.forgotFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 28px;
}
.alertFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 28px;
}
.line {
    border-bottom: solid 2px;
    border-bottom-color: #B9B6B6;

}
</style>

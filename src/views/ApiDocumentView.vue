<template>
  <v-container class="mt-16 mb-10 pt-16">
    <v-row justify="center">
      <v-col  cols="3">
        <v-card
          elevation="0"
          class="menuFont"
        >
          <v-list-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>Authentication</v-list-item-title>
            </template>
            <v-list-item link>
              <v-list-item-title>Login Website</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Login Mobile</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>Registration</v-list-item-title>
            </template>
            <v-list-item link>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>User management</v-list-item-title>
            </template>
            <v-list-item link>
              <v-list-item-title>Create role</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          min-width="600px"
          elevation="0"
        >
          <v-row>
            <v-col>
              <h1 class="titleDetailFont d-flex justify-left pt-2 pl-10">Login website</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h1 class="subTitleFont d-flex justify-left pl-5">http://village-developer.com/login</h1>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  date: () => {

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
    line-height: 28px;
  }
</style>

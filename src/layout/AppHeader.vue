<template>
  <v-app-bar
    fixed
    color="white"
    height="100px"
    elevation="2"
  >
  <v-container
    fill-height
  >
    <a href="/farmer/api-document">
      <v-img
        class="mr-4"
        contain
        max-height="70"
        max-width="70"
        src="../assets/login/logo.jpg"
      ></v-img>
    </a>
    <h1 class="titleFont">Farmer Project</h1>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-text-field
      class="ml-8 mr-8"
      hide-details
      prepend-inner-icon="mdi-magnify"
      name="search"
      placeholder="Search"
      outlined
      rounded
    ></v-text-field>
    <v-btn class="mr-4s" depressed color="white">
      <v-icon large>mdi-bell</v-icon>
    </v-btn>
    <v-btn depressed color="white">
      <v-icon large>mdi-account</v-icon>
    </v-btn>
  </v-container>
  </v-app-bar>
</template>

<script>

</script>

<style>
  .titleFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    line-height: 60px;
  }
</style>

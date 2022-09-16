<template>
  <v-app-bar
    fixed
    color="white"
    height="70px"
    elevation="2"
  >
  <v-container
    fill-height
    class="pa-0"
  >
    <a href="/farmer/api-document">
      <v-img
        class="mr-4"
        contain
        max-height="40"
        max-width="40"
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
      dense
    ></v-text-field>
    <v-btn
      class="mr-4"
      fab
      depressed
      color="white"
    >
      <v-icon large>mdi-bell</v-icon>
    </v-btn>
    <v-menu
      offset-y
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          depressed
          color="white"
        >
          <v-icon
            large
            v-bind="attrs"
            v-on="on">mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.link"
          link
        >
          <v-list-item-title class="menuFont"><v-icon>mdi-logout</v-icon>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Logout',
        link: '/farmer/login'
      }
    ]
  })
}
</script>

<style>
  .titleFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 20px;
  }
  .menuFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
  }
</style>

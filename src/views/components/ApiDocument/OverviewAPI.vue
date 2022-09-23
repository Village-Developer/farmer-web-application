<template>
    <v-sheet>
      <v-row class="mt-8">
          <v-col>
            <p class="detailFont">{{ apiDetail.description }}</p>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h1 class="subTitleFont">Features</h1>
            <ul class="detailFont ml-5 mt-4">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</li>
              <li>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h1 class="subTitleFont">Parameters</h1>
            <ul class="ml-5 mt-4">
              <li class="detailFont">Body</li>
            </ul>
            <v-textarea
              background-color="black"
              dark
              height="350px"
              rounded
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Parameter content type</p>
          </v-col>
          <v-col>
            <v-select
              :items="parameters"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col>
            <h1 class="subTitleFont">Response</h1>
            <ul class="ml-5 mt-4">
              <li class="detailFont">Status Code 200 OK</li>
            </ul>
            <v-textarea
              background-color="black"
              dark
              height="350px"
              rounded
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Response content type</p>
          </v-col>
          <v-col>
            <v-select
              v-model="parameter"
              :items="responses"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'OverviewAPI',
  data: () => ({
    parameter: 'application/json',
    apiDetail: {
      title: 'Login website',
      method: 'POST',
      path: 'http://village-developer.com/login',
      description: "\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\""
    },
    parameters: ['application/json', 'application/xml'],
    status: ['200 OK', '400 Bad Request', '500 Internal error'],
    responses: ['application/json', 'application/xml']
  })
}
</script>

<style>

</style>

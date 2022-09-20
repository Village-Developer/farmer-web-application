<template>
  <v-container class="mt-16 mb-10 pt-16">
    <v-row justify="center">
      <v-col
        sm="0"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card
          elevation="0"
          class="menuFont"
        >
          <v-list-group
            no-action
            v-for="(list, index) in apiLists"
            :key="index"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ list.apiGroup }}</v-list-item-title>
            </template>
            <v-list-item
              link
              v-for="(api, index) in list.api"
              :key="index"
            >
              <v-list-item-title>{{ api }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-card>
      </v-col>
      <v-col
        sm="0"
        md="8"
        lg="7"
        xl="6"
      >
        <v-card
          min-width="600px"
          elevation="0"
        >
          <v-row>
            <v-col>
              <h1 class="titleDetailFont d-flex justify-left pt-2 pl-10">{{ apiDetail.title }}</h1>
            </v-col>
            <v-col>
              <v-btn depressed color="success" x-small>1.1.1</v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-8">
            <v-col>
              <v-sheet color="#D3E5D0" rounded>
                <v-row>
                  <v-col cols="2">
                    <v-btn
                      class="subTitleFont ml-5"
                      color="#56D143"
                      depressed
                    >{{ apiDetail.method }}</v-btn>
                  </v-col>
                  <v-col>
                    <h1 class="subTitleFont d-flex justify-left">{{ apiDetail.path }}</h1>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-sheet color="#EBE8E8" height="60px" fil class="d-flex align-center" rounded>
                <v-btn class="subTitleFont mx-5" depressed>Overview</v-btn>
                <v-btn class="subTitleFont" depressed>Sample</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
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
                :items="responses"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    apiLists: [
      {
        apiGroup: 'Authentication',
        api: [
          'Login Website',
          'Login mobile'
        ]
      },
      {
        apiGroup: 'Registration',
        api: [
          'Register'
        ]
      }
    ],
    apiDetail: {
      title: 'Login website',
      method: 'POST',
      path: 'http://village-developer.com/login',
      description: "\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\""
    },
    parameters: ['application/json', 'application/xml'],
    status: ['200 OK', '400 Bad Request', '500 Internal error'],
    responses: ['application/json', 'application/xml']
  }),
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
  .detailFont {
    font-family: 'Lemon', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
</style>

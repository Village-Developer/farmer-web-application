<template>
  <div>
    <div
      v-for="document, index in documents"
      :key="index"
    >
      <v-row
        class="mt-6 text-center"
        no-gutters
      >
        <div class="text-h6 font-weight-light">{{document.name}}</div>
        <v-divider class="my-auto mx-3"></v-divider>
        <v-btn
          v-if="getMode"
          icon
          @click="document.edit = !document.edit"
        ><v-icon>{{ !document.edit ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn>
      </v-row>
      <v-textarea
        class="my-1"
        :value="description"
        flat
        solo
        :outlined="getMode"
        auto-grow
        hide-details
        :readonly="!getMode"
      />
    </div>
    <v-row
      class="mt-6 text-center"
      no-gutters
    >
      <div class="text-h6 font-weight-light">Usage Example</div>
      <v-divider class="my-auto mx-3"></v-divider>
      <v-btn
        v-if="getMode"
        icon
      ><v-icon>{{ getMode ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn>
    </v-row>
      <div class="ml-5">
        <v-row
          class="align-center mt-4 mb-2"
          no-gutters
        >
          <div class="mr-2 font-weight-medium">Path:</div>
          <v-text-field
            dense
            hide-details
            solo
            flat
            :outlined="getMode"
            value="www.village.com/api/api_document/api_group/api_list/:api_list_id"
            :readonly="!getMode"
          >
          </v-text-field>
        </v-row>
        <v-row
          class="align-center"
          no-gutters
        >
          <div class="mr-2 font-weight-medium">Method:</div>
          <v-text-field
            dense
            hide-details
            solo
            flat
            :outlined="getMode"
            value="POST"
            :readonly="!getMode"
          >
        </v-text-field>
      </v-row>
    </div>
      <v-row
        class="mt-6 text-center"
        no-gutters
      >
      <div class="text-h6 font-weight-light">Response Example</div>
      <v-divider class="my-auto mx-3"></v-divider>
      <v-btn
        v-if="getMode"
        icon
      ><v-icon>{{ getMode ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn>
    </v-row>
    <v-textarea
      class="mt-4"
      outlined
      auto-grow
      background-color="blue-grey lighten-5"
      :readonly="!getMode"
    >
    </v-textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Document',
  data: () => ({
    documents: [
      { name: 'Description', edit: false },
      { name: 'Features', edit: false }
    ],
    description: 'It allows developers to test their code and applications without having to set up a real login system or connect to a production database. The mockup login API typically returns predetermined responses for various input scenarios, allowing developers to test how their code handles different types of responses. Some mockup login APIs may even allow developers to customize the responses that are returned, allowing for more comprehensive testing.'
  }),
  computed: {
    ...mapGetters('apiDocument', ['getMode'])
  }
}
</script>

<style>

</style>

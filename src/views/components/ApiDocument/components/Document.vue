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
        <!-- <v-btn
          v-if="getMode"
          icon
          @click="document.edit = !document.edit"
        ><v-icon>{{ !document.edit ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn> -->
      </v-row>
      <v-textarea
        class="my-1"
        :value="getApiDetail.description"
        solo
        :flat="!getMode"
        :background-color="!getMode ? '' : 'blue-grey lighten-4'"
        :readonly="!getMode"
        hide-details
        row-height="1"
        no-resize
      />
    </div>
    <v-row
      class="mt-6 text-center"
      no-gutters
    >
      <div class="text-h6 font-weight-light">Usage</div>
      <v-divider class="my-auto mx-3"></v-divider>
      <!-- <v-btn
        v-if="getMode"
        icon
      ><v-icon>{{ getMode ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn> -->
    </v-row>
      <div class="ml-5">
        <v-row
          class="align-center mt-4 mb-2"
          no-gutters
        >
          <div class="mr-1 text-body-1 font-weight-regular">URL:</div>
          <v-text-field
            dense
            hide-details
            solo
            :flat="!getMode"
            :background-color="!getMode ? '' : 'blue-grey lighten-4'"
            :value="getApiDetail.url"
            :readonly="!getMode"
          >
          </v-text-field>
        </v-row>
        <v-row
          class="align-center"
          no-gutters
        >
          <div class="mr-1 text-body-1 font-weight-regular">Method:</div>
          <v-text-field
            dense
            hide-details
            solo
            :flat="!getMode"
            :background-color="!getMode ? '' : 'blue-grey lighten-4'"
            :value="getApiDetail.method"
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
      <!-- <v-btn
        v-if="getMode"
        icon
      ><v-icon>{{ getMode ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon></v-btn> -->
    </v-row>
    <v-row no-gutters>
      <v-card max-width="60px" elevation="0">
        <v-textarea
          class="border mt-4 text-body-2 font-weight-medium"
          auto-grow
          disabled
          solo
          flat
          background-color="blue-grey lighten-1"
          hide-details
          v-model="lineNumber"
          :rows="lineCount"
          dense
        ></v-textarea>
      </v-card>
      <v-textarea
        class="border mt-4 text-body-2 font-weight-regular"
        auto-grow
        solo
        flat
        :readonly="!getMode"
        :background-color="!getMode ? 'blue-grey lighten-5' : 'blue-grey lighten-4'"
        v-model="response"
        hide-details
        @keydown.tab="tab"
        :rows="lineCount"
        dense
        style="text-align: right;"
      ></v-textarea>
    </v-row>
    <v-card
      class="mb-10 text-right"
      height="20px"
      elevation="0"
      color="grey"
      tile
    >
      <div class="text-caption mr-2">By Village Developer</div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Document',
  data: () => ({
    test: { firstname: 'foo', lastname: 'bar', pet: ['dog', 'ant', 'cat'] },
    documents: [
      { name: 'Description', edit: false },
      { name: 'Feature', edit: false }
    ],
    description: 'It allows developers to test their code and applications without having to set up a real login system or connect to a production database. The mockup login API typically returns predetermined responses for various input scenarios, allowing developers to test how their code handles different types of responses. Some mockup login APIs may even allow developers to customize the responses that are returned, allowing for more comprehensive testing.'
  }),
  methods: {
    tab (e) {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      e.target.value = e.target.value.substring(0, start) + '\t' + e.target.value.substring(end)
      e.target.selectionStart = e.target.selectionEnd = start + 1
    }
  },
  computed: {
    ...mapGetters('apiDocument', ['getMode', 'getApiDetail']),
    lineCount () {
      return this.response.split('\n').length
    },
    lineNumber () {
      let number = ''
      for (let i = 0; i < this.lineCount; i++) {
        if (i < this.lineCount - 1) {
          number += i + 1 + '\n'
        } else {
          number += i + 1
        }
      }
      return number
    },
    response () {
      return JSON.stringify(this.test, null, 8)
    }
  }
}
</script>

<style>
.border.v-input .v-input__slot {
  border-radius: 0px;
}
</style>

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
        :background-color="!getMode ? '' : ''"
        :readonly="!getMode"
        hide-details
        row-height="1"
        no-resize
      />
    </div>
    <v-row
      class="mt-6 text-center mb-4"
      no-gutters
    >
      <div class="text-h6 font-weight-light">Features</div>
      <v-divider class="my-auto mx-3"></v-divider>
      <v-btn
        v-if="getMode"
        icon
        @click="addFeature"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row
      v-for="feature, index in features"
      :key="feature.no"
      no-gutters
      class="mb-1"
    >
      <v-card
        elevation="0"
        width="60px"
      >
        <v-text-field
          class="text-body-2 font-weight-regular"
          reverse
          solo
          flat
          :value="(index + 1).toString() + ')'"
          dense
          hide-details
          readonly
        />
      </v-card>
      <v-textarea
        class="text-body-2 font-weight-regular"
        solo
        :flat="!getMode"
        rows="1"
        :value="feature.value"
        auto-grow
        :readonly="!getMode"
        dense
        hide-details
        @keydown.tab="tab"
      />
      <v-btn
        v-if="getMode"
        class="ml-2"
        @click="deleteFeature(index)"
        icon
      ><v-icon>mdi-delete</v-icon></v-btn>
    </v-row>
    <v-row
      class="mt-6 text-center"
      no-gutters
    >
      <div class="text-h6 font-weight-light">Usage</div>
      <v-divider class="my-auto mx-3"></v-divider>
     <v-menu
        v-if="getMode"
        offset-y
        left
        transition="slide-y-transition"
        :close-on-content-click="false"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-card
        class="pa-2"
      >
        <v-checkbox
          v-for="(usage, index) in usages"
          v-model="usage.active"
          :key="index"
          class="ma-0"
          :label="usage.name"
          @click="usage.active != usage.active"
          hide-details
        ></v-checkbox>
      </v-card>
    </v-menu>
    </v-row>
      <div class="ml-5">
        <v-row
          v-if="usages[0].active"
          class="align-center mt-4 mb-2"
          no-gutters
        >
          <div class="mr-1 text-body-1 font-weight-regular">URL:</div>
          <v-text-field
            dense
            hide-details
            solo
            :flat="!getMode"
            :background-color="!getMode ? '' : ''"
            :value="getApiDetail.url"
            :readonly="!getMode"
          >
          </v-text-field>
        </v-row>
        <v-row
          v-if="usages[1].active"
          class="align-center"
          no-gutters
        >
          <div class="mr-1 text-body-1 font-weight-regular">Method:</div>
          <v-text-field
            dense
            hide-details
            solo
            :flat="!getMode"
            :background-color="!getMode ? '' : ''"
            :value="getApiDetail.method"
            :readonly="!getMode"
          >
        </v-text-field>
      </v-row>
      <v-row
        v-if="usages[2].active"
        class="mt-4 mb-1"
        no-gutters
      >
        <div class="text-body-1">Query Params</div>
      </v-row>
      <v-row
        v-if="usages[2].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          value="KEY"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="VALUE"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="DESCRIPTION"
          hide-details
          readonly
        />
      </v-row>
      <v-row
        v-if="usages[2].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          label="Key"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Value"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Description"
          hide-details
          :readonly="!getMode"
        />
      </v-row>
      <v-row
        v-if="usages[3].active"
        class="mt-6 mb-1"
        no-gutters
      >
        <div class="text-body-1">Path Variables</div>
      </v-row>
      <v-row
        v-if="usages[3].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          value="KEY"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="VALUE"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="DESCRIPTION"
          hide-details
          readonly
        />
      </v-row>
      <v-row
        v-if="usages[3].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          label="Key"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Value"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Description"
          hide-details
          :readonly="!getMode"
        />
      </v-row>
      <v-row
        v-if="usages[4].active"
        class="mt-6 mb-1"
        no-gutters
      >
        <div class="text-body-1">Headers</div>
      </v-row>
      <v-row
        v-if="usages[4].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          value="KEY"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="VALUE"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="DESCRIPTION"
          hide-details
          readonly
        />
      </v-row>
      <v-row
        v-if="usages[4].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          label="Key"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Value"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Description"
          hide-details
          :readonly="!getMode"
        />
      </v-row>
      <v-row
        v-if="usages[5].active"
        class="mt-6 mb-1"
        no-gutters
      >
        <div class="text-body-1">Body (form-data)</div>
      </v-row>
      <v-row
        v-if="usages[5].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          value="KEY"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="VALUE"
          hide-details
          readonly
        />
        <v-text-field
          class="border"
          solo
          dense
          value="DESCRIPTION"
          hide-details
          readonly
        />
      </v-row>
      <v-row
        v-if="usages[5].active"
        class="mx-4"
        no-gutters
      >
        <v-text-field
          class="border"
          solo
          dense
          label="Key"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Value"
          hide-details
          :readonly="!getMode"
        />
        <v-text-field
          class="border"
          solo
          dense
          label="Description"
          hide-details
          :readonly="!getMode"
        />
      </v-row>
      <v-row
        v-if="usages[6].active"
        class="mt-6 mb-1"
        no-gutters
      >
        <div class="text-body-1">Body (json)</div>
      </v-row>
    <v-row
      no-gutters
      class="mx-4"
      v-if="usages[6].active"
    >
      <v-card max-width="60px" elevation="0">
        <v-textarea
          class="border text-body-2 font-weight-medium"
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
        class="border text-body-2 font-weight-regular"
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
      v-if="usages[6].active"
      class="mb-10 text-right mx-4"
      height="20px"
      elevation="0"
      color="grey"
      tile
    >
      <div class="text-caption mr-2">By Village Developer</div>
    </v-card>
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
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    </v-row>
    <v-row
      no-gutters
      class="mx-6 mb-1 mt-4"
    >
      <v-text-field
        class="border text-body-2 font-weight-medium mr-2"
        solo
        :flat="!getMode"
        :readonly="!getMode"
        dense
        value="Status Code : 200 OK"
        label="Description"
        hide-details
      />
      <v-btn
        v-if="getMode"
        icon
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-row>
    <v-row no-gutters class="mx-6">
      <v-card max-width="60px" elevation="0">
        <v-textarea
          class="border text-body-2 font-weight-medium"
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
        class="border text-body-2 font-weight-regular"
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
      class="mb-10 text-right mx-6"
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
    responses: {
      response: '{\n' + '        "firstname": "foo",\n' + '        "lastname": "bar"\n' + '    }',
      description: 'Loading....'
    },
    responseExample: '{\n' + '        "firstname": "foo",\n' + '        "lastname": "bar"\n' + '    }',
    documents: [
      { name: 'Description', edit: false }
    ],
    features: [
      { no: 1, value: 'Loading....\nTest' },
      { no: 2, value: 'Loading....' },
      { no: 3, value: 'Loading....' },
      { no: 4, value: 'Loading....' },
      { no: 5, value: 'Loading....' }
    ],
    usages: [
      { name: 'URL', active: true },
      { name: 'Method', active: true },
      { name: 'Query Params', active: true },
      { name: 'Path Variables', active: true },
      { name: 'Headers', active: true },
      { name: 'Body (form-data)', active: true },
      { name: 'Body (json)', active: true }
    ]
  }),
  methods: {
    tab (e) {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      e.target.value = e.target.value.substring(0, start) + '\t' + e.target.value.substring(end)
      e.target.selectionStart = e.target.selectionEnd = start + 1
    },
    addFeature () {
      this.features.push({ no: this.features.length + 1, value: '' })
    },
    deleteFeature (index) {
      this.features.splice(index, 1)
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
    response: {
      get () {
        return this.responseExample
      },
      set (value) {
        this.responseExample = value
      }
    }
  }
}
</script>

<style>
.border.v-input .v-input__slot {
  border-radius: 0px;
}
</style>

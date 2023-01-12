<template>
   <v-card
      color="white"
      width="300px"
      min-width="300px"
      elevation="1"
      :height="deviceHeight - getAppBarHeight"
    >
      <v-row
        ref="searchBox"
        no-gutters
      >
        <slot name="search" />
        <v-card
          v-if="!$slots.search"
          class="d-flex my-3"
          width="300px"
          elevation="0"
          tile
        >
          <v-text-field
            class="my-auto mx-2"
            prepend-icon="mdi-filter-variant"
            label="Filter"
            dense
            clearable
            solo
            flat
            clear-icon="mdi-close-circle-outline"
            hide-details
            v-model="search"
            @input="onSearch()"
            outlined
          ></v-text-field>
          <v-btn
            class="ml-auto mr-2 my-auto"
            icon
            rounded
            depressed
            small
            @click="showSnackbar('Waiting for API')"
          ><v-icon>mdi-plus</v-icon></v-btn>
        </v-card>
      </v-row>
      <v-card
        style="overflow-y: auto;"
        :height="deviceHeight - getAppBarHeight - searchBoxHeight"
        elevation="0"
      >
        <v-treeview
          ref="treeview"
          class="cursor"
          activatable
          hoverable
          :search="search"
          :items="items"
          item-key="id"
          item-children="api"
          dense
          @update:active="activeItem"
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.method">
              mdi-folder
            </v-icon>
            <div
              v-else
              :class="[`mb-0`, `font-weight-regular`, `${colors[item.method]}--text`, `text-caption`]"
            >{{ methods[item.method]}}</div>
          </template>
          <template v-slot:label="{ item }">
            <div
              class="text--subtitle-2"
            >
              {{ item.name }}
            </div>
          </template>
          <template v-slot:append="{ item }">
            <v-menu
              offset-y
              left
              min-width="150px"
              tile
            >
              <template v-slot:activator="{ on, attr }">
                <v-btn
                  v-show="item.showEditIcon"
                  v-bind="attr"
                  v-on="on"
                  icon
                  small
                >
                  <v-icon>
                    mdi-dots-horizontal
                  </v-icon>
                </v-btn>
              </template>
              <v-list
                dense
              >
                <v-list-item
                  class="mx-2"
                  @click="selectRenameItem(item.name), renameDialog = true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-pencil-outline</v-icon></v-list-item-icon>
                  <v-list-item-title>Rename</v-list-item-title>
                </v-list-item>
                <v-list-item
                  class="mx-2"
                  @click="selectDeleteItem(item.id, item.name), deleteDialog = true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-trash-can-outline</v-icon></v-list-item-icon>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-treeview>
      </v-card>
      <v-dialog
        v-model="renameDialog"
        max-width="500px"
      >
        <v-card
        >
          <v-card-title>Edit name</v-card-title>
          <v-divider></v-divider>
          <v-text-field
            class="mx-6 my-10"
            outlined
            dense
            autofocus
            hide-details
            :value="oldItemName"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn
              min-width="80px"
              elevation="0"
              @click="renameDialog = false"
            >Cancel</v-btn>
            <v-btn
              min-width="80px"
              elevation="0"
              color="success"
              @click="selectRenameItem"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-dialog
        v-model="deleteDialog"
        max-width="500px"
      >
        <v-card
        >
          <v-card-title>Delete</v-card-title>
          <v-divider></v-divider>
          <div>
            <p class="text-center my-8">Are you sure you want to delete "{{deleteItemName}}" ?</p>
          </div>
          <v-divider></v-divider>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn
              min-width="80px"
              elevation="0"
              @click="deleteDialog = false"
            >Cancel</v-btn>
            <v-btn
              min-width="80px"
              elevation="0"
              color="error"
              @click="confirmDeleteItem(), deleteDialog = false"
            >Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SideMenu',
  data: () => ({
    renameDialog: false,
    deleteDialog: false,
    oldItemName: '',
    deleteItemName: '',
    deleteId: '',
    deviceHeight: 0,
    searchBoxHeight: 0,
    search: null,
    methods: {
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE'
    },
    colors: {
      get: 'green',
      post: 'orange',
      put: 'blue',
      delete: 'red'
    }
  }),
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    handleResize () {
      this.deviceHeight = window.innerHeight
    },
    onSearch () {
      this.search !== '' ? this.$refs.treeview.updateAll(true) : this.$refs.treeview.updateAll(false)
    },
    selectDeleteItem (id, name) {
      this.deleteItemName = name
      this.deleteId = id
    },
    selectRenameItem (newItemName) {
      this.oldItemName = newItemName
    },
    setSearchBoxHeight () {
      this.searchBoxHeight = this.$refs.searchBox.clientHeight
    },
    ...mapMutations('apiDocument', ['activeItem', 'renameItem', 'deleteItem']),
    ...mapMutations(['showSnackbar'])
  },
  computed: {
    ...mapGetters(['getAppBarHeight'])
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
    this.setSearchBoxHeight()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>

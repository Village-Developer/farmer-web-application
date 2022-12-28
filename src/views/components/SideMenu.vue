<template>
   <v-card
      color="white"
      height="100%"
      width="300px"
      min-width="300px"
      elevation="1"
    >
      <v-card
        class="d-flex"
        width="300px"
        height="70px"
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
          v-model="filterBox"
          @input="onFilter()"
          outlined
        ></v-text-field>
        <v-btn
          class="ml-auto mr-2 my-auto"
          icon
          rounded
          depressed
          small
        ><v-icon>mdi-plus</v-icon></v-btn>
      </v-card>
      <v-card
        :height="deviceHeight - 70 - 50"
        style="overflow-y: auto;"
        elevation="0"
      >
        <v-treeview
          ref="treeview"
          activatable
          hoverable
          :search="filterBox"
          :items="apiLists"
          item-key="id"
          item-children="api"
          dense
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
            >
              <template v-slot:activator="{ on, attr }">
                <v-btn
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
                  @click="selectItem(item.id), showDialog = true"
                >
                  <v-list-item-title>Rename</v-list-item-title>
                </v-list-item>
                <v-list-item
                  class="mx-2"
                  @click="selectItem(item.id)"
                >
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-dialog
              v-model="showDialog"
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
                ></v-text-field>
                <v-divider></v-divider>
                <v-card-actions class="py-5">
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="showDialog = false"
                  >close</v-btn>
                  <v-btn
                    color="success"
                    @click="showDialog = false"
                  >Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-treeview>
      </v-card>
      <!-- <v-card
        class="d-flex"
        width="300px"
        height="70px"
        elevation="0"
        tile
      >
        <v-text-field
          class="my-auto mx-2"
          prepend-icon="mdi-filter-variant"
          label="Filter"
          dense
          hide-details
          v-model="filterBox"
          @input="onFilter()"
          outlined
        ></v-text-field>
        <v-btn
          class="ml-auto mr-2 my-auto"
          icon
          rounded
          depressed
          small
        ><v-icon>mdi-plus</v-icon></v-btn>
      </v-card>
      <v-card
        :height="deviceHeight - 70 - 50"
        style="overflow-y: auto;"
        elevation="0"
      >
        <template v-for="list in filteredApiLists">
          <v-list-group
            v-if="list.isActive == true"
            :key="list.id"
            :value="list.expandGroup"
            :ripple="false"
            no-action
            @click="icon(list.id)"
          >
            <template v-slot:prependIcon>
              <div>
                <v-icon>mdi-chevron-down</v-icon>
              </div>
            </template>
            <template v-slot:appendIcon
              v-if="!list.editing && !list.deleting"
            >
              <div>
                <v-icon
                   @click.native="list.editing = true, originalGroupName = list.apiGroup"
                >mdi-pencil-outline</v-icon>
                <v-icon>mdi-delete-outline</v-icon>
              </div>
            </template>
            <template v-slot:appendIcon
              v-else-if="list.editing"
            >
              <v-icon
                class="mr-1"
                @click="list.editing = false"
                dense
              >mdi-check</v-icon>
              <v-icon
                @click="list.api_name = originalApiName; list.editing = false"
                dense
              >mdi-close</v-icon>
            </template>
            <template v-slot:activator>
                <v-list-item
                  dense
                  class="pl-0"
                  v-if="(list.apiGroup.includes(filterBox) || list.api.length > 0) && list.isActive == true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-folder</v-icon></v-list-item-icon>
                  <v-list-item-title>{{list.apiGroup}}</v-list-item-title>
                </v-list-item>
            </template>
            <template v-for="api in list.api">
            <v-list-item
              v-if="(api.api_name.includes(filterBox) || list.apiGroup.includes(filterBox)) && api.isActive == true"
              :key="api.api_id"
              :value="api.api_id"
              color="primary"
              :input-value="api.apiListActive"
              @click="selectItem(api.api_id)"
              @mouseover="hoverItem(api.api_id)"
              dense
              :ripple="false"
            >
              <v-list-item-icon class="mr-1"><v-icon>mdi-api</v-icon></v-list-item-icon>
              <template v-if="!api.editing && !api.deleting">
                <v-list-item-title>{{api.api_name}}</v-list-item-title>
                <template v-if="api.showEditIcon">
                  <v-icon
                    @click="api.editing = true, originalApiName = api.api_name"
                    dense
                  >mdi-pencil-outline</v-icon>
                  <v-list-item-icon
                    class="ml-1"
                    @click="api.deleting = true"
                  ><v-icon>mdi-delete-outline</v-icon></v-list-item-icon>
                </template>
              </template>
              <template v-else-if="api.editing">
                <v-text-field
                  dense
                  hide-details
                  v-model="api.api_name"
                ></v-text-field>
                <v-icon
                  class="mr-1"
                  @click="api.editing = false"
                  dense
                >mdi-check</v-icon>
                <v-icon
                  @click="api.api_name = originalApiName; api.editing = false"
                  dense
                >mdi-close</v-icon>
              </template>
              <template v-else-if="api.deleting">
              <v-list-item-title>Delete "{{api.api_name}}"</v-list-item-title>
                <v-icon
                  class="mr-1"
                  @click="deleteItem(api.api_id), api.deleting = false"
                  dense
                >mdi-check</v-icon>
                <v-icon
                  @click="api.deleting = false"
                  dense
                >mdi-close</v-icon>
              </template>
            </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-card> -->
  </v-card>
</template>

<script>
import { EventBus } from '@/event-bus'
export default {
  name: 'SideMenu',
  data: () => ({
    menuOpen: false,
    showDialog: false,
    selected: [],
    editing: true,
    open: false,
    iconEdit: false,
    originalApiName: '',
    originalGroupName: '',
    listGroupExpand: false,
    beforeSelectedItem: '',
    selectedItem: 100,
    deviceHeight: 0,
    filterBox: null,
    show: false,
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
    },
    options: [
      { id: 1, name: 'Rename' },
      { id: 2, name: 'Delete' }
    ]
  }),
  props: {
    apiLists: {
      type: Array
    }
  },
  methods: {
    handleResize () {
      this.deviceHeight = window.innerHeight
    },
    onFilter () {
      this.filterBox !== '' ? this.$refs.treeview.updateAll(true) : this.$refs.treeview.updateAll(false)
    },
    selectItem (id) {

    },
    hoverItem () {
      console.log('gee')
      // EventBus.$emit('hover', id)
    },
    deleteItem (id) {
      EventBus.$emit('delete', id)
    },
    block () {
      this.listGroupExpand = false
      console.log('block')
    },
    icon (id) {
      this.listGroupExpand = true
      EventBus.$emit('icon', id)
      console.log('icon')
    },
    test () {
      console.log('test')
    }
  },
  computed: {
    // filteredApiLists () {
    //   return this.apiLists.filter((apiList) => {
    //     return (
    //       apiList.apiGroup.includes(this.filterBox) ||
    //       apiList.api.some((api) => api.api_name.includes(this.filterBox))
    //     )
    //   })
    // }
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="css" scoped>
.border {
  border: 2px dashed orange;
}
v-list-item:disabled {
  color: blue;
}
.selected {
  background-color: red;
}
.v-list-group--active > .v-list-group__header > .v-list-group__header__append-icon .v-icon {
    /* transform: rotate(-180deg); */
    transform: none;
}
.v-list-group--active > .v-list-group__header > .v-list-group__header__prepend-icon .v-icon {
    transform: rotate(-180deg);
    /* transform: none; */
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
}
</style>

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
            @click="showAddProjectDialog()"
          ><v-icon>mdi-plus</v-icon></v-btn>
        </v-card>
      </v-row>
      <v-card
        style="overflow-y: auto;"
        :height="deviceHeight - getAppBarHeight - searchBoxHeight"
        elevation="0"
      >
        <v-card
          v-if="!items.length"
          class="d-flex justify-center align-center mt-2"
          elevation="0"
        >
          <div>No Content.</div>
        </v-card>
        <v-treeview
          v-if="items.length"
          ref="treeview"
          v-model="tree"
          class="cursor"
          activatable
          hoverable
          :active="initiallyActive"
          :open.sync="initiallyOpen"
          :search="search"
          :items="items"
          item-key="id"
          item-children="children"
          dense
          shaped
          @update:active="activeItem"
          @update:open="changeItem"
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="item.type === 'project'">
             {{ open ? 'mdi-book-open' : 'mdi-book' }}
            </v-icon>
            <v-icon v-if="item.type === 'group'">
              {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
            </v-icon>
            <div
              v-if="item.type === 'api'"
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
              transition="slide-y-transition"
              rounded="lg"
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
                  v-if="item.type === 'project'"
                  class="mx-2"
                  @click="selectProjectId(item), addGroupDialog = true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-plus</v-icon></v-list-item-icon>
                  <v-list-item-title>Add Folder</v-list-item-title>
                </v-list-item>
                 <v-list-item
                  v-if="item.type === 'project' || item.type === 'group'"
                  class="mx-2"
                  @click="selectProjectId(item), addApiDialog = true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-pencil-plus</v-icon></v-list-item-icon>
                  <v-list-item-title>Add Request</v-list-item-title>
                </v-list-item>
                <v-list-item
                  class="mx-2"
                  @click="selectRenameItem(item.name), renameDialog = true"
                >
                  <v-list-item-icon class="mr-2"><v-icon>mdi-pencil-outline</v-icon></v-list-item-icon>
                  <v-list-item-title>Rename</v-list-item-title>
                </v-list-item>
                <v-list-item
                  class="mx-2"
                  @click="selectDeleteItem(item), deleteDialog = true"
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
          <v-card-title>Rename</v-card-title>
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
              disabled
              @click="selectRenameItem"
            >Rename</v-btn>
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
              v-if="deleteType === 'project'"
              min-width="80px"
              elevation="0"
              color="error"
              @click="deleteProject(deleteId), deleteDialog = false"
            >Delete</v-btn>
            <v-btn
              v-if="deleteType === 'group'"
              min-width="80px"
              elevation="0"
              color="error"
              @click="deleteGroup(deleteId), deleteDialog = false"
            >Delete</v-btn>
             <v-btn
              v-if="deleteType === 'api'"
              min-width="80px"
              elevation="0"
              color="error"
              @click="deleteApi(deleteId), deleteDialog = false"
            >Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="addProjectDialog"
        max-width="500px"
      >
        <v-card
        >
          <v-card-title>Add Project</v-card-title>
          <v-divider></v-divider>
          <v-text-field
            class="mx-6 my-10"
            outlined
            dense
            autofocus
            hide-details
            v-model="newProjectName"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn
              min-width="80px"
              elevation="0"
              @click="addProjectDialog = false"
            >Cancel</v-btn>
            <v-btn
              min-width="80px"
              elevation="0"
              color="success"
              @click="addNewProject(newProjectName); addProjectDialog = false"
            >Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-dialog
        v-model="addGroupDialog"
        max-width="500px"
      >
        <v-card
        >
          <v-card-title>Add Folder</v-card-title>
          <v-divider></v-divider>
          <v-text-field
            class="mx-6 my-10"
            outlined
            dense
            autofocus
            hide-details
            v-model="newGroupName"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn
              min-width="80px"
              elevation="0"
              @click="addGroupDialog = false"
            >Cancel</v-btn>
            <v-btn
              min-width="80px"
              elevation="0"
              color="success"
              @click="setGroupName(newGroupName); addNewGroup(group); newGroupName = '' ; addGroupDialog = false"
            >Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-dialog
        v-model="addApiDialog"
        max-width="500px"
      >
        <v-card
        >
          <v-card-title>Add Request</v-card-title>
          <v-divider></v-divider>
          <v-text-field
            class="mx-6 my-10"
            outlined
            dense
            autofocus
            hide-details
            v-model="newApiName"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions class="py-5">
            <v-spacer></v-spacer>
            <v-btn
              min-width="80px"
              elevation="0"
              @click="addApiDialog = false"
            >Cancel</v-btn>
            <v-btn
              min-width="80px"
              elevation="0"
              color="success"
              @click="setApiName(newApiName); addNewApi(api); newApiName = '' ; addApiDialog = false"
            >Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SideMenu',
  data: () => ({
    tree: [],
    renameDialog: false,
    deleteDialog: false,
    addProjectDialog: false,
    addGroupDialog: false,
    addApiDialog: false,
    projectId: '',
    newProjectName: '',
    newGroupName: '',
    newApiName: '',
    oldItemName: '',
    deleteItemName: '',
    deleteId: '',
    deviceHeight: 0,
    searchBoxHeight: 0,
    search: null,
    deleteType: '',
    group: {
      id: '',
      name: ''
    },
    api: {
      api_project_id: '',
      api_group_id: '',
      api_document_name: '',
      method: 'GET',
      path: '',
      description: '',
      feature: ''
    },
    methods: {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE'
    },
    colors: {
      GET: 'green',
      POST: 'orange',
      PUT: 'blue',
      DELETE: 'red'
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
    changeItem (value) {
      localStorage.setItem('open', JSON.stringify(value))
    },
    // selectItem (item, active) {
    //   if (!active) {
    //     localStorage.setItem('active', JSON.stringify([item.id]))
    //   } else {
    //     localStorage.setItem('active', JSON.stringify([]))
    //   }
    //   if (item.type === 'api' && !active) {
    //     this.setApiInfo(true)
    //   } else {
    //     this.setApiInfo(false)
    //   }
    // },
    selectDeleteItem (item) {
      this.deleteType = item.type
      this.deleteItemName = item.name
      this.deleteId = item.id
    },
    selectRenameItem (newItemName) {
      this.oldItemName = newItemName
    },
    selectProjectId (item) {
      this.group.id = item.id
      if (item.type === 'project') {
        this.api.api_project_id = item.id
        this.api.api_group_id = ''
      } else if (item.type === 'group') {
        this.api.api_project_id = item.project_id
        this.api.api_group_id = item.id
      }
    },
    setGroupName (name) {
      this.group.name = name
    },
    setApiName (name) {
      this.api.api_document_name = name
    },
    setSearchBoxHeight () {
      this.searchBoxHeight = this.$refs.searchBox.clientHeight
    },
    showAddProjectDialog () {
      this.addProjectDialog = true
    },
    ...mapMutations('apiDocument', ['activeItem', 'renameItem', 'deleteItem', 'setOpen', 'setApiInfo']),
    ...mapMutations(['showSnackbar']),
    ...mapActions('apiDocument', ['addNewProject', 'deleteProject', 'addNewGroup', 'deleteGroup', 'addNewApi', 'deleteApi']),
    ...mapGetters('apiDocument', ['getOpen'])
  },
  computed: {
    ...mapGetters(['getAppBarHeight']),
    initiallyOpen: {
      get () {
        return JSON.parse(localStorage.getItem('open'))
      },
      set (value) {
        localStorage.setItem('open', JSON.stringify(value))
      }
    },
    initiallyActive: {
      get () {
        return JSON.parse(localStorage.getItem('active'))
      },
      set (value) {
        localStorage.setItem('active', JSON.stringify(value))
      }
    }
  },
  mounted () {
    this.deviceHeight = window.innerHeight
    window.addEventListener('resize', this.handleResize)
    this.setSearchBoxHeight()
    if (localStorage.getItem('open') === null) {
      localStorage.setItem('open', JSON.stringify([]))
    }
    if (localStorage.getItem('active') === null) {
      localStorage.setItem('active', JSON.stringify([]))
    }
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

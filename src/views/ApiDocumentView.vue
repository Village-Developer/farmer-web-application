<template>
  <v-container
    class="pa-0 overflow-hidden"
    fluid
  >
    <!-- Header -->
    <v-row
      no-gutters
      style="margin-bottom: 2px;"
    >
      <v-col>
        <AppHeader/>
      </v-col>
    </v-row>
    <h1></h1>
    <v-row no-gutters>
      <!-- Content -->
      <v-col cols="12">
        <v-card class="d-flex">
          <!-- <transition name="slide"> -->
            <SideMenu :apiLists="apiLists" style="margin-right: 1px" v-show="drawer"/>
          <!-- </transition> -->
          <api-document />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import OverviewAPI from './components/ApiDocument/OverviewAPI'
import SampleAPI from './components/ApiDocument/SampleAPI'
import { EventBus } from './../event-bus.js'
import SideMenu from './components/SideMenu'
import ApiDocument from './components/ApiDocument/ApiDocument'
import AppHeader from '@/layout/AppHeader'
import AppFooter from '@/layout/AppFooter.vue'
export default {
  name: 'ApiDocumentView',
  /* eslint-disable */
  data: () => ({
    drawer: true,
    overview: true,
    sample: false,
    apiDetail: {
      title: 'Login website',
      method: 'POST',
      path: 'http://village-developer.com/farmer/api/login',
      description: "This API endpoint allows users to log into the website using their username and password. The login process is secure and encrypted to protect the user's information. To use the endpoint, send a POST request to the specified path with the required parameters in the request body. Upon successful login, the API will return a session token that can be used to authenticate the user for subsequent requests."
    },
    apiLists: [  
      {    
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',    
        name: 'Authentication',    
        api: [      
          {        
            id: 'a3a1b3c5-d7e9-47fc-b83c-f3d1d2e1f9aa',        
            name: 'Login Website',
            method: 'post'        
          },      
            {        
              id: '1c2d3e4f-5a6b-7c8d-9e0f-1f2a3b4c5d6e',        
              name: 'Login mobile',
              method: 'post'      
            },      
            {        
              id: 'f5e4d3c2-b1a0-9e8d-7c6b-5a4f3e2d1c0a',        
              name: 'Logout',
              method: 'post'            
            }    
          ]
      },
      {
        id: 'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
        name: 'Registration',
        api: [
          {
            id: 'r9s7t5u3-v1w2-x3y4-z5a6-b7c8d9e0f1g2',
            name: 'Register',
            method: 'post'      
          },
          {
            id: 'h3i4j5k6-l7m8-n9o0-p1q2-r3s4t5u6v7w8',
            name: 'Verify email',
            method: 'post'      
          },
          {
            id: 'x9y7z5a3-b1c2-d3e4-f5g6-h7i8j9k0l1m2',
            name: 'Resend verification email',
            method: 'post'      
          }
        ]
      },
      {
        id: 'c5d6e7f8-g9h0-i1j2-k3l4-m5n6o7p8q9r0',
        name: 'Profile',
        api: [
          {
            id: 's1t2u3v4-w5x6-y7z8-a9b0-c1d2e3f4g5h6',
            name: 'View profile',
            method: 'get'      
          },
          {
            id: 'i7j8k9l0-m1n2-o3p4-q5r6-s7t8u9v0w1x2',
            name: 'Edit profile',
            method: 'put'      
          },
          {
            id: 'y3z4a5b6-c7d8-e9f0-g1h2-i3j4k5l6m7n8',
            name: 'Change password',
            method: 'put'      
          }
        ]
      }
    ]
    // apiLists: [
    //   {
    //     id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    //     apiGroup: 'Authentication',
    //     api: [
    //       {
    //         api_id: 'a3a1b3c5-d7e9-47fc-b83c-f3d1d2e1f9aa',
    //         api_name: 'Login Website'
    //       },
    //       {
    //         api_id: '1c2d3e4f-5a6b-7c8d-9e0f-1f2a3b4c5d6e',
    //         api_name: 'Login mobile'
    //       },
    //       {
    //         api_id: 'f5e4d3c2-b1a0-9e8d-7c6b-5a4f3e2d1c0a',
    //         api_name: 'Logout'
    //       }
    //     ]
    //   },
    //   {
    //     id: 'b3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8',
    //     apiGroup: 'Registration',
    //     api: [
    //       {
    //         api_id: 'r9s7t5u3-v1w2-x3y4-z5a6-b7c8d9e0f1g2',
    //         api_name: 'Register'
    //       },
    //       {
    //         api_id: 'h3i4j5k6-l7m8-n9o0-p1q2-r3s4t5u6v7w8',
    //         api_name: 'Verify email'
    //       },
    //       {
    //         api_id: 'x9y7z5a3-b1c2-d3e4-f5g6-h7i8j9k0l1m2',
    //         api_name: 'Resend verification email'
    //       }
    //     ]
    //   },
    //   {
    //     id: 'c5d6e7f8-g9h0-i1j2-k3l4-m5n6o7p8q9r0',
    //     apiGroup: 'Profile',
    //     api: [
    //       {
    //         api_id: 's1t2u3v4-w5x6-y7z8-a9b0-c1d2e3f4g5h6',
    //         api_name: 'View profile'
    //       },
    //       {
    //         api_id: 'i7j8k9l0-m1n2-o3p4-q5r6-s7t8u9v0w1x2',
    //         api_name: 'Edit profile'
    //       },
    //       {
    //         api_id: 'y3z4a5b6-c7d8-e9f0-g1h2-i3j4k5l6m7n8',
    //         api_name: 'Change password'
    //       }
    //     ]
    //   }
    // ]
  }),
  components: {
    OverviewAPI,
    SampleAPI,
    SideMenu,
    ApiDocument,
    AppHeader,
    AppFooter
  },
  methods: {
    getApiDetail () {
      this.title = this.apiDetail.title
    },
    showOverview () {
      EventBus.$emit('overview')
      this.overview = true
      this.sample = false
    },
    showSample () {
      EventBus.$emit('sample')
      this.overview = false
      this.sample = true
    },
    onActive (id) {
      this.apiLists.map(apiGroup => {
        apiGroup.api = apiGroup.api.map(api => {
          if (id == api.api_id) {
            api.apiListActive = 'yes'
            api.showEditIcon = true
          } else {
            api.apiListActive = null
            api.showEditIcon = false
          }
          return api
        })
        return apiGroup
      })
    },
    onHover (id) {
      this.apiLists.map(apiGroup => {
        apiGroup.api = apiGroup.api.map(api => {
          if (id == api.api_id) {
            api.showEditIcon = true
          } else {
            api.showEditIcon = false
          }
          return api
        })
        return apiGroup
      })
    },
    onDelete (id) {
      console.log(id)
      this.apiLists.map(apiGroup => {
        apiGroup.api = apiGroup.api.map(api => {
          if (id == api.api_id) {
            api.isActive = false
          } 
          return api
        })
        return apiGroup
      })
    },
    onIcon (id) {
      this.apiLists.filter(apiGroup => {
        if (id == apiGroup.id) {
          apiGroup.expandGroup = !apiGroup.expandGroup
          console.log(apiGroup.expandGroup)
        }
        return apiGroup
      })
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    showMenu () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    resizeMethod () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 3
        case 'sm': return 2
        case 'md': return 2
        case 'lg': return 2
        case 'xl': return 2
      }
    },
    resizeMenu () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 3
        case 'sm': return 3
        case 'md': return 3
        case 'lg': return 3
        case 'xl': return 2
      }
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push({ name: 'login' })
    }
    EventBus.$on('drawer', () => {
      this.drawer = !this.drawer
    })
    this.apiLists.map(apiGroup => {
      apiGroup.expandGroup = false
      apiGroup.isActive = true
      apiGroup.api = apiGroup.api.map(api => {
        api.showEditIcon = false
        api.apiListActive = null
        api.isActive = true
        return api
      })
      return apiGroup
    })
    EventBus.$on('active', (id) => {
      this.onActive(id)
    })
    EventBus.$on('hover', (id) => {
      this.onHover(id)
    })
    EventBus.$on('delete', (id) => {
      this.onDelete(id)
    })
    EventBus.$on('icon', (id) => {
      this.onIcon(id)
    })
  } 
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.04s ease;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

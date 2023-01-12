export const setAppBarHeight = (state, height) => {
  state.appBarHeight = height
}

export const setSideBarDrawer = (state) => {
  state.sideBarDrawer = !state.sideBarDrawer
}

export const showSnackbar = (state, message) => {
  state.snackbar = true
  state.message = message
  setTimeout(() => {
    state.snackbar = false
    state.message = ''
  }, 3000)
}

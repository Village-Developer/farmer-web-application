export const login = (state, response) => {
  state.message = response.message
  if (response.status !== 200) {
    state.alert = true
  } else {
    state.alert = false
  }
}

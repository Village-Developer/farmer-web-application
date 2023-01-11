export const login = (state, response) => {
  state.message = response.data.msg
  if (response.status !== 200) {
    state.alert = true
  } else {
    state.alert = false
  }
}

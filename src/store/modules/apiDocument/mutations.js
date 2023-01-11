export const activeItem = (state, value) => {
  state.apiLists.map(apiGroup => {
    if (value[0] === apiGroup.id) {
      apiGroup.showEditIcon = true
    } else {
      apiGroup.showEditIcon = false
    }
    apiGroup.api = apiGroup.api.map(api => {
      if (value[0] === api.id) {
        api.showEditIcon = true
      } else {
        api.showEditIcon = false
      }
      return api
    })
    return apiGroup
  })
}

export const setApiLists = (state, list) => {
  list.map(apiGroup => {
    apiGroup.showEditIcon = false
    apiGroup.api = apiGroup.api.map(api => {
      api.showEditIcon = false
      return api
    })
    return apiGroup
  })
  state.apiLists = list
}

export const activeItem = (state, value) => {
  state.apiLists.map(group => {
    if (value[0] === group.id) {
      group.showEditIcon = true
    } else {
      group.showEditIcon = false
    }
    if (group.children != null) {
      group.children = group.children.map(apiGroup => {
        if (value[0] === apiGroup.id) {
          apiGroup.showEditIcon = true
        } else {
          apiGroup.showEditIcon = false
        }
        if (apiGroup.children != null) {
          apiGroup.children = apiGroup.children.map(api => {
            if (value[0] === api.id) {
              api.showEditIcon = true
            } else {
              api.showEditIcon = false
            }
            return api
          })
        }
        return apiGroup
      })
    }
    return group
  })
}

export const setApiLists = (state, list) => {
  list.map(group => {
    group.showEditIcon = false
    if (group.children != null) {
      group.children = group.children.map(apiGroup => {
        apiGroup.showEditIcon = false
        if (apiGroup.children != null) {
          apiGroup.children = apiGroup.children.map(api => {
            api.showEditIcon = false
            return api
          })
        }
        return apiGroup
      })
    }
    return group
  })
  state.apiLists = list
}

export const setAllMethod = (state, list) => {
  state.method = list
}

export const switchMode = (state, value) => {
  state.edit = value
}

export const setApiInfo = (state, value) => {
  state.apiInfo = value
}

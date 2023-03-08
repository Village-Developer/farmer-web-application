export const activeItem = (state, value) => {
  localStorage.setItem('active', JSON.stringify(value))
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
          if (apiGroup.type === 'api') {
            state.apiInfo = true
            localStorage.setItem('activeRequest', apiGroup.id)
          } else {
            state.apiInfo = false
            localStorage.setItem('activeRequest', [])
          }
        } else {
          apiGroup.showEditIcon = false
        }
        if (apiGroup.children != null) {
          apiGroup.children = apiGroup.children.map(api => {
            if (value[0] === api.id) {
              api.showEditIcon = true
              state.apiInfo = true
              localStorage.setItem('activeRequest', api.id)
            } else {
              api.showEditIcon = false
              state.apiInfo = false
              localStorage.setItem('activeRequest', [])
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
  const active = JSON.parse(localStorage.getItem('active'))
  list.map(group => {
    active[0] === group.id ? group.showEditIcon = true : group.showEditIcon = false
    if (group.children != null) {
      group.children = group.children.map(apiGroup => {
        active[0] === apiGroup.id ? apiGroup.showEditIcon = true : apiGroup.showEditIcon = false
        if (apiGroup.children != null) {
          apiGroup.children = apiGroup.children.map(api => {
            active[0] === api.id ? api.showEditIcon = true : api.showEditIcon = false
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

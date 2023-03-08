// import axios from '../../../axios'
import Axios from 'axios'

export const getAllApiList = ({ commit }) => {
  Axios.get('http://localhost:9100/api/v1/api_documents', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    commit('setApiLists', response.data.data)
  }).catch((error) => {
    commit('setApiLists', error.response.data)
  })
}

export const renameItem = ({ commit }) => {

}

export const deleteProject = ({ commit }, value) => {
  Axios.delete(`http://localhost:9100/api/v1/api_documents/project/${value}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

export const addNewProject = ({ commit }, value) => {
  Axios.post('http://localhost:9100/api/v1/api_documents/project',
    {
      api_project_name: value
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

export const getAllMethod = ({ commit }) => {
  const method = ['GET', 'POST', 'PUT', 'DELETE']
  commit('setAllMethod', method)
}

export const addNewGroup = ({ commit }, value) => {
  console.log(value)
  Axios.post(`http://localhost:9100/api/v1/api_documents/project/${value.id}/group?parent_id=`,
    {
      api_group_name: value.name
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

export const deleteGroup = ({ commit }, value) => {
  Axios.delete(`http://localhost:9100/api/v1/api_documents/group/${value}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

export const addNewApi = ({ commit }, value) => {
  Axios.post(`http://localhost:9100/api/v1/api_documents/project/${value.api_project_id}/api?parent_id=${value.api_group_id}`,
    {
      api_document_name: value.api_document_name,
      method: value.method,
      path: value.path,
      description: value.description,
      feature: value.feature
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

export const deleteApi = ({ commit }, value) => {
  Axios.delete(`http://localhost:9100/api/v1/api_documents/${value}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  ).then(response => {
    getAllApiList({ commit })
  }).catch(() => {
    // commit('setApiLists', error.response.data)
  })
}

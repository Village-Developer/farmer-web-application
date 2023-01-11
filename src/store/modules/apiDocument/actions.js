// import axios from '../../../axios'

export const getAllApiList = ({ commit }) => {
  const getAll = [
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

  commit('setApiLists', getAll)
}

export const renameItem = ({ commit }) => {

}

export const deleteItem = ({ commit }) => {

}

import { sendGetRequest } from '@/services/api.service'

const GET_TODOS = 'GET_TODOS'

const state = () => {
  return {
    todos: null,
  }
}

const mutations = {
  [GET_TODOS]: (state, todos) => {
    state.todos = todos
  },
}

const actions = {
  getTodos: async ({ commit }) => {
    const data = await sendGetRequest('https://jsonplaceholder.typicode.com/todos')
    commit(GET_TODOS, data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

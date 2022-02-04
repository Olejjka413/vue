import axios from 'axios'

export const state = () => ({
  categories: []
})

export const getters = {
  CATEGORIES: s => s.categories
}

export const mutations = { //сихроны(независимы, происходят быстро)
  setCategories(state, info) {
    state.categories = info
  }
}

export const actions = { //асихроны
  async getCategories({ commit }) {
      axios
        .get('http://demo-api.vsdev.space/api/categories')
        .then(response => commit('setCategories', response.data));
    }
}


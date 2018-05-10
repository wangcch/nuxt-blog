import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      tags: axios.get('/api/aklab/article/tags')
        .then(res => {
          return res.data.data
        })
    },

    mutations: {
      updateTags (state) {
        axios.get('/api/aklab/article/tags')
          .then(res => {
            state.tags = res.data.data
          })
      }
    },

    actions: {
      toUpdateTags: ({ commit }) => commit('updateTags')
    },

    getters: {
      getTags: state => state.tags
    }
  })
}

export default createStore
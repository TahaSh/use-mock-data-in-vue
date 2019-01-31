import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },

  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  },

  actions: {
    fetchPosts ({ commit }) {
      return client
        .fetchPosts()
        .then(posts => commit('setPosts', posts))
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{ name: '蛋糕' }]
  },
  mutations: {
    insert (state, obj) {
      state.items.push(obj)
      // console.log(obj)
      // state.items.push(1)
    }
  },
  actions: {},
  modules: {}
})

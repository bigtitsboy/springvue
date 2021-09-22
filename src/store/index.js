import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    insert (state, obj) {
      if (state.items.length !== 0) {
        const bool = state.items.some((item) => {
          if (obj.foodname === item.foodname) {
            item.num++
            item.sum = (item.num * item.price).toFixed(2)
            return true
          }
        })
        if (!bool) {
          obj.num = 1
          obj.sum = obj.num * obj.price
          state.items.push(obj)
        }
      } else {
        obj.num = 1
        obj.sum = obj.num * obj.price
        state.items.push(obj)
      }
    },
    numless (state, index) {
      state.items[index].num--
      state.items[index].sum = (state.items[index].num * state.items[index].price).toFixed(2)
    },
    numadd (state, index) {
      state.items[index].num++
      state.items[index].sum = (state.items[index].num * state.items[index].price).toFixed(2)
    },
    removeitem (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {},
  modules: {},
  getters: {}
})

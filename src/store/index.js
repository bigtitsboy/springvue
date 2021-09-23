import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    bookitems: []
  },
  mutations: {
    setFoods (state, obj) {
      state.items = obj
    },
    insert (state, obj) {
      if (state.items.length !== 0) {
        const bool = state.items.some((item) => {
          if (obj.foodname === item.foodname) {
            item.num++
            item.sum = (item.num * item.price).toFixed(2)
            localStorage.setItem('foods', JSON.stringify(state.items))
            // localStorage.setItem('foods', JSON.stringify(state.items))
            return true
          }
        })
        if (!bool) {
          obj.num = 1
          obj.sum = obj.num * obj.price
          state.items.push(obj)
          localStorage.setItem('foods', JSON.stringify(state.items))
          // localStorage.setItem('foods', JSON.stringify(state.items))
        }
      } else {
        obj.num = 1
        obj.sum = obj.num * obj.price
        state.items.push(obj)
        localStorage.setItem('foods', JSON.stringify(state.items))
      }
    },
    numless (state, index) {
      state.items[index].num--
      state.items[index].sum = (state.items[index].num * state.items[index].price).toFixed(2)
      state.items.push()
      localStorage.setItem('foods', JSON.stringify(state.items))
    },
    numadd (state, index) {
      state.items[index].num++
      state.items[index].sum = (state.items[index].num * state.items[index].price).toFixed(2)
      state.items.push()
      localStorage.setItem('foods', JSON.stringify(state.items))
    },
    removeitem (state, index) {
      state.items.splice(index, 1)
      localStorage.setItem('foods', JSON.stringify(state.items))
    },
    booinsert (state, obj) {
      if (state.bookitems.length !== 0) {
        const bool = state.bookitems.some((item) => {
          if (obj.bookIsbn === item.bookIsbn) {
            item.num++
            return true
          }
        })
        if (!bool) {
          obj.num = 1
          state.bookitems.push(obj)
        }
      } else {
        obj.num = 1
        state.bookitems.push(obj)
      }
    },
    booknumless (state, index) {
      state.bookitems[index].num--
    },
    booknumadd (state, index) {
      state.bookitems[index].num++
    },
    bookremoveitem (state, index) {
      state.bookitems.splice(index, 1)
    }
  },
  actions: {},
  modules: {},
  getters: {
    showchange (state) {
      return state.items
    }
  }
})

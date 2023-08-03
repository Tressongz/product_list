import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"


export default createStore({
  plugins: [createPersistedState()],
  state: {
    products: [
      {id: 1, product: 'Молоко', value: false},
      {id: 2, product: 'Хлеб', value: false},
      {id: 3, product: 'Кефир', value: false},
      {id: 4, product: 'Конфеты', value: false},
      {id: 5, product: 'Сок', value: false},
      {id: 6, product: 'Печенье', value: false},
      {id: 7, product: 'Какао', value: false},
      {id: 8, product: 'Кофе', value: false},
      {id: 9, product: 'Газировка', value: false},
      {id: 10, product: 'Колбаса', value: false}
    ]
  },
  getters: {
    sortedProducts(state) {
      return state.products
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    checkProduct({state, commit}, product) {
      if (product.value === false) {
        let item = state.products.find(el => el.id === product.id)
        item.value = !item.value
        commit('setProducts', state.products.filter(el => el.id !== product.id))
        commit('setProducts', [...state.products, item])
      } else {
        let item = state.products.find(el => el.id === product.id)
        item.value = !item.value
        commit('setProducts', state.products.filter(el => el.id !== product.id))
        commit('setProducts', [item, ...state.products])
      }
    },
    addProduct({state, commit}, name) {
      if (name !== '') {
        let item = {}
        item.id = state.products.length + 1
        item.product = name
        item.value = false
        commit('setProducts', [item, ...state.products])

      }
    }
  },
  modules: {
  }
})

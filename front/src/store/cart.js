import { defineStore } from 'pinia'
import cartApi from '@/api/cart'

export const useCartStore = defineStore('cart', {
  state: () => ({ list: [] }),
  actions: {
    async fetchList(userId) {
      const res = await cartApi.list(userId)
      this.list = res.data
    }
  }
})
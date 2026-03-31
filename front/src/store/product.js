import { defineStore } from 'pinia'
import productApi from '@/api/product'

export const useProductStore = defineStore('product', {
  state: () => ({ list: [], detail: null }),
  actions: {
    async fetchList(params) {
      const res = await productApi.list(params)
      this.list = res.data
    },
    async fetchMatrix(id) {
      const res = await productApi.matrix(id)
      this.detail = res.data
    }
  }
})
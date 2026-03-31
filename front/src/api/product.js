import request from '@/utils/request'

export default {
  list(params) {
    return request.get('/product/list', { params })
  },
  matrix(id) {
    return request.get(`/product/matrix/${id}`)
  }
}
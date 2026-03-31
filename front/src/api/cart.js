import request from '@/utils/request'

export default {
  add(data) {
    return request.post('/cart/add', data)
  },
  list(userId) {
    return request.get('/cart/list', { params: { userId } })
  },
  remove(id) {
    return request.delete(`/cart/remove/${id}`)
  }
}
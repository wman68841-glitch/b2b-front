import request from '@/utils/request'

export default {
  submit(data) {
    return request.post('/rfq/submit', data)
  },
  list(userId) {
    return request.get('/rfq/list', { params: { userId } })
  }
}
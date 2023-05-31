import Api from './Api'
const END_POINT = 'tasks'
export default {
  show (id) {
    return Api.get(`${END_POINT}/${id}`)
  }
}

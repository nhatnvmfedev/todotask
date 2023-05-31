import Api from './Api'
const END_POINT = 'tasks'
export default {
  delete (id) {
    return Api.delete(`${END_POINT}/${id}`)
  }
}

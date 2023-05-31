import Api from './Api'
const END_POINT = 'tasks'
export default {
  add (params) {
    return Api.post(END_POINT, {
      ...params
    })
  }
}

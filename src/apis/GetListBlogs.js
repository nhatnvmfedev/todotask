import Api from './Api'
const END_POINT = 'tasks'
export default {
  all (params) {
    return Api.get(END_POINT, {
      params: {
        ...params
      }
    })
  }
}

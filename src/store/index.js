import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import GetListBlogs from '../apis/GetListBlogs'
import AddBlog from '../apis/AddBlog'
import EditBlog from '../apis/EditBlog'
import DeleteBlog from '../apis/DeleteBlog'
import GetDetailBlog from '../apis/GetDetailBlog'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    dataAddBlog: {},
    dataIsOpenEditBlog: false,
    getListBlogs: {},
    currentPage: 1,
    totalItems: null,
    refCount: 0,
    isLoading: false,
    dataShowNoticeAlert: '',
    sttSuccess: false,
    message: {
      type: '',
      content: {
      }
    }
  },
  getters: {
  },
  actions: {
    // GET DETAIL BLOGS
    async getDetailBlog ({state, commit}, payload) {
      const response = await GetDetailBlog.show(payload)
      if (response.status !== 200) {
      } else {
        await commit('getDetailBlogsSuccess', response.data)
      }
    },
    // GET LIST BLOGS
    async getListBlogs ({state, commit}, payload) {
      const response = await GetListBlogs.all({
        order: 'desc',
        sortBy: 'createdAt'
      })
      if (response.status !== 200) {
      } else {
        state.currentPage = payload.page
        await commit('getListBlogsSuccess', response.data)
      }
    },
    // delete blog
    async deleteBlog ({state, commit}, payload) {
      const response = await DeleteBlog.delete(payload.id)
      await this.dispatch('getListBlogs', {page: 1, order: 'asc', sortBy: 'createdAt'})
      if (response.status === 200) {
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Delete task success',
          type: 'teal',
          duration: 3000,
          speed: 1000
        })
      } else {
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Can not delete task success',
          type: 'danger',
          duration: 3000,
          speed: 1000
        })
      }
    },
    // GET TOTAL BLOGS
    async addBlog ({state, commit}, payload) {
      const response = await AddBlog.add({
        name: payload.name,
        content: payload.content,
        createdAt: payload.createdAt
      })
      if (response.status === 201) {
        await this.dispatch('getListBlogs', {page: 1, order: 'asc', sortBy: 'createdAt'})
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Add new task success',
          type: 'success',
          duration: 3000,
          speed: 1000
        })
      } else {
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Can not add new task success',
          type: 'danger',
          duration: 3000,
          speed: 1000
        })
      }
    },
    async addAlert ({ state, commit }, payload) {
      state.message.type = 'error'
      state.message.content = payload
    },
    // GET DETAIL BLOGS
    async editBlog ({state, commit}, payload) {
      const response = await EditBlog.edit(payload.id, {
        name: payload.data.name,
        stt: payload.data.stt
      })
      if (response.status !== 200) {
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Can not edit task success',
          type: 'danger',
          duration: 3000,
          speed: 1000
        })
      } else {
        commit('isOpenEditBlog', false)
        await this.dispatch('getListBlogs', {page: 1, order: 'asc', sortBy: 'createdAt'})
        Vue.notify({
          group: 'foo',
          title: 'Important message',
          text: 'Edit task success',
          type: 'success',
          duration: 3000,
          speed: 1000
        })
      }
    }
  },
  mutations: {
    getListBlogsSuccess (state, val) {
      state.getListBlogs = val
    },
    getOrderListBlogsSuccess (state, val) {
      state.dataGetOrderListBlogsSuccess = val
    },
    getAddBlogSuccess (state, val) {
      state.dataAddBlog = val
    },
    checkAddBlogSuccess (state, val) {
      state.sttSuccess = val
    },
    showNoticeAlert (state, val) {
      state.dataShowNoticeAlert = val
    },
    isOpenEditBlog (state, val) {
      state.dataIsOpenEditBlog = val
    },
    getDetailBlogsSuccess (state, val) {
      state.dataDetailBlogsSuccess = val
    },
    setLoadingSuccess (state, val) {
      if (val) {
        state.refCount++
        state.isLoading = true
      } else if (state.refCount > 0) {
        state.refCount--
        state.isLoading = (state.refCount > 0)
      }
    }
  }
})

import { mapState } from 'vuex'

export default {
  name: 'EditBlog',
  data () {
    return {
      getDataEditBlog: {}
    }
  },
  computed: {
    ...mapState({
      dataShowNoticeAlert: state => state.dataShowNoticeAlert,
      dataEditBlog: state => state.dataDetailBlogsSuccess,
      sttSuccess: state => state.sttSuccess
    })
  },
  methods: {
    async submitForm (id) {
      // console.log(this.title, this.content, this.createdAt)
      await this.$store.dispatch('editBlog', {id: id, data: this.dataEditBlog})
    },
    async closeEditBlog () {
      await this.$store.commit('isOpenEditBlog', false)
      await this.$store.commit('checkAddBlogSuccess', false)
    }
  }
}

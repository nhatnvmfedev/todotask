export default {
  name: 'ItemBlog',
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    data: {
      id: Number,
      img: String,
      title: String,
      stt: Boolean,
      createdAt: String
    }
  },
  computed: {
  },
  methods: {
    async editBlog (id) {
      await this.$store.dispatch('getDetailBlog', id)
      await this.$store.commit('isOpenEditBlog', true)
    },
    async deleteBlog (id) {
      console.log(id)
      await this.$store.dispatch('deleteBlog', {id: id})
    },
    formatCreateAt (val) {
      if (val) {
        return new Date(val).toISOString().slice(0, 10)
      }
    }
  }
}

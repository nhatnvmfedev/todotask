import { mapState } from 'vuex'
import ItemBlog from '@/components/ItemBlog/ItemBlog'
import AddBlog from '@/components/AddBlog/AddBlog'

export default {
  name: 'HomePage',
  components: {
    ItemBlog,
    AddBlog
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState({
      getListBlogs: state => state.getListBlogs,
      currentPage: state => state.currentPage
    })
  },
  created () {
    this.$store.dispatch('getListBlogs', {page: 1})
  }
}

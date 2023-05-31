<template>
  <div id="app">
    <notifications group="foo" position="top right" />
    <div v-if="isLoading" class="over">
      <div
        class="loading"
      >
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
    <div class="container pt-2">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
    <template v-if="isOpenEditBlog">
      <EditBlog />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomePage from './pages/HomePage/HomePage'
import AddBlog from './components/AddBlog/AddBlog'
import EditBlog from '@/components/EditBlog/EditBlog'
export default {
  name: 'App',
  components: {
    HomePage,
    AddBlog,
    EditBlog
  },
  data () {
    return {
      isOpenAddBlog: false
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      isOpenEditBlog: state => state.dataIsOpenEditBlog
    })
  },
  methods: {
    openAddBlog () {
      this.isOpenAddBlog = true
    },
    hanldeCloseAddBlog () {
      this.isOpenAddBlog = false
    }
  },
  watch: {
    isOpenAddBlog (newVal, oldVal) {
      if (newVal === false) {
        this.$store.commit('showNoticeAlert', null)
      }
    },
    isOpenEditBlog (newVal, oldVal) {
      if (newVal === false) {
        this.$store.commit('showNoticeAlert', null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #352f5b;
    z-index: 99;
  }
  .loading {
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    margin: -14px 0 0 -42px;
    padding: 10px;
    background: rgba(20, 20, 20, 0.9);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
    -moz-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
    -ms-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
    -o-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
}

.loading-dot {
    float: left;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: white;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-box-shadow: 0 0 2px black;
    -moz-box-shadow: 0 0 2px black;
    -ms-box-shadow: 0 0 2px black;
    -o-box-shadow: 0 0 2px black;
    box-shadow: 0 0 2px black;
    -webkit-animation: loadingFade 1s infinite;
    -moz-animation: loadingFade 1s infinite;
    animation: loadingFade 1s infinite;
}

.loading-dot:nth-child(1) {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-delay: 0s;
}

.loading-dot:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    animation-delay: 0.1s;
}

.loading-dot:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

.loading-dot:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

@-webkit-keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}

@-moz-keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}

@keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}

  #app {
    background-color: #352f5b;
    height: 100%;
    min-height: 100vh;
    padding: 30px 0;
  }
</style>

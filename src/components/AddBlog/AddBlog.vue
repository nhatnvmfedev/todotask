<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="add-blog_modal row col-md-5">
    <div class="px-0">
      <b class="text-danger text-center d-block">{{ dataShowNoticeAlert }}</b>
      <form @submit.prevent="submitForm" class="form-addtask">
        <div class="mb-3">
          <label for="inputTitle" class="form-label text-white"
            >Add new task</label
          >
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            v-model="dataAddBlog.name"
            required
          />
        </div>
        <button class="btn-addtask" type="submit">
          <i class="bi bi-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

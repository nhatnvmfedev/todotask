<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="add-blog_modal">
    <img
      src="@/assets/images/close.png"
      alt="close"
      class="add-blog_modal_close"
      @click="closeEditBlog"
    />
    <div class="container">
      <h4 class="text-center">EDIT TASK</h4>
      <b class="text-danger text-center d-block">{{ dataShowNoticeAlert }}</b>
      <form @submit.prevent="submitForm(dataEditBlog.id)">
        <div class="mb-3">
          <label for="inputTitle" class="form-label">Task</label>
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            v-model="dataEditBlog.name"
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="dataEditBlog.stt"
            id="flexCheckChecked"
          />
          <label for="flexCheckChecked" class="form-label">Done</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

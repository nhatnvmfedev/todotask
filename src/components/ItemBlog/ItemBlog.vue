<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <li class="media pt-2">
    <span class="edit-blog">
      <template v-if="data.stt === true">
        <span class="media-stt bg-success">
          Done
        </span>
      </template>
      <template v-else>
        <span class="media-stt bg-danger">
          In Progress
        </span>
      </template>
      <i @click="editBlog(data.id)" class="bi bi-pencil-square"></i>
      <i @click="deleteBlog(data.id)" class="bi bi-trash3"></i>
    </span>
    <div class="d-flex align-item-start">
      <div class="media-body text-left">
        <h6 class="mt-0 mb-0">{{ data.title }}</h6>
      </div>
    </div>
    <p class="media-time"><i class="bi bi-calendar-check"></i>
    {{ formatCreateAt(data.createdAt) }}</p>
  </li>
</template>

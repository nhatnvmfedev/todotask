<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div>
    <AddBlog />
    <ul class="list-unstyled row col-md-5">
      <ItemBlog
        v-for="(item, index) in this.getListBlogs"
        v-bind:key="index"
        v-bind:data="{
          id: item.id,
          title: item.name,
          stt: item.stt,
          createdAt: item.createdAt
        }"
      />
    </ul>
  </div>
</template>

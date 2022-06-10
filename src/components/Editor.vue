<template>
  <div class="vue-editor">
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "Editor",
  components: {
    VueEditor
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>"
    }
  },
}
</script>

<style lang="scss">
.vue-editor{
  height: 100%;
}
.quillWrapper{
  margin-right: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.quillWrapper .ql-snow.ql-toolbar{
  background: #F3F5F9;
  border: none;
}
.ql-snow .ql-toolbar button svg, .quillWrapper .ql-snow.ql-toolbar button svg{
  width: 15px !important;
  height: 15px !important;
}
.ql-toolbar.ql-snow+.ql-container.ql-snow{
  border:none;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgba(0,0,0,.05);
  //height: calc(100vh - 150px);
  height: 100%;
  background: #fff;
}
</style>

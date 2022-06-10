<template>
  <div class="editor-form">
    <Editor />
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form'
import Editor from "../components/Editor"
export default {
  name: "EditorForm",
  components:{
    Form,
    Editor
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.editor-form{
  display: flex;
  flex-direction: row;
  margin: 30px;
  border-radius: 5px;
  overflow: hidden;
  height:calc(100vh - 60px);
  &>div{
    &:first-child{
      width: 40%;
    }
    &:nth-child(2){
      width: 60%;
      min-width: 750px;
      height: 100%;
      overflow: auto;
      @include scrollbar(rgba(0,0,0,.05))
    }
  }
}
</style>

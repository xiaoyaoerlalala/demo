// ckeditor示例:http://localhost:8080/#/ckeditor
<template>
    <textarea namen="content" id="editor">
      <p>这里的内容会被初始化到编辑器中</p>
    </textarea>
</template>

<script>
import ClassicEditor from "../../public/ckeditor5-build-classic/ckeditor";
export default {
    created() {
    var myEditor = null;
    window.onload = function() {
      ClassicEditor.create(document.querySelector("#editor"))
        .then(editor => {
          myEditor = editor;
        })
        .catch(error => {
          console.error(error);
        });
    };
  }
}
</script>
<style lang="less" scoped>

</style>


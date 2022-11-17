<template>
    <VueTrix v-model="editorContent" placeholder="Enter content" class="w-full text-sm text-vgray" />
</template>

<script>
    import VueTrix from "vue-trix";

    export default {
        data() {
    return {
      editorContent: "<h1>Editor contents</h1>"
    };
  },
  components: {
    VueTrix
  }
};
</script>
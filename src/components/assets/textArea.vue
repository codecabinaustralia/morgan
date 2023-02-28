<template>
    <div class="w-full flex flex-wrap relative">
        <div class="w-full bg-gray-50 border-b px-6 border-gray-200 h-16 flex items-center relative">

            <div class="absolute top-0 right-0 m-5" @click="close()">
                <svg class="w-6 h-6 text-vgray hover:text-vgreen cursor-pointer" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>

            <h2 class="text-vgray text-lg">Add {{asset.title}}</h2>
        </div>
        <div class="w-full flex relative mb-2 p-6">
        
        <Editor
      api-key="py4bz8s1cgbkq688ajxywxypfewcn4gzgr21dhj0u3sa23vx"
      v-model="value.text"
      :init="{
        menubar: false,
        width: '100%',
        plugins: 'link',
        default_link_target: '_blank',
        selector: 'textarea',
        convert_urls: false,
        relative_urls: false,
remove_script_host: false,
       toolbar: 'p | h1 h2 h3 h4 | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | checklist numlist bullist indent outdent',
      }"
    />

    <!-- <VueTrix v-model="value.text" placeholder="Enter content" class="w-full h-56 text-sm text-vgray" /> -->


            </div>

            <div class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
                <span @click="saveItem()" class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Save Widget</span>
            </div>
    </div>
</template>

<script>
    import { bus } from '../../main'
    import VueTrix from "vue-trix";
    import Editor from '@tinymce/tinymce-vue'

    export default {
        props:["asset"],
        data(){
            return {
                value: {
                    text: ""
                }
            }
        },

    methods: {
        saveItem(){
            bus.$emit('saveWidget', this.value); 
            bus.$emit('toggleAsset', null);
        },
            close(){
                bus.$emit('toggleAsset', null);
            }
        },
        components:{
            VueTrix,
            Editor
        },
        created(){
        if(this.asset.value) this.value = this.asset.value
    }
    }
    
</script>

<style lang="postcss">
trix-editor {
    height: 150px !important;
    max-height: 150px !important;
      overflow-y: auto !important;
}
</style>

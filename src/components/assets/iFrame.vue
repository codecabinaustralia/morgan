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
        <div class="w-full flex  mb-2 p-6">
            <div class="w-full relative">
                <input v-model="value.text" type="text" placeholder="http://" class="input outline-none focus:text-vgreen focus:border-vgreen">
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">iframe url</div>
            </div>
        </div>


            <div class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
                <span @click="saveItem()" class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Save Widget</span>
            </div>
    </div>
</template>

<script>
    import { bus } from '../../main'
    export default {
        props:["asset"],
        data(){
        return{
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
        },created(){
        if(this.asset.value) this.value = this.asset.value
    }
    }
</script>
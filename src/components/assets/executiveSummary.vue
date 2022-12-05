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

            <h2 class="text-vgray text-lg">Add {{ asset.title }}</h2>
        </div>

        <div class="w-full px-6 mt-6">
                <label class="text-sm text-gray-500">Title</label>
                <input type="text" v-model="value.title" class="input w-full outline-none focus:text-vgreen focus:border-vgreen">
            </div>

        <div class="w-full flex relative p-6 space-x-4" v-for="(i, index) in value.items" :key="index">
            <div class="flex-grow h-14 flex items-center">
                <div class="w-full">
                <label class="text-sm text-gray-500">Label</label>
                <input type="text" v-model="value.items[index].label" class="input w-full outline-none focus:text-vgreen focus:border-vgreen">
            </div>
            </div>
            <div class="flex-grow h-14 flex items-center">
                <div class="w-full">
                <label class="text-sm text-gray-500">Value</label>
                <input type="text" v-model="value.items[index].value" class="input w-full outline-none focus:text-vgreen focus:border-vgreen">
            </div>
            </div>
            <div class="w-20 flex space-x-1 h-14 items-center pt-6">
                <div v-if="index == value.items.length - 1 " @click="removeitem(index)" class="w-8 h-8 hover:bg-vgray cursor-pointer bg-vgreen text-white rounded flex items-center justify-center">
                    -
                </div>
                <div @click="addItem()" class="w-8 h-8 hover:bg-vgray cursor-pointer bg-vgreen text-white rounded flex items-center justify-center">
                    +
                </div>
            </div>
        </div>


        <div class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
            <span @click="saveItem()"
                class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                Save Widget</span>
        </div>
    </div>
</template>

<script>
import { bus } from '../../main'

export default {
    props: ["asset"],
    data() {
        return {
            value: {
                title: "",
                items: [{
                    label: "",
                    value: ""
                }]
            }
        }
    },
    methods: {
        addItem(){
            this.value.items.push({
                    label: "",
                    value: ""
                })
        },
        removeitem(index){
            this.value.items.splice(index, 1)
        },
        saveItem() {
            bus.$emit('saveWidget', this.value);
            bus.$emit('toggleAsset', null);
        },
        close() {
            bus.$emit('toggleAsset', null);
        }
    },
    created(){
        if(this.asset.value) this.value = this.asset.value
    }
}
</script>
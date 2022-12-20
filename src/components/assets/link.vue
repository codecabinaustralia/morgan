<template>
    <div class="w-full flex flex-wrap relative h-96 overflow-y-auto">
        <div class="w-full  bg-gray-50 border-b px-6 border-gray-200 h-16 flex items-center relative">

            <div class="absolute top-0 right-0 m-5" @click="close()">
                <svg class="w-6 h-6 text-vgray hover:text-vgreen cursor-pointer" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>

            <h2 class="text-vgray text-lg">Add {{ asset.title }}</h2>
        </div>
        
        <div class="w-full flex space-x-4 flex-wrap relative mb-2 p-6 bg-gray-100 rounded-lg"
            v-for="(v, index) in value" :key="index">
            <div class="flex-grow">
                <div class="w-full relative mb-4">
                    <input v-model="v.title" type="text"
                        class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Title</div>
                </div>
                <div class="w-full relative mb-4">
                    <input v-model="v.text" type="text"
                        class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Text</div>
                </div>
                <div class="w-full relative mb-4">
                    <input v-model="v.link" type="text"
                        class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Link</div>
                </div>
            </div>
            <div class="flex-shrink">
                <!-- <div class=" relative mb-4 text-center">
                    <qr-code :text="v.link" :size="100"></qr-code>
                </div> -->
                <div v-if="index == value.length - 1" @click="addLink()" class="w-full bg-vgreen h-12 text-white rounded flex items-center justify-center cursor-pointer">Add
                    Link</div>

                    <div v-if="(index > 0)" @click="removeLink(index)" class="text-sm text-red-600 cursor-pointer text-center mt-2 hover:text-red-700">Remove</div>
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
            obj: {
                title: "",
                text: "",
                link: "https://www.google.com"
            },
            value: [

            ]
        }
    },
    methods: {
        addLink() {
            let obj = JSON.stringify(this.obj)
            obj= JSON.parse(obj)
            this.value.push(obj)
        },
        removeLink(index) {
            this.value.splice(index, 1)
        },
        saveItem() {
            bus.$emit('saveWidget', this.value);
            bus.$emit('toggleAsset', null);
        },
        close() {
            bus.$emit('toggleAsset', null);
        }
    },
    created() {
        if (this.value.length == 0) this.value.push(this.obj)
        if (this.asset.value) {
            this.value = this.asset.value
        }
    }
}
</script>
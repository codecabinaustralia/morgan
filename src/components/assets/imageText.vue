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
        <div class="w-full flex flex-wrap relative justify-center px-6 pt-6 pb-2">
            <div class="w-full flex justify-center">
                <img v-if="!imageLoading && !value.image"
                    src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    alt="placeholder" class="w-40 h20 rounded shadow">
                <preloader v-if="imageLoading" />
                <img v-if="!imageLoading && value.image" class="inline-block h-20 w-20 rounded object-cover"
                    :src="value.image" alt="">
            </div>
            <div class="w-full flex justify-center">
                <label for="image">
                    <div
                        class="h-12 w-32 flex items-center justify-center hover:text-white mt-2 rounded bg-gray-200 text-sm text-vgray cursor-pointer hover:bg-vgreen ">
                        Upload</div>
                    <input @change="previewImage" id="image" name="image" class="hidden" type="file">
                </label>
            </div>

        </div>

       

        <div class="w-full relative mb-2 px-6">
            <h2 class="text-sm text-vgray mb-4">Write your text here</h2>
            <VueTrix v-model="value.text" placeholder="Enter content" class="w-full h-56 text-sm text-vgray" />
        </div>

        <div class="w-full relative mt-2 flex justify-start space-x-10 p-6">
                <div class="flex-shrink h-12 flex items-center">
                    <span class="text-vgray text-sm">
                        Position
                    </span>
                </div>
                <select v-model="value.position" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <option value="">Image left - Text right</option>
                    <option value="">Text right - Image left</option>
                </select>
            </div>



        <div @click="saveItem()" class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
            <span
                class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                Save Widget</span>
        </div>
    </div>
</template>

<script>
import { bus } from '../../main'
import Preloader from "@/components/loader"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase.js";
import VueTrix from "vue-trix";

export default {
    props: ["asset"],
    data() {
        return {
            imageLoading: false,
            imageData: null,
            uploadValue: -1,
            value: {
                image: "",
                text: "",
                position: ""
            }
        }
    },
    methods: {
        previewImage(event) {
            this.imageLoading = true
            console.log("event", event.target.files[0])
            this.uploadValue = 0;
            this.value.image = null;
            this.imageData = event.target.files[0];
            this.onUpload()
        },
        onUpload() {
            this.value.image = null;

            const storage = getStorage();
            const storageRef = ref(storage, `${this.imageData.name}`);

            const uploadTask = uploadBytesResumable(storageRef, this.imageData)

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    this.imageLoading = false
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        this.value.image = downloadURL
                        this.imageLoading = false
                    });
                }
            );

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
        if (this.asset.value) this.value = this.asset.value
    },
    components: {
        Preloader,
        VueTrix
    }
}
</script>
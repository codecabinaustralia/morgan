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
        <div class="w-full my-2 mt-6 px-6 relative">
            <select v-model="value.width" class="input outline-none focus:text-vgreen focus:border-vgreen">
                <option>25%</option>
                <option>50%</option>
                <option>75%</option>
                <option>90%</option>
                <option>100%</option>
            </select>

            <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Width</div>
        </div>
        <div class="w-full my-2 px-6 relative ">
            <select v-model="value.display" class="input outline-none focus:text-vgreen focus:border-vgreen">
                <option>Inline</option>
            </select>
            
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Display Inline or List</div>
        </div>
        <div class="w-full flex flex-wrap relative mb-2 space-x-2 space-y-2 p-6">
                <div class="w-40" v-for="(v, index) in value.images" :key="index">
                    <img v-if="v" class="inline-block w-40 h-40 rounded shadow object-cover"
                        :src="v"
                        alt="">
                        <div @click="removeImage(index)" class="cursor-pointer w-full text-center text-red-600 text-sm mt-2">Remove</div>
                    </div>

                <div class="w-40 flex flex-wrap">
                    <img v-if="!imageLoading && !value.image" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder" class="w-40 h-40 object-cover rounded shadow">
                    <preloader v-if="imageLoading" class="mx-auto" />
                   

                    <div class="w-full">
                        <label for="image">
                    <div class="h-12 w-full flex items-center justify-center hover:text-white mt-2 rounded bg-gray-200 text-sm text-vgray cursor-pointer hover:bg-vgreen ">Upload</div>
                    <input @change="previewImage" id="image" name="image" class="hidden" type="file">
                </label>
                    </div>
                </div>

                
            </div>
            
            <div @click="saveItem()" class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
                <span class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Save Widget</span>
            </div>
    </div>
</template>

<script>
    import { bus } from '../../main'
    import Preloader from "@/components/loader"

    import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    import { db, storage } from "../../firebase.js";

    export default {
        props:["asset"],
        data(){
        return{
            imageLoading: false,
            imageData: null,
            uploadValue: -1,
            value: {
                images: [],
                width: "",
                display: ""
            }
        }
    },
    methods: {
        removeImage(index){
            this.value.images.splice(index, 1)
        },
        previewImage(event) {
            this.imageLoading = true
            this.uploadValue = 0;
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
                        this.value.images.push(downloadURL)
                        this.imageLoading = false
                    });
                }
            );

        },
        saveItem(){
            bus.$emit('saveWidget', this.value); 
            bus.$emit('toggleAsset', null);
        },
            close(){
                bus.$emit('toggleAsset', null);
            }
        },
        created(){
        if(this.asset.value) this.value = this.asset.value
    },
    components:{
        Preloader
    }
    }
</script>
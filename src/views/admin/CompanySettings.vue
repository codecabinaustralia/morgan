<template>
    <div class="w-full flex">
        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="container mx-auto p-10 flex h-screen overflow-y-scroll -mt-20 pt-24 z-10 relative">
                <div class="w-3/4 pr-2">
                    <div class="bg-white rounded-lg p-4">
                        <div class="flex-shrink">
                            <h2 :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="header-semiBold text-sm text-vgreen">Whitelable Settings</h2>
                            <div class="w-full flex h-full">

                                <div v-if="item" class="flex-1 xl:overflow-y-auto">
                                    <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                                        <h1 class="text-3xl font-bold tracking-tight text-blue-gray-900">Branding</h1>

                                        <form class="divide-y-blue-gray-200 mt-2 space-y-8 divide-y">
                                            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                                <div class="sm:col-span-6 mb-6">
                                                    <p class=" text-xs text-vgray">These settings will change the look
                                                        and feel of your platform</p>
                                                </div>

                                                <div class="sm:col-span-12">
                                                    <div class="w-full flex relative">
                                                        <input type="text" v-model="item.companyName"
                                                            class="input outline-none focus:text-vgreen focus:border-vgreen">
                                                        <div :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''"
                                                            class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                                                            Company Name</div>
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <div class="w-full flex relative">
                                                        <input type="text" v-model="item.primaryColor"
                                                            class="input outline-none focus:text-vgreen focus:border-vgreen"
                                                            placeholder="#1252A">
                                                        <div :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''"
                                                            class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                                                            Primary Color</div>
                                                    </div>
                                                </div>

                                                <!-- <div class="sm:col-span-3">
                                                    <div class="w-full flex relative">
                <input type="text" v-model="item.secondaryColor" class="input outline-none focus:text-vgreen focus:border-vgreen" placeholder="#A8728">
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">Secondary Color</div>
            </div>
                                                </div>
                                                 -->


                                                <div class="sm:col-span-12">
                                                    <label for="photo"
                                                        class="block text-sm font-medium text-blue-gray-900">Logo</label>
                                                    <div class="mt-1 flex items-center">
                                                        <preloader v-if="imageLoading" />
                                                        <img v-if="!imageLoading && img1"
                                                            class="inline-block h-20 w-20 rounded object-cover"
                                                            :src="img1" alt="">
                                                        <div class="ml-4 flex">
                                                            <div :style="currentTenant.primaryColor ? `border-color:${currentTenant.primaryColor}`: ''"
                                                                class="relative flex cursor-pointer items-center rounded-md border border-vgreen bg-white py-2 px-3 shadow-sm">
                                                                <label for="user-photo"
                                                                    class="pointer-events-none relative text-sm font-medium text-blue-gray-900">
                                                                    <span :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="text-vgreen">Change</span>
                                                                    <span class="sr-only"> user photo</span>
                                                                </label>
                                                                <input @change="previewImage" id="user-photo"
                                                                    name="user-photo" type="file"
                                                                    class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0">
                                                            </div>
                                                            <!-- <button type="button"
                                                                class="text-red-600 cursor-pointer hover:text-red-700 ml-2 text-sm">Remove</button> -->
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="w-1/4 pl-2">
                    <div class="bg-white rounded-lg p-4">
                        <div @click="saveitem()" :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}`: ''"
                            class="bg-vgreen rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Brand settings</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from "@/components/navs/adminSidebar"
import AdminPrimary from "@/components/navs/adminPrimary"
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firebase.js";
import Preloader from "@/components/loader"

export default {
    data() {
        return {
            imageLoading: false,
            img1: null,
            imageData: null,
            uploadValue: -1,
            item: null,
            error: ""
        }
    },
    computed: {
        currentTenant() {
            return this.$store.state.currentTenant
        }
    },
    methods: {
        previewImage(event) {
            this.imageLoading = true
            console.log("event", event.target.files[0])
            this.uploadValue = 0;
            this.img1 = null;
            this.imageData = event.target.files[0];
            this.onUpload()
        },

        onUpload() {
            this.img1 = null;

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
                        this.img1 = downloadURL
                        this.imageLoading = false
                    });
                }
            );

        },
        async getItem() {
            this.item = null
            const docRef = doc(db, "tenants", this.currentTenant.tenantId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let obj = docSnap.data()
                this.$set(obj, "id", docSnap.id)
                if (obj.logo) this.img1 = obj.logo
                this.item = obj
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        },
        async saveitem() {
            let payload = this.item
            this.$set(payload, "tenantId", this.currentTenant.tenantId)
            if (this.img1) this.$set(payload, "logo", this.img1)
            await setDoc(doc(db, "tenants", this.currentTenant.tenantId), payload);
            this.$store.commit("updateState", { state: "currentTenant", body: payload })
            // this.$router.push({ name: "Users" })
        }
    },
    created() {
        this.getItem()
    },
    components: {
        AdminSidebar,
        AdminPrimary,
        Preloader
    }
}
</script>
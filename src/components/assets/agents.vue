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
        <div class="w-full flex flex-wrap relative mb-2 p-6">
            <h2 class="text-xs text-vgreen mb-2">Select an agent</h2>
            <select v-model="value.form" class="input outline-none focus:text-vgreen focus:border-vgreen">
                <option v-for="(f, index) in forms" :key="index" :value="f">{{ f.firstName }} {{ f.lastName }}</option>
            </select>
        </div>
        
        <div class="w-full relative mb-2 mx-6">
                <input v-model="value.link" type="text" class="input outline-none focus:text-vgreen focus:border-vgreen">
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-2 px-2">
                    Link</div>
            </div>

            <div class="w-full relative mb-2 mx-6">
                <textarea v-model="value.text" type="text" rows="10" class=" p-6 input h-40 outline-none focus:text-vgreen focus:border-vgreen"></textarea>
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-2 px-2">
                     Text</div>
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
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export default {
    props: ["asset"],
    data() {
        return {
            loading: false,
            forms: [],
            value: {
                form: "",
                link: "",
                text: ""
            }
        }
    },
    computed:{
        currentTenant(){
            return this.$store.state.currentTenant
        }
    },
    methods: {
        async getData() {
            // reset items and set loader
            this.items = []
            this.loading = true
            // get data
            const q = query(collection(db, "agents"), where("tenantId", "==", this.currentTenant.tenantId));
            const querySnapshot = await getDocs(q);
            console.log("querySnapshot", querySnapshot.length)
            querySnapshot.forEach((doc) => {
                // Create data obj
                let obj = doc.data()
                this.$set(obj, "id", doc.id)
                // push items to array
                this.forms.push(obj)
            });
            // finish loading
            this.loading = false
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
        this.getData()
        if(this.asset.value) this.value = this.asset.value
    }
}
</script>
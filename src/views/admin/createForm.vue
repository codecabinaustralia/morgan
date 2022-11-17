<template>
    <div class="w-full flex">
        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="container mx-auto p-10 flex">
                <div class="w-3/4 pr-2">
                    <div class="bg-white rounded-lg p-4">
                        <div class="flex-shrink">
                            <h2 class="header-semiBold text-vgrayDark">Form Builder</h2>

                            <div class="w-full my-2 px-4">
                                <input type="text" v-model="title" class="input w-full"
                                            placeholder="Form title">
                            </div>
                            <div class="w-full flex flex-wrap h-full">
                                <div v-for="(i, index) in items" :key="index"
                                    class="w-full h-20 rounded-lg shadow mb-2 p-4 flex items-center space-x-2">
                                    <div class="flex-shrink">
                                        <select v-model="i.type" class="input w-40">
                                            <option value="singleText">Single Text</option>
                                            <option value="textArea">Text Area</option>
                                        </select>
                                    </div>

                                    <div class="flex-shrink">
                                        <input type="text" v-model="i.label" class="input w-40" placeholder="Label">
                                    </div>

                                    <div class="flex-shrink">
                                        <input type="text" v-model="i.placeholder" class="input w-40"
                                            placeholder="Placeholder">
                                    </div>

                                    <div class="flex-grow flex justify-end h-full items-center">
                                        <span class="text-vgray text-xs mr-4">Required</span>
                                        <button @click="i.required = !i.required"
                                            :class="i.required ? 'bg-vgreen' : 'bg-gray-200'" type="button"
                                            class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-vgreen focus:ring-offset-2"
                                            role="switch" aria-checked="false">
                                            <span :class="i.required ? 'translate-x-5' : 'translate-x-0'"
                                                aria-hidden="true"
                                                class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                        </button>
                                    </div>

                                    <div @click="removeGroup(index)"
                                        class="flex-shrink flex justify-end h-full items-center">
                                        <svg class="w-4 ml-2 h-4 text-red-600 cursor-pointer" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div class="w-full mx-auto flex justify-center mt-4">
                        <div @click="addGroup()"
                            class="flex-shrink w-14 h-14 cursor-pointer hover:bg-opacity-90 flex bg-vgreen text-white items-center justify-center rounded-full">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="w-1/4 pl-2">
                    <div class="bg-white rounded-lg p-4">
                        <div @click="saveGroup()"
                            class="bg-vgreen rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Form</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from "@/components/navs/adminSidebar"
import AdminPrimary from "@/components/navs/adminPrimary"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

export default {
    data() {
        return {
            title: "",
            items: []
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
        currentTenant() {
            return this.$store.state.currentTenant
        }
    },
    methods: {
        addGroup() {
            this.items.push({
                type: "singleText",
                label: "",
                placeholder: "",
                required: true,
            })
        },
        removeGroup(index) {
            this.items.splice(index, 1)
        },
        async saveGroup() {
            let payload = {title: this.title, fields:this.items, creator: this.currentUser.email, createdAt: new Date()}
            this.$set(payload, "tenantId", this.currentTenant.tenantId)
            console.log("payload", payload)

            const docRef = await addDoc(collection(db, "forms"), payload)
            this.$router.push({ name: "Forms" })
        }
    },
    created() {
        this.items.push({
                type: "singleText",
                label: "",
                placeholder: "",
                required: true,
            })
    },
    components: {
        AdminSidebar,
        AdminPrimary
    }
}
</script>
<template>
    <div class="w-full flex">
        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="w-full my-40 items-center justify-center flex" v-if="loading">
                <div class="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <preloader class="mx-auto" />
                </div>
            </div>

            <div v-if="!loading" class="container mx-auto p-10">
                <div class="w-full bg-white rounded-lg p-4">
                    <div class="flex w-full">
                        <div class="flex-shrink">
                            <h2 class="header-semiBold text-vgrayDark">Manage Agents</h2>
                        </div>
                        <div class="flex-shrink ml-auto">
                            <router-link :to="{ name: 'createAgent' }"
                                class="bg-vgreen rounded p-2 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                                Add New Agent</router-link>
                        </div>
                    </div>

                    <table class="w-full mt-4">
                        <thead class="w-full bg-gray-100 h-12">
                            <td></td>
                            <th class="text-sm font-medium text-vgray text-left pl-4">Agent Name</th>
                            <th class="text-sm font-medium text-vgray text-left">Email</th>
                            <th class="text-sm font-medium text-vgray text-left">Phone</th>
                            <th class="text-sm font-medium text-vgray text-left">Created At</th>

                            <th class="text-sm font-medium text-vgray"></th>
                        </thead>

                        <tbody>
                            <tr v-if="items.length == 0">
                                <td colspan="6" class="bg-gray-200 h-12 text-center text-sm">No agents found</td>
                            </tr>
                            <tr v-if="items.length > 0" class="h-12" v-for="(i, index) in items" :key="index">
                                <td>
                                    <img @error="setAltImg" v-if="i.avatar" class="ml-2 h-12 w-12 rounded object-cover"
                                        :src="i.avatar"
                                        alt="broker avatar">
                                </td>
                                <td class="pl-4 text-sm header-semiBold text-gray-500">
                                    <router-link :to="{ name: 'EditAgent', params:{id: i.id} }" class="text-vgreen header">
                                        {{ i.firstName }} {{ i.lastName }}
                                    </router-link>
                                </td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <a href="mailto: jade@morganbusinesssales.com" class="text-sm truncate">{{ i.email }}</a>
                                </td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    {{ i.phone }}
                                </td>
                                <td class="text-sm text-vgrayDark">{{ formatTime(i.createdAt) }}</td>
                                <td>
                                    <div class="w-full flex">

                                        <div class="flex-shrink mr-1">
                                            <router-link :to="{name: 'EditAgent', params:{id: i.id}}">
                                            <svg class="w-6 h-6 cursor-pointer text-vgreen hover:text-green-600"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                </path>
                                                <path fill-rule="evenodd"
                                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </router-link>
                                        </div>
                                        <div class="flex-shrink" @click="deleteItem(i)">
                                            <svg class="w-6 h-6 cursor-pointer text-red-500 hover:text-red-600"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from "@/components/navs/adminSidebar"
import AdminPrimary from "@/components/navs/adminPrimary"
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.js";
import Preloader from "@/components/loader"

export default {
    data() {
        return {
            items: [],
            loading: false
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
        setAltImg(event) { 
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
},
        formatTime(time) {
            return this.$moment(time.seconds * 1000).format("DD-MM-YYYY")
        },
        async getData() {
            // reset items and set loader
            this.items = []
            this.loading = true
            // get data
            const q = query(collection(db, "agents"), where("tenantId", "==", this.currentTenant.tenantId));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // Create data obj
                let obj = doc.data()
                this.$set(obj, "id", doc.id)
                // push items to array
                this.items.push(obj)
            }); 
            // finish loading
            this.loading = false

        },
        async deleteItem(item) {
            // Set loader
            this.loading = true
            // Delete document
            await deleteDoc(doc(db, "agents", item.id));
            // Refresh data
            this.getData()
        }
    },
    created() {
        this.getData()
    },
    components: {
        AdminSidebar,
        AdminPrimary,
        Preloader
    }
}
</script>
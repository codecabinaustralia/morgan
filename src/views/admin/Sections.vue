<template>
    <div class="w-full flex">
        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="container mx-auto p-10 flex flex-wrap ">
                <div v-if="loading" class="w-full flex items-center mt-20">
                <preloader class="bg-white rounded-lg p-4 h-20 w-20 mx-auto flex items-center justify-center" />
            </div>
                <div v-if="!loading" class="w-full mr-4 mb-4 bg-white rounded-lg p-4">
                    <h2 class="header-semiBold text-vgrayDark mb-2">Web Book Details</h2>
                    <input type="text" v-model="item.title" placeholder="Web Book title" class="my-2 input">
                </div>
                <div class="flex w-full">
                <div v-if="!loading" class="w-3/4 mr-4 bg-white rounded-lg p-4">
                    <div class="flex w-full">
                        <div class="flex-shrink">
                            <h2 class="header-semiBold text-vgrayDark">Sections</h2>
                        </div>
                        <div class="flex-shrink ml-auto">
                            <span v-if="!trash" @click="trash = true" class="cursor-pointer text-gray-500 hover:text-vgreen text-xs">Trashed</span>
                            <span v-if="trash" @click="trash = false" class="cursor-pointer text-gray-500 hover:text-vgreen text-xs">Active</span>
                        </div>
                        <div class="flex-shrink ml-3">
                            <span @click="addSection()" :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}`: ''" class="bg-vgreen rounded p-2 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Add New Section</span>
                        </div>
                    </div>

                    <div v-if="item.sections.length == 0" class="w-full h-12 mt-10 bg-gray-100 flex items-center justify-center">
                        Add a section to get started
                    </div>

                    <table class="w-full mt-4" v-if="item.sections.length > 0">
                        <thead class="w-full bg-gray-100 h-12">
                            <th></th>
                            <th class="text-sm font-medium text-vgray text-left pl-4">Section Title</th>
                            
                            <th class="text-sm font-medium text-vgray"></th>
                        </thead>


                            <draggable v-model="item.sections" class="w-full" tag="tbody" group="sections" @start="" @end="saveItem()">
                            <tr v-for="(section, index) in item.sections" :key="index" v-if="!trash && section.status == 'Active'" class="h-12 cursor-move hover:bg-gray-200">
                                <td width="5%"><svg class="w-4 mx-auto h-4 text-vgray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg></td>
                                <td width="80%" class="pl-4 text-sm header-semiBold text-gray-500">
                                    <router-link :to="{name: 'createWebBook'}" :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="text-vgreen">{{section.title}}</router-link>
                                </td>
                                
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink mr-1">
                                            <svg @click="duplicateRow(index)" class="w-6 h-6 cursor-pointer text-blue-500 hover:text-blue-600"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div class="flex-shrink mr-1">
                                            <router-link :to="{name: 'createWebBook', params: {sectionId: index, id: webbookId}}" >
                                            <svg class="w-6 h-6 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </router-link>

                                        </div>
                                        <div class="flex-shrink">
                                            <svg @click="removeSection(index)" class="w-6 h-6 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Trash -->
                            <tr v-for="(section, index) in item.sections" :key="index" v-if="trash && section.status == 'Inactive'" class="h-12 cursor-move hover:bg-gray-200">
                                <td width="5%"><svg class="w-4 mx-auto h-4 text-vgray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg></td>
                                <td width="80%" class="pl-4 text-sm header-semiBold text-gray-500">
                                    <router-link :to="{name: 'createWebBook'}" class="text-vgreen">{{section.title}}</router-link>
                                </td>
                                
                                <td>
                                    <div class="w-full flex">
                                        
                                        <div class="flex-shrink">
                                            <span class="text-white rounded bg-vgreen p-2 cursor-pointer hover:bg-vgray" @click="restore(index)">
                                                Restore
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </draggable>
                       
                    </table>
                </div>

                <div v-if="!loading" class="w-1/4 ml-4 bg-white rounded-lg p-4">

                    <span @click="preview()"
                            class="bg-yellow-500 mb-2 w-full rounded block p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            Preview</span>

                    <div @click="saveItem()" :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}`: ''"
                            class="bg-vgreen mb-4 rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Web Book</div>

                            <div class="w-full">
                                <h2 class="text-vgray text-sm">Assigned Agent</h2>
                
                    <select v-model="item.agent" name="" class="input" id="">
                        <option :value="agent" v-for="(agent, aAndex) in agents" :key="aAndex + 'Agent'">
                            {{agent.firstName}} {{agent.lastName}}
                        </option>
                    </select>
                </div>
                
                            <div class="w-full mt-4">
                                <h2 class="text-vgray text-sm">Status</h2>
                    <select v-model="item.status" name="" class="input" id="">
                        <option>Active</option>
                        <option>Archive</option>
                    </select>
                </div>

                <div  class="w-full mt-4">
                    Password protect
                    <input v-model="item.password" type="text" placeholder="password" class="input mt-2">
                </div>
                
                    <div class="w-full mt-4">
                    Tags
                    <vue-tags-input
      v-model="item.tag"
    />
                </div>
                </div>
            </div>


            </div>
        </div>
    </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';

    import AdminSidebar from "@/components/navs/adminSidebar"
    import AdminPrimary from "@/components/navs/adminPrimary"
    import draggable from 'vuedraggable'
    import { collection, query, where, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import Preloader from "@/components/loader"
    export default {
        data(){
            return{
                trash: false,
                loading: false,
                item: null,
                agents: []
            }
        },
        computed:{
            webbookId(){
                return this.$route.params.id
            },
            currentTenant(){
                return this.$store.state.currentTenant
            }
        },
        methods:{
            async getAgents() {
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
                this.agents.push(obj)
                this.item.agent = this.agents[0]
            });
            // finish loading
            this.loading = false
        },
            async saveItem(){
                await setDoc(doc(db, "webbooks", this.$route.params.id), this.item);
            },
            async getWebbook(){
                this.loading = true
                const docRef = doc(db, "webbooks", this.$route.params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    let obj = docSnap.data()
                    this.$set(obj, "id", docSnap.id)
                    this.$set(obj, "tags", [])
                    this.item = obj
                    this.getAgents()
                    this.loading = false
                } else {
                    this.loading = false
                }
            },
            addSection(){
                this.item.sections.push({
                    title: "new Section " + this.item.sections.length,
                    widgets: [],
                    status: "Active"
                })
                this.saveItem()
            },
            async removeSection(index){
                
                if(this.item.sections.length > 1) this.item.sections[index].status = "Inactive"
                await setDoc(doc(db, "webbooks", this.$route.params.id), this.item);
                
            },
            async restore(index){
                
                if(this.item.sections.length > 1) this.item.sections[index].status = "Active"
                await setDoc(doc(db, "webbooks", this.$route.params.id), this.item);
                
            },
            duplicateRow(index){
               this.item.sections.push(this.item.sections[index])
                
            },
            preview(){
            this.$store.commit("updateState", {state: "preview", body: this.item})
            let routeData = this.$router.resolve({name: 'Preview'})
            window.open(routeData.href, '_blank');
        },
        },
        created(){
            this.getWebbook()
        },
        components:{
            AdminSidebar,
            AdminPrimary,
            draggable,
            Preloader,
            VueTagsInput
        }
    }
</script>
<template>
    <div class="w-full flex">
        
        <div v-if="showLink" style="z-index: 9999999999" class=" w-full h-screen fixed bg-gray-900 bg-opacity-25 flex items-center justify-center">
            <div class="w-96 bg-white rounded-xl p-6 shadow-lg relative">
                <div @click="showLink = false, getLinks()" class="absolute top-0 right-0 m-4 cursor-pointer hover:text-gray-900 text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <h2 v-if="!loadingLink" class="header-medium text-gray-800">Generate a new link</h2>
                
                <div v-if="!loadingLink" class="w-full flex flex-wrap">
                    <div class="w-full flex relative mt-6">
                    <input v-model="linkTitle" type="text" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Link Title</div>
                </div>

                <div v-if="loadingLink" class="w-full h-full flex items-center justify-center">
                    <preloader class="bg-white rounded-lg p-4 h-20 w-20 mx-auto flex items-center justify-center" />
                </div>

                <div v-if="haveLink && !loadingLink" class="w-full my-4 bg-blue-100 rounded-lf px-4 py-2 text-sm text-blue-600">
                    <h2 class="truncate">https://cozy-queijadas-99b809.netlify.app/#/{{haveLink}}</h2>
                </div>

                <div v-if="!loadingLink" class="w-full mt-4 text-center">
                    <div @click="generateLink()"
                        class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                        Generate Link</div>
                </div>
                </div>
            </div>

        </div>

        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="container mx-auto p-10 flex flex-wrap ">
                <div v-if="loading" class="w-full flex items-center mt-20">
                <preloader class="bg-white rounded-lg p-4 h-20 w-20 mx-auto flex items-center justify-center" />
            </div>
                <div v-if="!loading" class="w-3/4 mr-4 mb-4 bg-white rounded-lg p-4">
                    <h2 class="header-semiBold text-vgrayDark mb-2">Web Book Details</h2>
                    <input type="text" v-model="item.title" placeholder="Web Book title" class="my-2 input">
                </div>
                <div class="w-1/4"></div>
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

                    <div class="w-full flex flex-wrap border-t border-gray-300 pt-10 mt-10">
                        <div class="flex-grow">
                            <h2 class="header-semiBold text-vgrayDark">Links</h2>
                        </div>
                        <div class="flex-shrink">
                            <span @click="showLink = true"
                            class="bg-blue-600 mb-2 w-full rounded block py-2 px-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            Generate Link</span>
                        </div>
                        <div v-if="(links.length > 0)" class="w-full my-2 flex flex-wrap" v-for="(l, lIndex) in links" :key="('l'+lIndex)">
                            <div class="w-1/4 text-sm text-gray-600">
                                {{l.title}}
                            </div>
                            <div class="w-2/4 text-blue-600 text-xs cursor-pointer hover:text-blue-800">
                                <h2 class="truncate">https://cozy-queijadas-99b809.netlify.app/#/{{l.link}}</h2>
                            </div>
                            <div class="w-1/4 flex justify-end space-x-2">
                                <div class="flex-shrink">
                                    <span class="bg-purple-100 text-purple-500 text-xs rounded-full px-2 py-1">
                                        {{l.visitors}} visitors
                                    </span>
                                </div>
                                <div class="flex-shrink" @click="destroyLink(lIndex)">
                                    <svg class="w-4 h-4 text-red-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="(links.length == 0)" @click="showLink = true" class="w-full my-4 text-center text-gray-600 bg-gray-100 rounded-lg px-4 py-2 text-sm" >
                            There are no links generated yet - <span class="text-blue-600 cursor-pointer hover:text-blue-800">would you like to generate one now?</span>
                        </div>
                    </div>
                </div>

                <div v-if="!loading" class="w-1/4 ml-4 bg-white rounded-lg p-4">

                    <span @click="preview()"
                            class="bg-yellow-500 mb-2 w-full rounded block p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            Preview</span>

                    <div @click="saveItem()" :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}`: ''"
                            class="bg-vgreen mb-4 rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Web Book</div>

                            <div class="w-full mb-2">
                                <h2 class="text-vgray text-sm">Assigned Agent</h2>
                
                    <select v-model="item.agent" name="" class="input" id="">
                        <option :value="agent" v-for="(agent, aAndex) in agents" :key="aAndex + 'Agent'">
                            {{agent.firstName}} {{agent.lastName}}
                        </option>
                    </select>
                </div>
                
                            <div class="w-full mt-4 mb-2">
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

    import { collection, addDoc, query, deleteDoc, where, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import Preloader from "@/components/loader"
    export default {
        data(){
            return{
                showLink: false,
                haveLink: '',
                linkTitle: '',
                loadingLink: false,
                trash: false,
                loading: false,
                item: null,
                agents: [],
                links: [
                    
                ]
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
            async generateLink(){
                this.loadingLink = true
                const myUid = this.webbookId + '--' + (this.links.length + 1)
                const payload = {
                    title: this.linkTitle,
                    link: myUid,
                    webbookId: this.webbookId,
                    visitors: 0
                }

                await addDoc(collection(db, "links"), payload)

                this.haveLink = myUid
                this.loadingLink = false
                
            },

            async destroyLink(index){
                await deleteDoc(doc(db, "links", this.links[index].id));
                this.links.splice(index, 1)
            },

            async getLinks(){
                // reset items and set loader
            this.loading = true
            // get data
            const q = query(collection(db, "links"), where("webbookId", "==", this.webbookId));
            const querySnapshot = await getDocs(q);
            console.log("get links", querySnapshot.length)
            querySnapshot.forEach((doc) => {
                // Create data obj
                let obj = doc.data()
                this.$set(obj, "id", doc.id)
                // push items to array
                this.links.push(obj)
            });
            // finish loading
            this.loading = false
            },

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
            console.log("routeData", routeData)
            window.open(routeData.href, '_blank');

            
        },
        },
        created(){
            this.getLinks()
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
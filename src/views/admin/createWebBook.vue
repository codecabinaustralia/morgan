<template>
    <div class="w-full flex bg-gray-100">

        <div style="z-index: 9999999999999999999999999" v-if="!loading && currentAsset"
            class="w-full bg-vgray bg-opacity-90 h-screen fixed top-0 left-0 items-center flex justify-center">
            <div class="w-1/2 ml-56 max-h-1/2 overflow-y-scroll bg-white rounded shadow"
                style="z-index: 9999999999999999999999999">
                <assetHero v-if="currentAsset.widget.type == 'hero'" :asset="currentAsset.widget" />
                <assetPdf v-if="currentAsset.widget.type == 'pdf'" :asset="currentAsset.widget" />
                <assetAgents v-if="currentAsset.widget.type == 'agents'" :asset="currentAsset.widget" />
                <assetHeader v-if="currentAsset.widget.type == 'header'" :asset="currentAsset.widget" />
                <assetCta v-if="currentAsset.widget.type == 'cta'" :asset="currentAsset.widget" />
                <assetTextArea v-if="currentAsset.widget.type == 'textArea'" :asset="currentAsset.widget" />
                <assetForm v-if="currentAsset.widget.type == 'form'" :asset="currentAsset.widget" />
                <assetExecutiveSummary v-if="currentAsset.widget.type == 'executiveSummary'"
                    :asset="currentAsset.widget" />
                <assetIFrame v-if="currentAsset.widget.type == 'iFrame'" :asset="currentAsset.widget" />
                <assetImage v-if="currentAsset.widget.type == 'image'" :asset="currentAsset.widget" />
                <assetImageText v-if="currentAsset.widget.type == 'imageText'" :asset="currentAsset.widget" />
                <assetImageGallery v-if="currentAsset.widget.type == 'imageGallery'" :asset="currentAsset.widget" />
                <assetImageGalleryList v-if="currentAsset.widget.type == 'imageGalleryList'"
                    :asset="currentAsset.widget" />
                <assetLink v-if="currentAsset.widget.type == 'link'" :asset="currentAsset.widget" />
                <assetVideo v-if="currentAsset.widget.type == 'video'" :asset="currentAsset.widget" />
                <assetMap v-if="currentAsset.widget.type == 'map'" :asset="currentAsset.widget" />
            </div>
        </div>

        <admin-sidebar />
        <div class="flex-grow  h-screen  overflow-y-scroll">
            <admin-primary />
            <div class="container mx-auto p-10 flex">
                <div class="w-3/4 pr-2">
                    <div v-if="loading" class="w-full flex items-center mt-20">
                        <preloader class="bg-white rounded-lg p-4 h-20 w-20 mx-auto flex items-center justify-center" />
                    </div>
                    <div v-if="!loading" class="bg-white rounded-lg p-4 flex space-x-2 mb-4">
                        <div class="w-full flex h-12 items-center space-x-4">
                            <div class="flex-shrink">
                                <router-link :to="{ name: 'Sections', params: { id: webbook.id } }">
                                    <span
                                        class="h-10 w-10 cursor-pointer hover:bg-opacity-90 rounded bg-gray-300 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </span>
                                </router-link>
                            </div>

                            <div class="flex-shrink">
                                <span class="text-vgray text-sm">Section title</span>
                            </div>
                            <div class="flex-grow">
                                <input type="text" v-model="webbook.sections[sectionId].title" class="input w-full "
                                    placeholder="eg: Executive Summary">
                            </div>
                        </div>
                    </div>

                    <div v-if="!loading" class="bg-white rounded-lg p-4 flex space-x-2">

                        <div
                            class="w-1/4 h-96 overflow-y-scroll border border-gray-100 bg-gray-100 rounded flex justify-center flex-wrap">
                            <div class="w-40 flex flex-wrap justify-center" v-for="(i, vindex) in items" :key="vindex">
                                <div @click="setAsset(i)"
                                    :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}; ` : ''"
                                    class="hover:text-white bg-white text-vgreen cursor-pointer mt-1 hover:bg-gray-200 border border-gray-200 w-40 h-20 flex items-center justify-center rounded">
                                    <h2>{{ i.title }}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="w-3/4 px-4">
                            <div class="w-full flex flex-wrap cursor-move">
                                <div v-if="webbook.sections[sectionId].widgets.length <= 0"
                                    class="w-full h-96 text-sm text-vgray items-center flex justify-center">
                                    <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                                    </svg> <span class="inline-block ml-2">Your page is blank click an item to get
                                        started</span>
                                </div>
                                <draggable v-model="webbook.sections[sectionId].widgets" class="w-full" group="assets">
                                    <div v-for="(a, aIndex) in webbook.sections[sectionId].widgets" :key="aIndex"
                                        class="mb-1 w-full shadow bg-gray-100 h-16 border border-gray-200 px-6 items-center rounded-lg flex">
                                        <div class="flex-shrink mr-2">
                                            <svg class="w-4 h-4 text-vgray cursor-pointer" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-grow text-vgray text-sm">{{ a.title }}</div>
                                        <div class="flex-shrink flex h-full items-center">
                                            <span @click="currentAsset = { widgetIndex: aIndex, widget: a }"
                                                :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}` : ''"
                                                class="px-3 py-2 bg-vgreen flex items-center rounded text-white text-sm hover:bg-opacity-90 cursor-pointer">Edit</span>
                                        </div>
                                        <div class="flex-shrink ml-2" @click="removeAsset(aIndex)">
                                            <svg class="w-4 h-4 text-vgray hover:text-red-500 cursor-pointer"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-1/4 pl-2">
                    <div v-if="!loading" class="bg-white rounded-lg p-4 w-full">
                        <span @click="getJob()"
                            class="bg-blue-500 mb-2 w-full rounded block p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            PDF</span>
                        <span @click="preview()"
                            class="bg-yellow-500 mb-2 w-full rounded block p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            Preview</span>
                        <div @click="saveWebbook()"
                            :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}` : ''"
                            class="bg-vgreen rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Web Book</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { bus } from '../../main'
import AdminSidebar from "@/components/navs/adminSidebar"
import AdminPrimary from "@/components/navs/adminPrimary"
import draggable from 'vuedraggable'
import assetHero from "@/components/assets/hero"
import assetPdf from "@/components/assets/pdf"
import assetCta from "@/components/assets/cta"
import assetHeader from "@/components/assets/header"
import assetAgents from "@/components/assets/agents"
import assetTextArea from "@/components/assets/textArea"
import assetForm from "@/components/assets/form"
import assetExecutiveSummary from "@/components/assets/executiveSummary"
import assetIFrame from "@/components/assets/iFrame"
import assetImage from "@/components/assets/image"
import assetImageText from "@/components/assets/imageText"
import assetImageGallery from "@/components/assets/imageGallery"
import assetImageGalleryList from "@/components/assets/imageGalleryList"
import assetLink from "@/components/assets/link"
import assetVideo from "@/components/assets/video"
import assetMap from "@/components/assets/map"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import Preloader from "@/components/loader"
export default {
    data() {
        return {
            jobId: '',
            loading: false,
            field: false,
            currentAsset: null,
            webbook: null,
            items: [
                {
                    title: "Hero",
                    type: "hero",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Agent Tile",
                    type: "agents",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Header",
                    type: "header",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Text Area",
                    type: "textArea",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Exec Summary",
                    type: "executiveSummary",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Form",
                    type: "form",
                    icon: "a",
                    value: ""
                },
                {
                    title: "iFrame",
                    type: "iFrame",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Image",
                    type: "image",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Call To Action",
                    type: "cta",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Image & Text",
                    type: "imageText",
                    icon: "a",
                    value: ""
                },
                // {
                //     title: "Gallery Grid",
                //     type: "imageGallery",
                //     icon: "a",
                //     value: ""
                // },
                {
                    title: "PDF",
                    type: "pdf",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Gallery List",
                    type: "imageGalleryList",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Link",
                    type: "link",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Map",
                    type: "map",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Video",
                    type: "video",
                    icon: "a",
                    value: ""
                }
            ]
        }
    },
    computed: {
        currentTenant() {
            return this.$store.state.currentTenant
        },
        currentUser() {
            return this.$store.state.currentUser
        },
        sectionId() {
            return this.$route.params.sectionId
        }
    },
    methods: {

        preview() {
            this.$store.commit("updateState", { state: "preview", body: this.webbook })
            let routeData = this.$router.resolve({ name: 'Preview' })
            console.log("routeData", routeData)
            window.open(routeData.href, '_blank');
        },
        async saveWebbook() {
            const pdf = await this.pdf()
            let obj = this.webbook
            if(this.webbook.pdfJobId) this.webbook.pdfJobId = pdf
            else this.$set(obj, 'pdfJobId', pdf)

            await setDoc(doc(db, "webbooks", this.$route.params.id), obj);
            this.getWebbook()
        },
        async getWebbook() {
            this.loading = true
            const docRef = doc(db, "webbooks", this.$route.params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let obj = docSnap.data()
                this.$set(obj, "id", docSnap.id)
                this.webbook = obj
                this.loading = false
            } else {
                this.loading = false
            }
        },
        setAsset(item) {
            this.webbook.sections[this.sectionId].widgets.push(item)
        },
        removeAsset(index) {
            this.webbook.sections[this.sectionId].widgets.splice(index, 1)
        },
        pdf() {
            return new Promise((resolve, reject) => {
            const payload = {
                "url": `https://cozy-queijadas-99b809.netlify.app/#/listing/${this.webbook.id}--1?pdf=true`,
                "delay": 10000
            }

            const headers = {
                headers: {
                    'X-API-Key': 'cl-c2d2048c5e3b4c299b4c72c629d0c40c'
                }
            }

            axios.post('https://api.cloudlayer.io/v2/url/pdf', payload, headers).then((response) => {
                resolve(response.data.id)
            })

            
        })
        },
        getJob(){

            const payload = {
                headers: {
                    'X-API-Key': 'cl-c2d2048c5e3b4c299b4c72c629d0c40c'
                },
                params: {
                "id": this.webbook.pdfJobId
            }
            }

            axios.get(`https://api.cloudlayer.io/v2/jobs/${this.webbook.pdfJobId}`, payload).then((response) => {
                if(response.data.assetUrl) window.open(response.data.assetUrl,'_blank')
            })
        },
        // checkPDF(){
        //     setInterval(() => {
        //         if(!this.webbook.pdfLink) this.checkPDF() 
        //     }, 5000)
        // }
    },
    created() {
        this.getWebbook()
        bus.$on('toggleAsset', (data) => {
            this.currentAsset = data;
        }),
            bus.$on('saveWidget', (data) => {
                if (this.webbook.sections) {
                    this.webbook.sections[this.sectionId].widgets[this.currentAsset.widgetIndex].value = data
                    this.saveWebbook()
                }
            })
    },
    components: {
        AdminSidebar,
        AdminPrimary,
        assetHero,
        assetHeader,
        assetTextArea,
        assetForm,
        assetExecutiveSummary,
        assetIFrame,
        assetImage,
        assetImageText,
        assetImageGallery,
        assetImageGalleryList,
        assetLink,
        assetVideo,
        assetAgents,
        assetCta,
        assetMap,
        assetPdf,
        draggable,
        Preloader
    }
}
</script>
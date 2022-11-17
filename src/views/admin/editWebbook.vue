<template>
    <div class="w-full flex bg-gray-100">

        <div v-if="currentAsset" class="w-full bg-vgray bg-opacity-90 h-screen fixed top-0 left-0 z-10 items-center flex justify-center">
            <div class="w-1/2 ml-56 max-h-1/2 overflow-y-scroll bg-white rounded shadow">
                <assetHeader v-if="currentAsset.type == 'header'" :asset="currentAsset" />
                <assetTextArea v-if="currentAsset.type == 'textArea'" :asset="currentAsset" />
                <assetForm v-if="currentAsset.type == 'form'" :asset="currentAsset" />
                <assetExecutiveSummary v-if="currentAsset.type == 'executiveSummary'" :asset="currentAsset" />
                <assetIFrame v-if="currentAsset.type == 'iFrame'" :asset="currentAsset" />
                <assetImage v-if="currentAsset.type == 'image'" :asset="currentAsset" />
                <assetImageText v-if="currentAsset.type == 'imageText'" :asset="currentAsset" />
                <assetImageGallery v-if="currentAsset.type == 'imageGallery'" :asset="currentAsset" />
                <assetLink v-if="currentAsset.type == 'link'" :asset="currentAsset" />
                <assetVideo v-if="currentAsset.type == 'video'" :asset="currentAsset" />
            </div>
        </div>

        <admin-sidebar />
        <div class="flex-grow  h-screen  overflow-y-scroll">
            <admin-primary />
            <div class="container mx-auto p-10 flex">
                <div class="w-3/4 pr-2">
                    <div class="bg-white rounded-lg p-4 flex space-x-2 mb-4">
                        <div class="w-full flex h-12 items-center space-x-4">
                            <div class="flex-shrink">
                                <router-link :to="{name: 'Sections', params:{id: 'test-book'}}">
                                <span class="h-10 w-10 cursor-pointer hover:bg-opacity-90 rounded bg-gray-300 flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                </span>
                            </router-link>
                            </div>

                            <div class="flex-shrink">
                                <span class="text-vgray text-sm">Title of the section</span>
                            </div>
                            <div class="flex-grow">
                                <input type="text" class="input w-full " placeholder="eg: Executive Summary">
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg p-4 flex space-x-2">

                        <div
                            class="w-1/4 h-96 overflow-y-scroll border border-gray-100 bg-gray-100 rounded flex justify-center flex-wrap">
                            <div class="w-40 flex flex-wrap justify-center" v-for="(i, vindex) in items" :key="vindex">
                                <div @click="setAsset(i)"
                                    class="hover:text-white bg-white text-vgreen cursor-pointer mt-1 hover:bg-vgreen border border-gray-200 w-40 h-20 flex items-center justify-center rounded">
                                    <h2>{{i.title}}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="w-3/4 px-4">
                            <div class="w-full flex flex-wrap cursor-move">
                                <div v-if="assets.length <= 0"
                                    class="w-full h-96 text-sm text-vgray items-center flex justify-center">
                                    <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                                    </svg> <span class="inline-block ml-2">Your page is blank click an item to get
                                        started</span>
                                </div>
                                <draggable v-model="assets" class="w-full" group="assets" @start="drag=true" @end="drag=false">
                                <div v-for="(a, aIndex) in assets" :key="aIndex"
                                    class="mb-1 w-full shadow bg-gray-100 h-16 border border-gray-200 px-6 items-center rounded-lg flex">
                                    <div class="flex-shrink mr-2">
                                        <svg class="w-4 h-4 text-vgray cursor-pointer" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow text-vgray text-sm">{{a.title}}</div>
                                    <div class="flex-shrink flex h-full items-center">
                                        <span @click="currentAsset = a"
                                            class="px-3 py-2 bg-vgreen flex items-center rounded text-white text-sm hover:bg-opacity-90 cursor-pointer">Edit</span>
                                    </div>
                                    <div class="flex-shrink ml-2" @click="removeAsset(aIndex)">
                                        <svg class="w-4 h-4 text-vgray hover:text-red-500 cursor-pointer" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
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
                    <div class="bg-white rounded-lg p-4 w-full">
                        <router-link :to="{name: 'Listing'}" target="_blank"
                            class="bg-yellow-500 mb-2 w-full rounded block p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-opacity-90">
                            Preview</router-link>
                        <div
                            class="bg-vgreen rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                            Save Form</div>
                        <div class="mt-2 text-vgray text-xs">Last updated 20 Sep 2022</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '../../main'
import AdminSidebar from "@/components/navs/adminSidebar"
import AdminPrimary from "@/components/navs/adminPrimary"
import draggable from 'vuedraggable'
import assetHeader from "@/components/assets/header"
import assetTextArea from "@/components/assets/textArea"
import assetForm from "@/components/assets/form"
import assetExecutiveSummary from "@/components/assets/executiveSummary"
import assetIFrame from "@/components/assets/iFrame"
import assetImage from "@/components/assets/image"
import assetImageText from "@/components/assets/imageText"
import assetImageGallery from "@/components/assets/imageGallery"
import assetLink from "@/components/assets/link"
import assetVideo from "@/components/assets/video"

export default {
    data() {
        return {
            field: false,
            assets: [],
            currentAsset: null,
            items: [
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
                    title: "Image & Text",
                    type: "imageText",
                    icon: "a",
                    value: ""
                },
                {
                    title: "Image Gallery",
                    type: "imageGallery",
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
                    title: "Video",
                    type: "video",
                    icon: "a",
                    value: ""
                }
            ]
        }
    },
    methods: {
        setAsset(item) {
            this.assets.push(item)
        },
        removeAsset(index) {
            this.assets.splice(index, 1)
        }
    },
    created(){
        bus.$on('toggleAsset', (data) => {
      this.currentAsset = data;
    })
    },
    components: {
        AdminSidebar,
        AdminPrimary,
        assetHeader,
        assetTextArea,
        assetForm,
        assetExecutiveSummary,
        assetIFrame,
        assetImage,
        assetImageText,
        assetImageGallery,
        assetLink,
        assetVideo,
        draggable
    }
}
</script>
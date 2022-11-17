<template>
    <div class="w-full flex">
        <admin-sidebar />
        <div class="flex-grow bg-gray-100 h-screen">
            <admin-primary />
            <div class="container mx-auto p-10 flex h-screen overflow-y-scroll -mt-20 pt-24 z-10 relative">
                <div class="w-3/4 pr-2">
                    <div class="bg-white rounded-lg p-4">
                        <div class="flex-shrink">
                            <h2 class="header-semiBold text-sm text-vgreen">Billing Settings</h2>
                            <div class="w-full flex h-full">

                                <div class="flex-1 xl:overflow-y-auto">
                                    <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                                   

                                        <form class="divide-y-blue-gray-200 mt-2 space-y-8 divide-y">


                                            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                                <div class="sm:col-span-6">
                                                    <h2 class="text-xl font-medium text-blue-gray-900">Billing Details</h2>
                                                    <p class=" text-xs text-vgray">Please ensure your details are kept upto date to ensure there is no interuption with your subscription</p>
                                                </div>

                                                <div class="sm:col-span-6">
                                                    <div class="w-full flex relative">
                                                        <input type="text"
                                                            class="input outline-none focus:text-vgreen focus:border-vgreen">
                                                        <div
                                                            class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                                                            Credit Card</div>
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <div class="w-full flex relative">
                                                        <input type="text"
                                                            class="input outline-none focus:text-vgreen focus:border-vgreen">
                                                        <div
                                                            class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                                                            Expiry</div>
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <div class="w-full flex relative">
                                                        <input type="text"
                                                            class="input outline-none focus:text-vgreen focus:border-vgreen">
                                                        <div
                                                            class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                                                            CCV</div>
                                                    </div>
                                                </div>
                                                


                                                <p class="text-xs text-gray-500 sm:col-span-6">This account was
                                                    created on <time datetime="2017-01-05T20:35:40">{{formatTime(currentTenant.createdAt)}}</time>.</p>
                                            </div>

                                            <div class="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                                                <div class="sm:col-span-6">
                                                    <h2 class="text-xl font-medium text-blue-gray-900">Invoices</h2>
                                                </div>


                                                <div class="sm:col-span-6">
                                                    <div class="w-full flex relative rounded bg-gray-100 shadow p-4">
                                                    <div class="flex-shrink">
                                                        <h2 class="text-vgreen font-bold">Invoice #00001</h2>
                                                    </div>
                                                    <div class="flex-shrink">
                                                        <h2 class="text-vgray text-sm px-10">Sep 2022</h2>
                                                    </div>
                                                    <div class="flex-shrink ml-auto">
                                                        <span class="text-blue-600 cursor-pointer text-sm">Download</span>
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
                        <div
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
export default {
    data() {
        return {
            field: false
        }
    },
    methods:{
        formatTime(time){
            return this.$moment(time.seconds * 1000).format("DD-MM-YYYY")
        }
    },
    computed:{
        currentTenant(){
            return this.$store.state.currentTenant
        }
    },
    components: {
        AdminSidebar,
        AdminPrimary
    }
}
</script>
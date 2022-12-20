<template>
     <section class="">
                                <div class="mx-auto max-w-7xl ">
                                    <div class="rounded-lg bg-vgreen p-2 shadow-lg sm:p-3">
                                        <h2 class="text-2xl header-bold my-2 print:block sm:hidden">Links</h2>
                                        <div :class="(index == asset.value.length - 1) ? 'border-0' : 'border-b'" class="flex flex-wrap items-center justify-between mb-2 pb-2  border-white border-opacity-10" v-for="(v, index) in asset.value" :key="index">
                                            <div class="flex w-0 flex-1 items-center">
                                                <!-- <span class="flex rounded-lg bg-green-900 p-2">
                                                    <qr-code :text="v.link" :size="100"></qr-code>
                                                </span> -->
                                                <p class="ml-3 truncate font-medium text-white">
                                                    <div class="w-full text-white print:text-black">
                                                        <div class="header-medium text-xl">{{v.title}}</div>
                                                        <div><span class="hidden md:inline">{{v.text}}</span></div>
                                                        <a :href="v.link" class="print:block sm:hidden">{{v.link}}</a>
                                                    </div>
                                                    
                                                </p>
                                            </div>
                                            <div class=" print:hidden order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                <a :href="v.link" target="_blank"
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-vgreen shadow-sm hover:bg-indigo-50">Open Link
                                                    </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </section>
</template>

<script>
export default {
    props: ["asset"]
};
</script>
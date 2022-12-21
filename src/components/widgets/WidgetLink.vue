<template>
     <section class="">
                                <div class="mx-auto max-w-7xl ">
                                    <h2 class="text-2xl header-bold my-2 print:block sm:hidden">Links</h2>
                                    <div class="flex flex-wrap sm:space-x-2 items-center">
                                        
                                        <div v-for="(v, index) in asset.value" :key="index" class="mb-2">

                                            <div class="rounded-lg bg-vgreen p-4 text-white flex">
                                                <div class="flex-grow pr-4">
                                                    <div class="header-medium text-xl">{{v.title}}</div>
                                                        <div><span class="hidden md:inline">{{v.text}}</span></div>
                                                        <a :href="v.link" class="print:block sm:hidden">{{v.link}}</a>
                                                </div>
                                                <div class="flex-shrink">
                                                     <a :href="v.link" target="_blank"
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-vgreen shadow-sm hover:bg-indigo-50">Open <span class="hidden sm:inline-block">Link</span>
                                                    </a>
                                                </div>
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
<template>
     <section class="my-20">
                                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                    <div class="rounded-lg bg-vgreen p-2 shadow-lg sm:p-3">
                                        <div class="flex flex-wrap items-center justify-between">
                                            <div class="flex w-0 flex-1 items-center">
                                                <span class="flex rounded-lg bg-green-900 p-2">
                                                    <qr-code :text="asset.value.link" :size="100"></qr-code>
                                                </span>
                                                <p class="ml-3 truncate font-medium text-white">
                                                    <div class="w-full text-white">
                                                        <div class="header-medium text-xl">{{asset.value.title}}</div>
                                                        <div><span class="hidden md:inline">{{asset.value.text}}</span></div>
                                                    </div>
                                                    
                                                </p>
                                            </div>
                                            <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                <a :href="asset.link"
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
<template>
    <section class="my-20 relative">
                                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">{{asset.value.title}}</h2>
                                <div class="w-full mt-10 flex flex-wrap">
                                    <div class="w-1/2 pr-4" :class="asset.value.position =='Image left - Text right' ? 'order-2' : 'order-1'" v-html="asset.value.text">
                                        
                                    </div>

                                    <div class="w-1/2 p-4 flex" :class="asset.value.position =='Image left - Text right' ? 'order-1' : 'order-2'">
                                        <img :src="asset.value.image"
                                            class="rounded-lg w-full shadow-lg" alt="">
                                    </div>
                                </div>
                            </section>
</template>

<script>
export default {
    props: ["asset"]
};
</script>
  
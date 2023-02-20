<template>
        <section class="my-20">
                <div class="grid grid-cols-12 gap-4 mt-10">
                        <div class="col-span-12 sm:col-span-3" v-for="(i, index) in asset.value.images" :key="index"><img :src="i"
                                        class="cursor-pointer hover:opacity-50 bg-vgreen w-56 rounded-lg mx-auto object-fit"
                                        alt=""></div>
                </div>
        </section>
</template>

<script>
export default {
        props: ["asset"]
};
</script>
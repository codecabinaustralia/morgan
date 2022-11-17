<template>
        <section class="my-20">
                <div class="grid grid-cols-12 mt-10">
                        <div class="col-span-12" v-for="(i, index) in asset.value.images" :key="index"><img :src="i"
                            class=" w-full mx-auto object-cover"
                            alt=""></div>
                </div>
        </section>
</template>

<script>
export default {
        props: ["asset"]
};
</script>
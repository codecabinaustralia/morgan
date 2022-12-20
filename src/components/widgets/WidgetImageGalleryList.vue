<template>
        <section class="my-20">
                <div class="flex flex-wrap mt-10 w-full">
                        <div :class="asset.value.display == 'Inline' ? 'inline-block' : 'block'" :style="{width: asset.value.width}" v-for="(i, index) in asset.value.images" :key="index"><img :src="i"
                            class="object-cover"></div>
                </div>
        </section>
</template>

<script>
export default {
        props: ["asset"]
};
</script>
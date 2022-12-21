<template>
        <section class="my-10">
                <FsLightbox
			:toggler="toggler"
			:sources="asset.value.images"
                        type="image"
		 />

                <div @click="toggler = !toggler" class="flex flex-wrap mt-10 w-full">
                        <div :class="asset.value.display == 'Inline' ? 'inline-block' : 'block'" :style="{width: asset.value.width}" v-for="(i, index) in asset.value.images" :key="index"><img :src="i"
                            class="object-cover"></div>
                </div>
        </section>
</template>

<script>
import FsLightbox from "fslightbox-vue";

export default {
        props: ["asset"],
        data(){
                return{
                        toggler: false
                }
        },
        components: {
    FsLightbox,
  },
};
</script>
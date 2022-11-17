<template>
    <section>
        <div class="w-full" v-html="asset.value.text"></div>
    </section>
</template>

<script>
export default {
    props: ["asset"]
};
</script>
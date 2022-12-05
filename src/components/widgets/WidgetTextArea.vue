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

<style lang="postcss">
ul { 
    list-style-type: disc !important; 
    list-style-position: inside !important; 
 }

 ol { 
    list-style-type: decimal !important; 
    list-style-position: inside !important; 
 }

 ul ul, ol ul { 
    list-style-type: circle; 
    list-style-position: inside !important; 
    margin-left: 15px !important; 
 }

 ol ol, ul ol { 
    list-style-type: lower-latin !important; 
    list-style-position: inside !important; 
 }
</style>
<template>
    <section>
        <div class="w-full widgetTextArea" v-html="asset.value.text"></div>
    </section>
</template>

<script>
export default {
    props: ["asset"]
};
</script>

<style lang="postcss">
.widgetTextArea h4{
    /* font-weight: bold; */
    font-size: 1.25rem;
    color: #367A4D;
}

.widgetTextArea h3{
    /* font-weight: bold; */
    font-size:1.5rem;
    color: #367A4D;
}

.widgetTextArea h2{
    /* font-weight: bold; */
    font-size:1.875rem;
    color: #367A4D;
}

.widgetTextArea h1{
    /* font-weight: bold; */
    font-size:2.00rem;
    color: #367A4D;
}

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

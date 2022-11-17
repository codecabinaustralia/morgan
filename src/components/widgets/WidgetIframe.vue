<template>
    <section>
        <iframe :src="asset.value.text" frameborder="0" height="600" width="100%"></iframe>
    </section>
</template>
  
<script>
export default {
    props: ["asset"]
};
</script>
  
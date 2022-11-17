<template>
    <section>
        <div class="my-6 w-full">
            <iframe width="100%" height="450" style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyCk2mQZ7g7MHwSE3b3bJXJeOpG71UHElek&q=' + asset.value.text">
            </iframe>
        </div>
    </section>
</template>
  

<script>
export default {
    props: ["asset"]
};
</script>
  
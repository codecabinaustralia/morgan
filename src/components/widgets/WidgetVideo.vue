<template>
    <section class="my-20">
        <iframe class=" print:hidden" width="100%" height="450" :src="'https://www.youtube.com/embed/' + asset.value.text" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

            <div class="sm:hidden  print:block text-2xl header-bold">Video links</div>
            <div class="sm:hidden  print:block">https://www.youtube.com/{{asset.value.text}}</div>


    </section>
</template>

<script>
  export default {
      props: ["asset"]
  };
  </script>
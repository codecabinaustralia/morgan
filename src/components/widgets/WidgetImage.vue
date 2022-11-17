<template>
    <section class="my-20">
                                <img class="w-full mt-10"
                                    :src="asset.value.image"
                                    alt="">
                            </section>
  </template>
  
  <script>
  export default {
      props: ["asset"]
  };
  </script>
    
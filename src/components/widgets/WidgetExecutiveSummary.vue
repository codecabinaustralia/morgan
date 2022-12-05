<template>
    <section class="w-full mt-10">
                  <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen mb-6">{{asset.value.title}}</h2>
  
                  <div v-for="(i, index) in asset.value.items" :key="index" class="border-b border-white w-full flex flex-wrap bg-gray-100 h-16 items-center px-6">
                    <div class="w-1/3 header-bold text-vgrayDark">{{i.label}}</div>
                    <div class="w-2/3">
                      {{i.value}}</div>
                  </div>
                  
  
                </section>
</template>

  <script>
  export default {
    props:["asset"]
  };
  </script>

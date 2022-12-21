<template>
    <section class="w-full mt-10">
                  <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen mb-6">{{asset.value.title}}</h2>
  
                  <div v-for="(i, index) in asset.value.items" :key="index" 
                  :class="i.label ? 'border-t border-white h-16' : '-mt-8 h-14'"
                  class=" w-full flex flex-wrap bg-gray-100 items-center">
                    <div class="w-1/3 header-bold text-vgrayDark  h-full p-6"> <span  v-if="i.label">{{i.label}}</span>    </div>
                    <div class="w-2/3 px-6">
                      {{i.value}}</div>
                  </div>
                  
  
                </section>
</template>

  <script>
  export default {
    props:["asset"]
  };
  </script>

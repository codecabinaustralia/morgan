<template>
    <div class="py-10 mb-20 flex w-full bg-vgreen">
      <div
        class="container mx-auto h-full flex flex-wrap justify-center items-center px-20"
      >
        <div class="w-2/3 text-center">
  
          <div class="h-64 w-64 bg-transparent mx-auto rounded-lg flex items-center justify-center">
                <img :src="asset.value.image" class="mx-auto w-64 rounded-lg">
              </div>
  
          <h1 class="text-white print:text-black header-bold text-3xl mt-6">
            {{asset.value.title}}
          </h1>
          <div class="w-1/2 mx-auto mt-4">
            <h2 class="text-white print:text-black text-sm">
              {{asset.value.text}}
            </h2>
  
          </div>
        </div>
  
        <div class="w-full flex justify-center space-x-4 my-10">
          <div class="flex-shrink">
              <div class="w-64 h-36 text-center bg-black bg-opacity-10 rounded-lg p-4 flex flex-wrap items-center">
                  <div class="w-full text-center">
                      <h2 class="text-2xl text-white print:text-black  header-bold">{{asset.value.stat1Value}}</h2>
                  <h3 class="text-white print:text-black text-base">
                    {{asset.value.stat1Label}}
                  </h3>
                  </div>
              </div>
          </div>
          <div class="flex-shrink">
              <div class="w-64 h-36 text-center bg-black bg-opacity-10 rounded-lg p-4 flex flex-wrap items-center">
                <div class="w-full text-center">
                      <h2 class="text-2xl text-white print:text-black  header-bold">{{asset.value.stat2Value}}</h2>
                  <h3 class="text-white print:text-black text-base">
                    {{asset.value.stat2Label}}
                  </h3>
                  </div>
              </div>
          </div>
          <div class="flex-shrink">
              <div class="w-64 h-36 text-center bg-black bg-opacity-10 rounded-lg p-4 flex flex-wrap items-center">
                <div class="w-full text-center">
                      <h2 class="text-2xl text-white print:text-black header-bold">{{asset.value.stat3Value}}</h2>
                  <h3 class="text-white print:text-black text-base">
                    {{asset.value.stat3Label}}
                  </h3>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:["asset"]
  };
  </script>
  
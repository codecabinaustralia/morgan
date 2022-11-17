<template>
  <div class="w-full shadow-lg">
    <div class="flex h-20 bg-white items-center container mx-auto px-10">

      <div class="flex-shrink mr-auto">
        <img width="200" src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
          alt="Morgan Business Sales" />
      </div>

      <div class="flex-shrink relative">



        <div @click="showTranslation = !showTranslation" class="w-70 mr-2 ">
          <div class="w-full hover:bg-gray-100 cursor-pointer bg-white p-3 flex space-x-2 rounded-lg shadow-lg">
            <div class="flex-shrink">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png"
                class="w-10 h-10 object-cover" alt="">
            </div>

            <div class="flex-grow h-10 flex items-center">
              <h2 class="text-vgray text-sm">Translate this page</h2>
            </div>
          </div>
        </div>

        <div :class="!showTranslation ? 'hidden' : ''" class="absolute top-0 left-0 z-50 rounded-xl mt-12" style="width: 300%">
          <Translator class="bg-white rounded shadow-lg h-96 overflow-y-scroll" />
        </div>


      </div>

      <div class="flex-shrink mr-2">
        <img
          :src="agent.avatar"
          alt="brocker" class="w-14 h-14 rounded object-cover">
      </div>
      <div class="flex-shrink h-full flex items-center">
        <div class="text-sm text-vgray">
          <span class="text-vgreen header-bold tracking-tight">Hi, I'm {{agent.firstName}}</span><br />
          I'm your business broker
        </div>
      </div>
      <div @click="showEnquire"
        class="ml-6 flex-shrink bg-yellow-500 text-white text-2xl header-bold px-4  hover:bg-yellow-400 cursor-pointer tracking-tight h-16 rounded flex items-center">
        Enquire</div>

      <a :href="'tel:' + agent.phone "
        class="ml-6 flex-shrink bg-vgreen text-white text-2xl header-bold px-4  hover:bg-green-600 cursor-pointer tracking-tight h-16 rounded flex items-center">
        <span class="header-semiBold text-lg mr-1"><svg class="w-6 h-6" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
            </path>
          </svg></span>
        {{agent.phone}}
      </a>
    </div>
  </div>
</template>

<script>
import { Translator } from 'vue-google-translate';
import { bus } from '../../main'

export default {
  props:['agent'],
  data() {
    return {
      showTranslation: false,
      navItems: [
        {
          title: "Aquisitions",
          routerName: "Home",
          className: "navItem"
        },
        {
          title: "Valuations",
          routerName: "Home",
          className: "navItem"
        },
        {
          title: "Advice",
          routerName: "Home",
          className: "navItem"
        },
        {
          title: "About Us",
          routerName: "Home",
          className: "navItem"
        }
      ]
    }
  },
  methods:{
    showEnquire(){
      bus.$emit('toggleView', 'showContactForm');
    }
  },
  components: {
    Translator
  }
}
</script>

<style lang="postcss">
.navItem {
  @apply text-sm text-vgreen mx-4;
}
</style>

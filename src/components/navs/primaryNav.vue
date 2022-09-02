<template>
  <div class="w-full shadow-lg">
    <div class="flex h-20 bg-white items-center container mx-auto px-10">
      <div class="flex-shrink mr-auto">
        <img
          width="200"
          src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
          alt="Morgan Business Sales"
        />
      </div>

      <div v-for="(i, index) in navItems" :key="index" class="flex-shrink h-full">
        <router-link class="hover:border-vgreen border-b-2 border-transparent h-full flex items-center" :to="{name: i.routerName}" :class="i.className">{{i.title}}</router-link>
      </div>
      <div class="ml-6 flex-shrink bg-vgreen text-white text-2xl header-bold px-4  hover:bg-green-600 cursor-pointer tracking-tight h-16 rounded flex items-center">
        <span class="header-semiBold text-lg mr-1"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
        1300 577 297</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navItems: [
                {
                    title: "Business for Sale",
                    routerName: "Home",
                    className:"navItem"
                },
                {
                    title: "Sell Your Business",
                    routerName: "Home",
                    className:"navItem"
                },
                {
                    title: "Aquisitions",
                    routerName: "Home",
                    className:"navItem"
                },
                {
                    title: "Valuations",
                    routerName: "Home",
                    className:"navItem"
                },
                {
                    title: "Advice",
                    routerName: "Home",
                    className:"navItem"
                },
                {
                    title: "About Us",
                    routerName: "Home",
                    className:"navItem"
                }
            ]
        }
    }
}
</script>

<style lang="postcss">
.navItem {
  @apply text-sm text-vgreen mx-4;
}
</style>

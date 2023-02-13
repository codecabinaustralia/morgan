<template>
  <div class="w-full shadow-lg bg-white relative z-10">
    <div class="flex h-36 bg-white items-center mx-auto px-2 relative">
      <div @click="showNav()" class="sm:hidden absolute top-0 right-0 h-36 mr-6">
        <div class="h-full flex items-center">
          <div class="h-10 w-10 bg-gray-100 rounded flex items-center cursor-pointer group">
            <div class="w-full py-2 px-2 text-center text-gray-700">
              <i v-if="!showMobile" class="fa-solid fa-bars"></i>
              <i v-if="showMobile" class="fa-solid fa-close"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-shrink mr-auto ml-auto sm:ml-0 sm:mr-auto">
        <img
          @error="setAltImg"
          width="200"
          :src="require('@/assets/logo.png')"
          alt="Morgan Business Sales"
        />
      </div>

      <div class="hidden sm:flex flex-shrink mr-2 ml-auto">
        <img
          @error="setAltImg"
          :src="agent.avatar"
          alt="brocker"
          class="w-14 h-14 rounded object-cover"
        />
      </div>
      <div class="flex-shrink h-full hidden sm:flex items-center">
        <div class="text-sm text-vgray">
          <span class="text-vgreen header-bold tracking-tight"
            >Hi, I'm {{ agent.firstName }}</span
          ><br />
          I'm your business broker
        </div>
      </div>
      <div
        @click="showEnquire"
        class="
          ml-6
          flex-shrink
          hidden
          sm:flex
          bg-vgreen
          text-white text-xl
          header-bold
          px-4
          hover:bg-vgreen
          cursor-pointer
          tracking-tight
          h-14
          rounded
          flex
          items-center
        "
      >
        Any Questions?
      </div>

      <a
        :href="'tel:' + agent.phone"
        class="
          ml-6
          flex-shrink
          bg-vgreen
          hidden
          sm:flex
          text-white text-xl
          header-bold
          px-4
          hover:bg-green-600
          cursor-pointer
          tracking-tight
          h-14
          rounded
          flex
          items-center
        "
      >
        <span class="header-semiBold text-lg mr-1"
          ><svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path></svg
        ></span>
        {{ agent.phone }}
      </a>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  props: ["agent", "showMobile"],
  data() {
    return {
      navItems: [
        {
          title: "Aquisitions",
          routerName: "Home",
          className: "navItem",
        },
        {
          title: "Valuations",
          routerName: "Home",
          className: "navItem",
        },
        {
          title: "Advice",
          routerName: "Home",
          className: "navItem",
        },
        {
          title: "About Us",
          routerName: "Home",
          className: "navItem",
        },
      ],
    };
  },
  methods: {
    showNav(){
      bus.$emit("toggleView", "showNav");
    },
    setAltImg(event) {
      event.target.src =
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
    },
    showEnquire() {
      bus.$emit("toggleView", "showContactForm");
    },
  },
};
</script>

<style lang="postcss">
.navItem {
  @apply text-sm text-vgreen mx-4;
}
</style>

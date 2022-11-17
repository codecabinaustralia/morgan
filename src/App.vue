<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js"

export default {
  computed:{
      currentUser(){
        this.$store.state.currentUser
      }
    },
    watch:{
      currentUser(){
        if(!this.currentUser) this.$router.push({name: "SignIn"})
      }
    },
  methods:{
    listenToAuth(){
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log("signed out")
          this.$store.commit("updateState", { state: "currentUser", body: null })
        } else {
          console.log("you are logged in")
        }
      });
    }
  },
  created(){
    this.listenToAuth()
  }
}
</script>

<style lang="postcss">
  .input{
    @apply h-12 flex items-center w-full justify-center bg-white border-gray-300 border rounded text-sm text-vgray px-3
  }
</style>

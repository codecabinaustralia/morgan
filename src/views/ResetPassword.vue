<template>
    <div class="w-full h-screen bg-vgreen flex justify-center items-center">
        <div v-if="loading" class="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center" >
            <preloader class="mx-auto"  />
            </div>

        <div v-else class="w-96 rounded-xl bg-white px-10 pb-10 shadow-lg">

            
            <img :src="require('@/assets/logo.png')" alt="logo">

            <div class="w-full flex flex-wrap">
                <div class="w-full flex relative">
                    <input v-model="email" type="text" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Email</div>
                </div>

                <div v-if="error" class="mt-4 w-full bg-red-50 text-red-500 text-sm rounded p-4">
                    {{error}}
                </div>

                <div class="w-full mt-4 text-center">
                    <div @click="signUp()"
                        class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                        Reset your password</div>
                </div>

                <div class="w-full mt-4 flex">
                    <div class="w-full text-vgray text-xs">Go Back <router-link :to="{name: 'SignIn'}"
                            class="text-vgreen cursor-pointer" >Sign In</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { doc, setDoc } from "firebase/firestore"; 
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../firebase.js";

import Preloader from "@/components/loader"

export default {
    data(){
        return{
            email: "",
            error: "",
            loading: false
        }
    },
    methods: {
        signUp() {
            this.loading = true
            sendPasswordResetEmail(auth, this.email)
                .then(async () => {
                    this.$router.push({name: "SignIn"})
                })
                .catch((error) => {
                    this.loading = false
                    this.error = error.message
                });
        }
    },
    components:{
        Preloader
    }
}
</script>


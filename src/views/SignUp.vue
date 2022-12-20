<template>
    <div class="w-full h-screen bg-vgreen flex justify-center items-center">
        <div v-if="loading" class="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center" >
            <preloader class="mx-auto"  />
            </div>

        <div v-else class="w-96 rounded-xl bg-white px-10 pb-10 shadow-lg">

            
            <img :src="require('@/assets/logo.png')" class="w-40 mx-auto my-4" alt="logo">

            <div class="w-full flex flex-wrap">
                <div class="w-full flex relative">
                    <input v-model="email" type="text" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Email</div>
                </div>
                <div class="w-full flex mt-3 relative">
                    <input v-model="password" type="password" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Password</div>
                </div>

                <div v-if="error" class="mt-4 w-full bg-red-50 text-red-500 text-sm rounded p-4">
                    {{error}}
                </div>

                <div class="w-full mt-4 text-center">
                    <div @click="signUp()"
                        class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                        Sign Up</div>
                </div>

                <div class="w-full mt-4 flex">
                    <div class="w-full text-vgray text-xs">Already have an account? <router-link :to="{name: 'SignIn'}"
                            class="text-vgreen cursor-pointer" >Sign In</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";

import Preloader from "@/components/loader"

export default {
    data(){
        return{
            email: "",
            password: "",
            error: "",
            loading: false
        }
    },
    methods: {
        signUp() {
            this.loading = true
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(async (userCredential) => {
                    console.log("done", userCredential.user)
                    // Signed in 
                    const user = userCredential.user;
                    const payload = {
                        active: true,
                        userId: user.uid,
                        role: "admin",
                        createdAt: new Date(),
                        email: this.email
                    }
                    try{
                        // Create tenant
                        let tenant = await addDoc(collection(db, "tenants"), payload)
                        this.$set(payload, "tenantId", tenant.id)
                        this.$store.commit("updateState", {state: "currentTenant", body: payload})
                        // Create user with tenantId
                        await setDoc(doc(db, "users", user.uid), payload)
                        this.$store.commit("updateState", {state: "currentUser", body: payload})
                        // Redirect
                        this.$router.push({name: "WebBooks"})
                    } catch(error){
                        this.loading = false
                        this.error = "Sorry there was an error"
                    }
                    
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


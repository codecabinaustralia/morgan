<template>
    <div class="w-full h-screen bg-vgreen flex justify-center items-center">
        <div v-if="loading" class="w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center">
            <preloader class="mx-auto" />
        </div>

        <div v-else class="w-96 rounded-xl bg-white px-10 pb-10 shadow-lg">


            <img src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif" alt="logo">

            <div class="w-full flex flex-wrap">
                <div class="w-full flex relative">
                    <input v-model="email" type="text" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Email</div>
                </div>
                <div class="w-full flex mt-3 relative">
                    <input v-model="password" type="password"
                        class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <div
                        class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                        Password</div>
                </div>

                <div v-if="error" class="mt-4 w-full bg-red-50 text-red-500 text-sm rounded p-4">
                    {{ error }}
                </div>

                <div class="w-full mt-4 text-center">
                    <div @click="signUp()"
                        class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                        Sign In</div>
                </div>

                <div class="w-full mt-4 flex">
                    <div class="w-full text-vgray text-xs">
                        <router-link :to="{ name: 'ResetPassword' }" class="text-vgreen cursor-pointer">Reset your
                            password?
                        </router-link>
                    </div>
                </div>
                <div class="w-full mt-4 flex">
                    <div class="w-full text-vgray text-xs">Dont have an account yet? <router-link :to="{ name: 'SignUp' }"
                            class="text-vgreen cursor-pointer">Sign Up</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

import Preloader from "@/components/loader"

export default {
    data() {
        return {
            email: "",
            password: "",
            error: "",
            loading: false
        }
    },
    methods: {
        signUp() {
            this.loading = true
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(async (userCredential) => {
                    const docRef = doc(db, "users", userCredential.user.uid);
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        // Save current user
                        this.$store.commit("updateState", { state: "currentUser", body: docSnap.data() })
                        // Get tenant
                        const docRefTenant = doc(db, "tenants", docSnap.data().tenantId);
                        const docSnapTenant = await getDoc(docRefTenant);
                        // Save tenant id

                        if (docSnapTenant.exists()) {
                            let obj = docSnapTenant.data()
                            this.$set(obj, "id", docSnapTenant.id)
                            this.$store.commit("updateState", { state: "currentTenant", body: obj })
                            this.$router.push({ name: "WebBooks" })
                        }

                    } else {
                        this.loading = false
                        this.error = "Sorry we don't have an account with these details"
                    }

                }).catch(e => {
                    this.loading = false
                    this.error = "We can't sign you in"
                })


        }
    },
    components: {
        Preloader
    }
}
</script>


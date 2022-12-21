<template>
    <div class="w-full">
        <section v-if="agent" class="w-full flex flex-wrap my-10 bg-gray-100 ">
        <div class="w-full sm:w-2/12">
            <img @error="setAltImg" class="h-40 w-40 mx-auto rounded-lg shadow-lg object-cover m-4  "
                :src="agent.avatar"
                alt="agent">
        </div>

        <div class="w-full sm:w-10/12 px-6 py-3 text-center sm:text-left">
            <h3 class="text-sm text-vgreen header-bold">Broker</h3>
            <h2 class="text-vgraySuperDark header-bold tracking-tight text-3xl">{{agent.firstName}} {{agent.lastName}}</h2>

            <div class="w-full flex mt-4">
                <div class="flex-shrink">
                    <div class="hidden sm:block w-40 header-bold tracking-tight text-vgraySuperDark text-sm">
                        Direct Phone</div>
                </div>
                <div class="flex-grow text-vgreen cursor-pointer hover:text-green-600">
                    {{agent.phone}}</div>
            </div>


            <div class="w-full flex">
                <div class="flex-shrink">
                    <div class="hidden sm:block w-40 header-bold tracking-tight text-vgraySuperDark text-sm">
                        Email</div>
                </div>
                <div class="flex-grow text-vgreen cursor-pointer hover:text-green-600">
                    {{agent.email}}</div>
            </div>
            <div v-if="asset.value.link" class="w-full flex">
                <div class="flex-shrink">
                    <div class="hidden sm:block w-40 header-bold tracking-tight text-vgraySuperDark text-sm">
                        Link</div>
                </div>
                <a target="_blank" :href="asset.value.link" class="flex-grow text-vgreen cursor-pointer hover:text-green-600">
                    {{asset.value.link}}</a>
            </div>
            <div class="w-full text-left sm:text-left flex mt-6 text-gray-600 text-sm">
                {{asset.value.text}}
            </div>
            

            <div class="w-full flex mt-4">

                <div @click="enquire()"
                    class="bg-vgreen w-full sm:w-auto hover:bg-green-600 px-2 text-white header-bold tracking-tight h-12 rounded cursor-pointer items-center justify-center flex">
                    Ask me a question
                </div>
            </div>

        </div>
    </section>
    </div>
</template>
  
<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { bus } from '../../main'

export default {
    props: ["asset"],
    data() {
        return {
            agent: null
        }
    },
    methods: {
         setAltImg(event) { 
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
},
        enquire(){
            bus.$emit('toggleView', 'showContactForm')
        },
        async getDoc() {
            const docRef = doc(db, "agents", this.asset.value.form.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let obj = docSnap.data()
                this.$set(obj, "id", docSnap.id)
                this.agent = obj
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
    },
    created() {
        this.getDoc()
    }
};
</script>
  
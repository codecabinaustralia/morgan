<template>
    <div class="w-full bg-white h-20 flex relative z-50 shadow-lg">
        <div class="flex-shrink p-2">
            <img v-if="currentTenant.logo" :src="currentTenant.logo" class="h-16 object-cover">
            <img v-else src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
                class="h-20 object-cover">
        </div>
        <div class="flex-grow mx-10">
            <ais-instant-search
            index-name="webbooks"
            >
            <ais-configure 
            :attributesToSnippet="['title']"
                :hits-per-page.camel='5'
            >

                
            </ais-configure>
            </ais-instant-search>
        </div>
        <div class="flex-shrink ml-auto h-full flex items-center mr-4">
            <router-link class="text-vgray text-sm hover:text-vgreen" to="/">View Site</router-link>
        </div>
        <div @click="logout()" class="flex-shrink ml-4 h-full flex items-center mr-4">
            <span :style="currentTenant.primaryColor ? `background-color:${currentTenant.primaryColor}`: ''" class="bg-vgreen rounded p-2 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                Logout</span>
        </div>
    </div>
</template>

<script>
// import { searchClient } from 'vue-instantsearch';

export default {
    data() {
        return {}
    },
    methods:{
        logout(){
            this.$store.commit("updateState", {state: 'currentUser', body: null})
            this.$store.commit("updateState", {state: 'preview', body: null})
            this.$store.commit("updateState", {state: 'currentTenant', body: null})

            this.$router.push({name: 'SignIn'})
        }
    },
    computed: {
        currentTenant() {
            return this.$store.state.currentTenant
        }
    },
    components: {

    }
}
</script>
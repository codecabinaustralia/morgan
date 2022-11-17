<template>
    <div class="flex-shrink h-screen bg-vgrayDark relative z-40">
            <div class="w-56 h-full flex flex-wrap p-10">
                <div class="w-full h-10 flex items-center flex-wrap">
                    <div class="w-full"><h4 class="text-gray-300 header-light text-sm">Welcome back</h4></div>
                    <!-- <div><h4 class="text-white header-semiBold text-sm">{{currentUser.email}}</h4></div> -->
                </div>
                <div class="w-full mt-4">
                    <h3 :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="text-green-400 header-semiBold text-xs mb-2">Web Books</h3>
                    <router-link :to="{name: 'WebBooks'}" class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Books</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></router-link>
                    <router-link :to="{name: 'Agents'}" class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Brokers</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></router-link>
                    <router-link :to="{name: 'Forms'}" class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Forms</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></router-link>
                    
                </div>

                <div class="w-full pt-4 mt-4 border-t border-gray-600">
                    <h3 :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="text-green-400 header-semiBold text-xs mb-2">CRM</h3>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Coming Soon</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                </div>

                <div class="w-full pt-4 border-t border-gray-600">
                    <h3 :style="currentTenant.primaryColor ? `color:${currentTenant.primaryColor}`: ''" class="text-green-400 header-semiBold text-xs mb-2">My Settings</h3>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><router-link :to="{name: 'Billing'}" class="mr-auto">Billing</router-link> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><router-link :to="{name: 'Teams'}" class="mr-auto">My Teams</router-link> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><router-link :to="{name: 'CompanySettings'}" class="mr-auto">Brand Settings</router-link> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Logout</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                </div>

                
            </div>

            
        </div>
</template>

<script>
export default {
    computed:{
        currentTenant(){
            return this.$store.state.currentTenant
        },
        currentUser(){
            return this.$store.state.currentUser
        }
    }
}
</script>
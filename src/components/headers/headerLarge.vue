<template>
    <div class="py-28 flex w-full bg-vgreen">
        <div class="container mx-auto h-full flex items-center px-20">
            <div class="w-1/2">
                <h1 class="text-white header-bold text-5xl">
                    Australia's Leading Business Broking Specialists
                </h1>

                
                <div class="w-full text-sm text-white mt-6">What would you like to do</div>
                <div class="w-full flex space-x-4 w-full h-12 items-center mt-2">
                    <div class="flex-shrink">
                        <div class="w-40 hover:border-white hover:bg-vgreen hover:text-white h-12 cursor-pointer border-2 border-transparent flex items-center justify-center text-vgreen bg-white rounded-lg">
                            Sell a Business
                        </div>
                    </div>
                        <div class="flex-shrink text-sm text-white">Or</div>
                        <div class="flex-shrink">
                        <div class="w-40 hover:border-white hover:bg-vgreen hover:text-white h-12 cursor-pointer border-2 border-transparent flex items-center justify-center text-vgreen bg-white rounded-lg">
                            Buy a Business
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-1/2 flex flex-wrap">
                <div class="w-1/2">
                    <img :src="chosenImage" class="rounded-lg shadow-lg -mt-10 object-cover w-96 h-96">
                    <div class="text-white text-sm header-medium flex mt-4 h-10 items-center cursor-pointer hover:text-yellow-400"><span class="inline-block">Browse all 175 Businesses for sale</span> <svg class="w-4 h-4 inlin-eblock ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></div>
                </div>
                <div class="w-1/2 -ml-4 relative">
                    <div class="absolute top-0 left-0 z-50 -m-6"><span class="bg-yellow-500 text-white header-medium px-4 py-2 rounded-full -m-4 z-50">New businesses for sale</span></div>
                    <div @click="chosenImage = i.image" class="w-full group cursor-pointer mb-2" v-for="(i, index) in featureditems" :key="index">
                        <div class="w-full relative bg-white p-4 group-hover:bg-gray-100 rounded-xl flex items-center flex-wrap">
                            <div class="mt-2 text-sm header-semiBold text-vgray w-full flex"><h2 class="truncate">{{i.title}}</h2></div>
                            <div class="flex w-full space-x-4">
                                <div class="flex-shrink">
                                    <div class="w-full text-2xl header-semiBold tracking-tight text-vgreen">{{i.revenue}}</div>
                            <div class="text-vgray text-sm">Revenue</div>
                                </div>
                                <div class="flex-shrink">
                                    <div class="w-full text-sm mt-2 header-semiBold tracking-tight text-vgreen leading-none">SALE ${{i.cost}}</div>
                                </div>
                            </div>

                            <div class="absolute bottom-0 right-0 m-2 group-hover:text-vgrayDark text-vgray">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            chosenImage: "",
            featureditems:[
                {
                    title: "Oral Care & Beauty Products",
                    revenue: "1.5M",
                    cost: "2.25M",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Established Master Franchise",
                    revenue: "500K",
                    cost: "1.25M",
                    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80"
                },
                {
                    title: "Private Aviation",
                    revenue: "5.25M",
                    cost: "7.25M",
                    image: "https://images.unsplash.com/photo-1580832107357-012906efd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                }
            ]
        }
    },
    created(){
        this.chosenImage = this.featureditems[0].image
    }
}
</script>
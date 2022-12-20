<template>
  <div class="w-full">
    <primary-nav />
    <header-small />

    <div class="w-full bg-white flex">
        <div class="container mx-auto px-20 py-10">
            <div class="w-full mb-4">
                <h2 class="text-vgray">We've found 175 listings</h2>
            </div>

            <div class="w-full grid grid-cols-4 gap-4">
                <div class="col-span-1" v-for="(b, index) in businesses" :key="index">
                    <div class="w-full h-72 bg-white rounded-lg shadow-lg cursor-pointer group">
                        <img :src="b.image" class="rounded-t-lg h-40 object-cover w-full" :alt="b.title">

                        <div class="p-4">
                            <h2 class="text-vgrayDark group-hover:text-vgreen text-sm header-semiBold">{{b.title}}</h2>
                            
                             <div class="w-full flex">
                            <div class="w-2/3">
                                <h3 class="text-vgreen header-bold tracking-tight">${{b.price}}</h3>
                            </div>
                            <div class="1/3 flex justify-end">
                                        <svg class="w-6 h-6 group-hover:text-vgrayDark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    </div>

    <section class="bg-vgrayDark w-full flex">
      <div class="container mx-auto grid grid-cols-3 gap-10 p-20">
        <div class="col-span-1">
          <h2 class="text-white header-bold tracking-tight text-3xl">
            Quick Links
          </h2>
          <ul class="my-4 text-sm">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Businesses For Sale</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Sell a Business</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Valuations</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Mergers and Acquisitions</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Find a Business Broker</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Exit Planning</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-span-1">
          <h2 class="text-white header-bold tracking-tight text-3xl">
            Business Brokers
          </h2>
          <ul class="my-4 text-sm">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Brokers Queensland</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Brokers New South Wales</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Brokers Victoria</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Brokers South Australia
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Business Brokers Western Australia</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-span-1">
          <h2 class="text-white header-bold tracking-tight text-3xl">
            Useful Information
          </h2>
          <ul class="my-4 text-sm">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Businesses Sale Advice</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Corporate Sales</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >About Morgan Business Sales</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
              >
                Commercial Property For Sale</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Email us</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:underline text-white cursor-pointer"
                >Call us 1300 577 297</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-span-3">
          <h2 class="text-white header-bold tracking-tight text-3xl">
            Business Broker Office Locations
          </h2>
          <div class="w-full grid grid-cols-9 gap-2 mt-4">
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Northern NSW</h2>
                    <div class="text-xs text-gray-300">
                      48 Pioneer Parade Banora Point NSW 2486
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Newcastle</h2>
                    <div class="text-xs text-gray-300">
                      1 Tudor Street Newcastle West NSW 2302
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Sydney</h2>
                    <div class="text-xs text-gray-300">
                      Suite 19, 103 George Street Parramatta NSW 2150
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Gold Coast</h2>
                    <div class="text-xs text-gray-300">
                      2/194 Varsity Parade,  Varsity Lakes QLD 4227
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Brisbane</h2>
                    <div class="text-xs text-gray-300">
                      339 Coronation Drive Milton QLD 4064
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Central Queensland</h2>
                    <div class="text-xs text-gray-300">
                      3 Poinciana Ave Taranganba QLD 4703
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Victoria</h2>
                    <div class="text-xs text-gray-300">
                      Suite 9/214 Bay Street Brighton Vic  3186
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">South Australia</h2>
                    <div class="text-xs text-gray-300">
                      Level 5, 97 Pirie Street Adelaide SA 5000
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
              <ul class="text-sm">
                <li class="">
                  <router-link
                    :to="{ name: 'Home' }"
                    class="hover:underline text-white cursor-pointer"
                  >
                    <h2 class="text-white header-semiBold">Western Australia</h2>
                    <div class="text-xs text-gray-300">
                      Suite 75, 34 Welshpool Road Welshpool WA 6106
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </section>

    <section class="w-full flex">
      <div class="container mx-auto px-10 flex h-full items-center flex">
        <div class="flex-shrink mr-auto">
        <img
          width="200"
          :src="require('@/assets/logo.png')"
          alt="Morgan Business Sales"
        />
      </div>
      <div class="flex-shrink flex">
        <div class="text-vgray text-sm">©2022 by Morgan Business Sales. <router-link :to="{name: 'Home'}" class="text-vgreen cursor-pointer">Privacy Policy</router-link> </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import PrimaryNav from "../components/navs/primaryNav";
import headerSmall from "../components/headers/headerSmall";
export default {
    data(){
        return{
            businesses: [
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
                {
                    title: "Private Label Manufacturing Business – Oral Care & Beauty Products",
                    price: "4,221,481.00",
                    image: "https://static.wixstatic.com/media/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.jpg/v1/fill/w_660,h_500,al_c,q_85,usm_0.66_1.00_0.01/11062b_cb3c8c5d631140b5bb5d1957a030848c~mv2.webp"
                },
            ]
        }
    },
  components: {
    PrimaryNav,
    headerSmall,
  },
};
</script>

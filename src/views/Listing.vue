<template>
  <div class="w-full">
    <primary-nav />
    <header-listing />

    <div class="w-full bg-white flex">
        <div class="container mx-auto px-20 py-10 flex justify-center">

           <div class="w-2/3 pr-10 text-vgray text-base justify-center">
          
          <p class="my-10">
            This iconic business is 100% Australian owned and has been providing businesses and consumers with premium oral health, beauty, and self-care products for over 90+ years.
          </p>

 

<p class="my-10">Their product range is in all major retail and supermarket chains in Australia. They are passionate and ethically helping sustain products to reduce harm globally.
</p>
<p class="my-10">They have been in continuous operation since 1930 with 3 main areas to the business.</p>

<p class="my-10">They have strong relationships with all the major retailers to produce private label products for the current market trends.</p>

 

<p class="my-10">This business has room for expansion.
Sales for 2022 $10,442,551<br />
EBITDA for 2022 $635,810</p>

<p class="my-10">This exemplary company is being sold as the owners are retiring.</p>

 <p class="my-10">Total price is circa $4,221,481 made up of Goodwill at $1,589,524 plus current balance sheet value including all stock of $2,631,957.</p>
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
          src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
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
import headerListing from "../components/headers/headerListing";
export default {
    data(){
        return{
          
        }
    },
  components: {
    PrimaryNav,
    headerListing
  },
};
</script>

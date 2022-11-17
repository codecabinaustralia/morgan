<template>
  <div>
    <div class="w-full fixed">
      <listing-nav />
    </div>

    <div class="w-full flex flex-wrap pt-20">

      <div class="flex-shrink">
        <div class="h-screen fixed w-56 bg-gray-100 shadow-lg z-10 pt-0 text-sm">

          <div v-for="(section, index) in sections" :key="index"
            :class="section.value ? 'bg-vgreen text-white' : 'hover:bg-gray-200 cursor-pointer'"
            class="px-4 h-12 flex items-center cursor-pointer ">{{section.title}}</div>


        </div>
      </div>

      <div class="flex-grow pl-56">

        <header-listing />

        <div class="w-full bg-white flex">
          <div class="container mx-auto py-10 flex justify-center">

            <div class="w-full px-20 text-vgray text-base justify-center">

              <section class="w-full">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Executive Summary</h2>

                <div class="w-full flex flex-wrap bg-gray-100 h-16 items-center px-6 mt-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Business Name</div>
                  <div class="w-2/3">
                    Luxury Caravan Hire</div>
                </div>
                <div class="w-full flex flex-wrap bg-white h-16 items-center px-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Address</div>
                  <div class="w-2/3">
                    3-7 Bowen Street Slacks Creek QLD</div>
                </div>
                <div class="w-full flex flex-wrap bg-gray-100 h-16 items-center px-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Turnover</div>
                  <div class="w-2/3">
                    $1,687,740 (2022 Financial Year)</div>
                </div>
                <div class="w-full flex flex-wrap bg-white h-16 items-center px-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Net Profit</div>
                  <div class="w-2/3">
                    $812,046 (2022 Financial Year)</div>
                </div>
                <div class="w-full flex flex-wrap bg-gray-100 h-16 items-center px-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Premiss Lease inc outgoings</div>
                  <div class="w-2/3">
                    Premise Lease - including outgoings</div>
                </div>
                <div class="w-full flex flex-wrap bg-white h-16 items-center px-6">
                  <div class="w-1/3 header-bold text-vgrayDark">Fleet of Caravans</div>
                  <div class="w-2/3">
                    $1,945,000</div>
                </div>

              </section>

              <section>
                <div class="w-full my-20">
                  <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Header</h2>
                  <h3 class="text-vgreen header-bold text-xl my-4">This is a header widget</h3>
                </div>
              </section>


              <section class="w-full flex my-20 bg-gray-100  rounded-lg">
                <div class="flex-shrink">
                  <img class="h-40 w-40 rounded-lg shadow-lg object-cover m-4  "
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                    alt="agent">
                </div>

                <div class="flex-grow px-6 py-3">
                  <h3 class="text-sm text-vgreen header-bold">Broker</h3>
                  <h2 class="text-vgraySuperDark header-bold tracking-tight text-3xl">Amy Reilly</h2>

                  <div class="w-full flex mt-4">
                    <div class="flex-shrink">
                      <div class="w-40 header-bold tracking-tight text-vgraySuperDark text-sm">Direct Phone</div>
                    </div>
                    <div class="flex-grow text-vgreen cursor-pointer hover:text-green-600">0431373024</div>
                  </div>
                  <div class="w-full flex">
                    <div class="flex-shrink">
                      <div class="w-40 header-bold tracking-tight text-vgraySuperDark text-sm">Office Phone</div>
                    </div>
                    <div class="flex-grow text-vgreen cursor-pointer hover:text-green-600">1300 577 297</div>
                  </div>

                  <div class="w-full flex">
                    <div class="flex-shrink">
                      <div class="w-40 header-bold tracking-tight text-vgraySuperDark text-sm">Email</div>
                    </div>
                    <div class="flex-grow text-vgreen cursor-pointer hover:text-green-600">josh@jblventures.com.au</div>
                  </div>

                  <div class="w-full flex mt-4">
                    <div class="flex-shrink">
                      <div class="w-40 header-bold tracking-tight text-vgraySuperDark text-sm"></div>
                    </div>
                    <div
                      class="bg-vgreen hover:bg-green-600 px-2 text-white header-bold tracking-tight h-12 rounded cursor-pointer items-center justify-center flex">
                      Ask me a question
                    </div>
                  </div>

                </div>
              </section>

              <section>
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Text Area</h2>
                <p class="my-10">Luxury Caravan Hire is Queensland's largest caravan hire company specialising in a
                  variety of lightweight & traditional caravans. Servicing South East Queensland - Brisbane, Gold Coast
                  &
                  Sunshine Coast. They offer both short & long-term rental caravans that provide space, comfort & style
                  for Australians to experience outdoor living & travel at their best, all at an affordable price. The
                  owners Dimitri and Markela have decided it is time to sell as they look forward to some time
                  travelling
                  themselves.
                </p>
                <p class="my-10">There are more opportunities for other income sources with this business in the
                  maintenance sectorfor expansion. The sellers are currently providing this maintenance service for
                  their
                  own fleet and there is demand from the public. The business is in full momentum with an increase in
                  profits each year and there is scope for growth to expand nationally with their third-party hire
                  business.
                </p>

                <p class="my-10">Providing third-party hire, customers can ​list their van with Luxury Caravan Hire and
                  they manage the entire hire process and provide customers with a healthy return on their investment.
                </p>
              </section>

              <section class="my-20">
                <div class="w-full flex justify-center">

                  <div class="w-1/2">
                    <div class="bg-vgreen w-full rounded-lg p-10 flex flex-wrap items-center justify-center">
                      <h3 class="text-white header text-2xl mb-2">Form title</h3>
                      <div class="w-full mb-1">
                        <input type="text" class="input" placeholder="First name">
                      </div>
                      <div class="w-full mb-1">
                        <input type="text" class="input" placeholder="Last name">
                      </div>
                      <div class="w-full mb-1">
                        <input type="text" class="input" placeholder="Email">
                      </div>

                      <div class="w-full">
                        <div
                          class="bg-yellow-500 cursor-pointer hover:bg-opacity-90 rounded h-12 flex items-center justify-center text-white">
                          Submit Form
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section>
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Website</h2>

                <iframe src="https://www.luxurycaravanhire.com.au" frameborder="0" height="600" width="100%"></iframe>
              </section>

              <section class="my-20">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Image</h2>
                <img class="w-full mt-10"
                  src="https://res.cloudinary.com/web-books/image/upload/c_limit,f_auto,fl_lossy,h_1600,q_auto,w_1600/v1/wb_data/team_98/20220928_135548_9b9cf8f8_Overview_of_the_Industry_002_47a1fabc441419b42be4dbffb0f2ead5"
                  alt="">
              </section>

              <section class="my-20">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Image &amp; Text</h2>
                <div class="w-full mt-10 flex flex-wrap">
                  <div class="w-1/2 pr-4">
                    <h2 id="executiveSummary" class="header-bold text-2xl text-vgreen">Text header</h2>
                    <p class="my-10">There are more opportunities for other income sources with this business in the
                      maintenance sectorfor expansion. The sellers are currently providing this maintenance service for
                      their
                      own fleet and there is demand from the public. The business is in full momentum with an increase
                      in
                      profits each year and there is scope for growth to expand nationally with their third-party hire
                      business.
                    </p>
                  </div>

                  <div class="w-1/2 p-4">
                    <img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="rounded-lg w-full shadow-lg" alt="">
                  </div>
                </div>
              </section>

              <section class="my-20">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen">Image Gallery</h2>
                <div class="grid grid-cols-12 gap-4 mt-10">
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>
                  <div class="col-span-3"><img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                      class="cursor-pointer hover:opacity-50 bg-vgreen w-56 h-56 rounded-lg mx-auto object-cover"
                      alt=""></div>

                </div>
              </section>


              <section class="my-20">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Call To Action</h2>
                <div class="bg-vgreen rounded-lg">
                  <div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      <span class="block">Call to action</span>
                    </h2>
                    <p class="mt-4 text-lg leading-6 text-white">Try clicking the button below to see the form Lightbox
                    </p>
                    <a href="#"
                      class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-vgreen hover:bg-indigo-50 sm:w-auto">Launch
                      form</a>
                  </div>
                </div>
              </section>

              <section>
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Contact Form</h2>

    <div class=" bg-white shadow-xl rounded-r-lg">
      <h2 class="sr-only">Contact us</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3">
        <!-- Contact information -->
        <div class=" overflow-hidden bg-vgreen py-10 px-6 sm:px-10 xl:p-12 rounded-l-lg">
          
          
          <h3 class="text-lg font-medium text-white mb-4">Broker details</h3>

          <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="avatr" class="h-40 w-40 rounded">
          
          <div class="w-full my-4">
            <h2 class="header-bold text-xl tracking-tight text-white">Amy Reilly</h2>
          </div>
          <dl class="mt-8 space-y-2">
            <dt><span class="sr-only">Phone number</span></dt>
            <dd class="flex text-base text-white">
              <!-- Heroicon name: outline/phone -->
              <svg class="h-4 w-4 flex-shrink-0 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span class="ml-3 text-sm">0431374049</span>
            </dd>
            <dt><span class="sr-only">Email</span></dt>
            <dd class="flex text-base text-white">
              <!-- Heroicon name: outline/envelope -->
              <svg class="h-4 w-4 flex-shrink-0 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span class="ml-3 text-sm truncate">support@morganbusinessales.com</span>
            </dd>
          </dl>

        </div>

        <!-- Contact form -->
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <h3 class="text-lg font-medium text-gray-900">Send me a message</h3>
          <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" autocomplete="tel" class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen" aria-describedby="phone-optional">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
              </div>
              <div class="mt-1">
                <textarea id="message" name="message" rows="4" class="block input h-40 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen" aria-describedby="message-max"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-vgreen px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-vgreen focus:ring-offset-2 sm:w-auto">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
              </section>

              <section class="my-20">
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Link</h2>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="rounded-lg bg-vgreen p-2 shadow-lg sm:p-3">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-green-900 p-2">
            <!-- Heroicon name: outline/megaphone -->
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          </span>
          <p class="ml-3 truncate font-medium text-white">
            <span class="md:hidden">We announced a new product!</span>
            <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
          </p>
        </div>
        <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-vgreen shadow-sm hover:bg-indigo-50">View Link</a>
        </div>
        
      </div>
    </div>
  </div>


              </section>

              <section>
                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Maps</h2>

                <div class="my-6 w-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14063.327039630245!2d153.54429439999998!3d-28.21242365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1664853305318!5m2!1sen!2sau" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </section>

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
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Businesses For
                    Sale</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Sell a Business
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business
                    Valuations</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Mergers and
                    Acquisitions</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Find a Business
                    Broker</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Exit Planning
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h2 class="text-white header-bold tracking-tight text-3xl">
                Business Brokers
              </h2>
              <ul class="my-4 text-sm">
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business Brokers
                    Queensland</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business Brokers
                    New South Wales</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business Brokers
                    Victoria</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business Brokers
                    South Australia
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Business Brokers
                    Western Australia</router-link>
                </li>
              </ul>
            </div>

            <div class="col-span-1">
              <h2 class="text-white header-bold tracking-tight text-3xl">
                Useful Information
              </h2>
              <ul class="my-4 text-sm">
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Businesses Sale
                    Advice</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Corporate Sales
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">About Morgan
                    Business Sales</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
                    Commercial Property For Sale</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Email us
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">Call us 1300 577
                    297</router-link>
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
                        <h2 class="text-white header-semiBold">Gold Coast</h2>
                        <div class="text-xs text-gray-300">
                          2/194 Varsity Parade, Varsity Lakes QLD 4227
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
                  <ul class="text-sm">
                    <li class="">
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
                        <h2 class="text-white header-semiBold">Victoria</h2>
                        <div class="text-xs text-gray-300">
                          Suite 9/214 Bay Street Brighton Vic 3186
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-span-1 bg-white bg-opacity-10 p-4 rounded-lg ">
                  <ul class="text-sm">
                    <li class="">
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
                      <router-link :to="{ name: 'Home' }" class="hover:underline text-white cursor-pointer">
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
              <img width="200" src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
                alt="Morgan Business Sales" />
            </div>
            <div class="flex-shrink flex">
              <div class="text-vgray text-sm">©2022 by Morgan Business Sales. <router-link :to="{name: 'Home'}"
                  class="text-vgreen cursor-pointer">Privacy Policy</router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

</template>

<script>
import ListingNav from "../components/navs/listingNav";
import headerListing from "../components/headers/headerListing";
export default {
  data() {
    return {
      sections: [
        {
          title: "Exec Summary",
          type: "executiveSummary",
          icon: "a",
          value: true
        },
        {
          title: "Header",
          type: "header",
          icon: "a",
          value: false
        },
        {
          title: "Text Area",
          type: "textArea",
          icon: "a",
          value: false
        },

        {
          title: "Form",
          type: "form",
          icon: "a",
          value: false
        },
        {
          title: "iFrame",
          type: "iFrame",
          icon: "a",
          value: false
        },
        {
          title: "Image",
          type: "image",
          icon: "a",
          value: false
        },
        {
          title: "Image & Text",
          type: "imageText",
          icon: "a",
          value: false
        },
        {
          title: "Image Gallery",
          type: "imageGallery",
          icon: "a",
          value: false
        },
        {
          title: "Link",
          type: "link",
          icon: "a",
          value: false
        },
        {
          title: "Call To Action",
          type: "callToAction",
          icon: "a",
          value: false
        },
        {
          title: "Contact Form",
          type: "contactForm",
          icon: "a",
          value: false
        },
        {
          title: "Video",
          type: "video",
          icon: "a",
          value: false
        }
      ]
    }
  },
  components: {
    ListingNav,
    headerListing
  },
};
</script>

<template>
     <section>
                                <h2 id="executiveSummary" class="header-bold text-4xl text-vgreen my-10">Contact Form
                                </h2>

                                <div class=" bg-white shadow-xl rounded-r-lg">
                                    <h2 class="sr-only">Contact us</h2>

                                    <div class="grid grid-cols-1 lg:grid-cols-3">
                                        <!-- Contact information -->
                                        <div
                                            class=" overflow-hidden bg-vgreen py-10 px-6 sm:px-10 xl:p-12 rounded-l-lg">


                                            <h3 class="text-lg font-medium text-white mb-4">Broker details</h3>

                                            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                                                alt="avatr" class="h-40 w-40 rounded">

                                            <div class="w-full my-4">
                                                <h2 class="header-bold text-xl tracking-tight text-white">Amy Reilly
                                                </h2>
                                            </div>
                                            <dl class="mt-8 space-y-2">
                                                <dt><span class="sr-only">Phone number</span></dt>
                                                <dd class="flex text-base text-white">
                                                    <!-- Heroicon name: outline/phone -->
                                                    <svg class="h-4 w-4 flex-shrink-0 text-white"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                    </svg>
                                                    <span class="ml-3 text-sm">0431374049</span>
                                                </dd>
                                                <dt><span class="sr-only">Email</span></dt>
                                                <dd class="flex text-base text-white">
                                                    <!-- Heroicon name: outline/envelope -->
                                                    <svg class="h-4 w-4 flex-shrink-0 text-white"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                    </svg>
                                                    <span
                                                        class="ml-3 text-sm truncate">support@morganbusinessales.com</span>
                                                </dd>
                                            </dl>

                                        </div>

                                        <!-- Contact form -->
                                        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                            <h3 class="text-lg font-medium text-gray-900">Send me a message</h3>
                                            <form action="#" method="POST"
                                                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                <div>
                                                    <label for="first-name"
                                                        class="block text-sm font-medium text-gray-900">First
                                                        name</label>
                                                    <div class="mt-1">
                                                        <input type="text" name="first-name" id="first-name"
                                                            autocomplete="given-name"
                                                            class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="last-name"
                                                        class="block text-sm font-medium text-gray-900">Last
                                                        name</label>
                                                    <div class="mt-1">
                                                        <input type="text" name="last-name" id="last-name"
                                                            autocomplete="family-name"
                                                            class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="email"
                                                        class="block text-sm font-medium text-gray-900">Email</label>
                                                    <div class="mt-1">
                                                        <input id="email" name="email" type="email" autocomplete="email"
                                                            class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen">
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="flex justify-between">
                                                        <label for="phone"
                                                            class="block text-sm font-medium text-gray-900">Phone</label>
                                                        <span id="phone-optional"
                                                            class="text-sm text-gray-500">Optional</span>
                                                    </div>
                                                    <div class="mt-1">
                                                        <input type="text" name="phone" id="phone" autocomplete="tel"
                                                            class="input block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen"
                                                            aria-describedby="phone-optional">
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <div class="flex justify-between">
                                                        <label for="message"
                                                            class="block text-sm font-medium text-gray-900">Message</label>
                                                        <span id="message-max" class="text-sm text-gray-500">Max. 500
                                                            characters</span>
                                                    </div>
                                                    <div class="mt-1">
                                                        <textarea id="message" name="message" rows="4"
                                                            class="block input h-40 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-vgreen focus:ring-vgreen"
                                                            aria-describedby="message-max"></textarea>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-2 sm:flex sm:justify-end">
                                                    <button type="submit"
                                                        class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-vgreen px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-vgreen focus:ring-offset-2 sm:w-auto">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
  </template>
  
  <script>
  export default {
  
  };
  </script>
  
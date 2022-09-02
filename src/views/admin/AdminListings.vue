<template>
    <div class="w-full flex">
        <div class="flex-shrink h-screen bg-vgrayDark">
            <div class="w-56 h-full flex flex-wrap p-10">
                <div class="w-full h-10 flex items-center flex-wrap">
                    <div class="w-full"><h4 class="text-gray-300 header-light text-sm">Welcome back</h4></div>
                    <div><h4 class="text-white header-semiBold text-sm">Dru</h4></div>
                </div>
                <div class="w-full mt-4">
                    <h3 class="text-green-400 header-semiBold text-xs mb-2">Edit Settings</h3>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Listings</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Locations</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Reviews</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Services</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Manage Users</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                </div>

                <div class="w-full pt-4 mt-4 border-t border-gray-600">
                    <h3 class="text-green-400 header-semiBold text-xs mb-2">Marketing</h3>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Prospects Inspector</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Email Lists</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                </div>

                <div class="w-full pt-4 border-t border-gray-600">
                    <h3 class="text-green-400 header-semiBold text-xs mb-2">My Settings</h3>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Change password</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                    <h2 class="text-white mb-4 cursor-pointer header-medium text-sm flex w-full"><span class="mr-auto">Logout</span> <svg class="w-3 h-3 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></h2>
                </div>
            </div>
        </div>
        <div class="flex-grow bg-gray-100 h-screen">
            <div class="w-full bg-white h-20 flex">
                <div class="flex-shrink">
                    <img src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif" alt="Morgan Logo" class="h-20 object-cover">
                </div>
                <div class="flex-shrink ml-auto h-full flex items-center mr-4">
                    <router-link class="text-vgray text-sm hover:text-vgreen" to="/">View Site</router-link>
                </div>
                <div class="flex-shrink ml-4 h-full flex items-center mr-4">
                    <span class="bg-vgreen rounded p-2 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Logout</span>
                </div>
            </div>
            <div class="container mx-auto p-10">
                <div class="w-full bg-white rounded-lg p-4">
                    <div class="flex w-full">
                        <div class="flex-shrink">
                            <h2 class="header-semiBold text-vgrayDark">Manage Listings</h2>
                        </div>
                        <div class="flex-shrink ml-auto">
                            <span class="bg-vgreen rounded p-2 text-sm text-white header-medium cursor-pointer hover:bg-green-600"> Add New Listing</span>
                        </div>
                    </div>

                    <table class="w-full mt-4">
                        <thead class="w-full bg-gray-100 h-12">
                            <th class="text-sm font-medium text-vgray text-left pl-4">Title</th>
                            <th class="text-sm font-medium text-vgray text-left">Client</th>
                            <th class="text-sm font-medium text-vgray text-left">Contact</th>
                            <th class="text-sm font-medium text-vgray text-left">Revenue</th>
                            <th class="text-sm font-medium text-vgray text-left">Sale</th>
                            <th class="text-sm font-medium text-vgray text-center">Password</th>
                            
                            <th class="text-sm font-medium text-vgray"></th>
                        </thead>

                        <tbody>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="h-12">
                                <td class="pl-4 text-sm header-semiBold text-gray-500">Sunshine Cafe</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">Same Nueman</td>
                                <td class="text-sm text-vgreen cursor-pointer hover:underline">
                                    <div>043137585</div>
                                    <div class="text-xs">sam@gmail.com</div>
                                </td>
                                <td class="text-sm text-vgrayDark">$500,000</td>
                                <td class="text-sm text-vgrayDark">$1.500,000</td>
                                <td><svg class="w-6 h-6 text-vgreen mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></td>
                                <td>
                                    <div class="w-full flex">
                                        <div class="flex-shrink">
                                            <svg class="w-4 h-4 cursor-pointer text-vgreen hover:text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="flex-shrink ml-2">
                                            <svg class="w-4 h-4 cursor-pointer text-red-500 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
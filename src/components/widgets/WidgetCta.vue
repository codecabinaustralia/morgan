<template>
    <section class="my-20">
                    
                                <div class="bg-vgreen rounded-lg">
                                    <div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            <span class="block print:text-black">{{asset.value.title}}</span>
                                        </h2>
                                        <p class="mt-4 text-lg leading-6 text-white print:text-black">
                                            {{asset.value.text}}
                                        </p>
                                        <a href="#"
                                            class="print:hidden mt-8 print:text-black inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-vgreen hover:bg-indigo-50 sm:w-auto">Launch
                                            {{asset.value.buttonText}}</a>
                                    </div>
                                </div>
                            </section>
  </template>
  
  <script>
  export default {
    props: ["asset"]
  };
  </script>
  
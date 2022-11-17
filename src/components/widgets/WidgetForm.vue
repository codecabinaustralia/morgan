<template>
    <section class="my-20">
                                <div class="w-full flex justify-center">

                                    <div class="w-1/2">
                                        <div
                                            class="bg-vgreen w-full rounded-lg p-10 flex flex-wrap items-center justify-center">
                                            <h3 class="text-white header text-2xl mb-2">{{asset.value.form.title}}</h3>

                                            <div class="w-full mb-1" v-for="(f, index) in asset.value.form.fields" :key="index">
                                                <label class="text-white text-sm">{{f.label}}</label>
                                                <input v-if="f.type =='singleText'" :required="f.required" type="text" class="input" :placeholder="f.placeholder">
                                                <textarea v-if="f.type =='textArea'" :required="f.required" type="text" class="input py-2" :value="f.placeholder" />
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
  </template>
  
  <script>
export default {
    props: ["asset"]
};
</script>
  
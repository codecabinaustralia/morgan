<template>
    <section class="my-20">
                                <div class="w-full flex justify-center" v-if="(fields.length > 0)">

                                    <div class="w-1/2">
                                        <div v-if="!thankyou"
                                            class="bg-vgreen w-full rounded-lg p-10 flex flex-wrap items-center justify-center">
                                            <h3 class="text-white header text-2xl mb-2">{{asset.value.form.title}}</h3>

                                            <div class="w-full mb-1" v-for="(f, index) in fields" :key="index">
                                                <label class="text-white text-sm">{{f.label}}</label>
                                                <input v-if="f.type =='singleText'" v-model="f.value" :required="f.required" type="text" class="input" :placeholder="f.placeholder">
                                                <textarea v-if="f.type =='textArea'" v-model="f.value" :required="f.required" type="text" class="input py-2" :placeholder="f.placeholder" />
                                            </div>
                                            

                                            <div class="w-full">
                                                <div @click="sendEmail()"
                                                    class="bg-yellow-500 cursor-pointer hover:bg-opacity-90 rounded h-12 flex items-center justify-center text-white">
                                                    Submit
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="thankyou"
                                            class="bg-vgreen w-full rounded-lg p-10 flex flex-wrap items-center justify-center">
                                            <h3 class="text-white header text-2xl mb-2">Thanks for reaching out</h3>
                                            <p class="text-white text-sm">One of our team will be intouch with you shortly</p>
                                            
                                            <div class="w-full mt-6">
                                                <div @click="goBack()"
                                                    class="bg-yellow-500 cursor-pointer hover:bg-opacity-90 rounded h-12 flex items-center justify-center text-white">
                                                    Send another
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
  </template>
  
  <script>
  import axios from 'axios';

export default {
    props: ["asset"],
    data(){
        return{
            thankyou: false
        }
    },
    computed:{
        fields(){
            let arr = []
            this.asset.value.form.fields.forEach(f => {
                let obj = f
                this.$set(obj, "value", "")
                arr.push(obj)
            })
            return arr
        }
    },
    methods:{
        goBack(){
            this.fields.forEach(f => {
                f.value = ""
            })

            this.thankyou = false
        },
        sendEmail(){
            const fields = this.fields

            let htmlFields = ``
            fields.forEach(f => {
                const i = `<tr><td width="100px">${f.label}</td> <td width="100px">${f.value}</td> </tr>`
                htmlFields = htmlFields + i
            })

            let html = `
            <div style="width: 100%; padding: 40px; background-color: #efefef;">
            <div style="width: 600px; margin: auto; background-color: #fff; padding: 50px; border-radius: 40px;">
            <div><img src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif" width="200px" style="margin-bottom: 20px"/></div>
                <div><h1 class="font-size: 26px;">Feedback from form: <strong>${this.asset.value.form.title}</strong></h1></div>
            <table class="margin: 50px 0;">
            ${htmlFields}    
            </table>
            </div>
            `

            console.log("htmlFields", htmlFields)

            const payload = {
                to: 'josh@jblventures.com.au',
                from: 'josh@jblventures.com.au',
                subject: 'Form from morgan business sales',
                text: 'This is an email',
                html: html
            }

            axios.post('https://us-central1-morgan-569c6.cloudfunctions.net/widgets/email/send-mail', payload).then((response) => {
                console.log('Response from email', response.data)
                this.thankyou = true
            })
        }
    }
};
</script>
  
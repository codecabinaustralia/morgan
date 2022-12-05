<template>
  <div>
      <!-- Contact Form  -->
      <div v-if="agent && showContactForm" class="w-full h-screen fixed bg-vgreen z-50">
          <div class="w-full h-full flex items-center justify-center relative">

              <div class="absolute top-0 right-0 m-4">
                  <div @click="showContactForm = false"
                      class="bg-black hover:bg-opacity-20 cursor-pointer bg-opacity-10 rounded text-white h-20 w-20 flex items-center justify-center">
                      <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                  </div>
              </div>
              <div class="w-96 bg-white shadow-lg p-10 rounded-xl">
                  <h2 class="header-bold text-2xl text-vgreen">Enquire Now</h2>
                  <p class="text-vgray mt-2">Leave an enquiry with {{ agent.firstName }} {{ agent.lastName }}. You can
                      expect a call back within 48 hrs.</p>

                  <div class="w-full mt-4">
                      <div class="w-full flex relative mb-4">
                          <input v-model="enquire.name" type="text"
                              class="input outline-none focus:text-vgreen focus:border-vgreen">
                          <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                              Your name</div>
                      </div>

                      <div class="w-full flex relative mb-4">
                          <input v-model="enquire.email" type="text"
                              class="input outline-none focus:text-vgreen focus:border-vgreen">
                          <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                              Your email</div>
                      </div>

                      <div class="w-full flex relative mb-4">
                          <input v-model="enquire.phone" type="text"
                              class="input outline-none focus:text-vgreen focus:border-vgreen">
                          <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                              Your phone</div>
                      </div>

                      <div class="w-full mt-4 text-center">
                  <div @click="sendForm()"
                      class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                      Enquire Now</div>
              </div>


                  </div>
              </div>


          </div>
      </div>

      <!-- Nav  -->
      <div v-if="!isPdf && !loading && passedValidation" class="w-full fixed" style="z-index: 999999999999999999999999999999999999">
          <listing-nav :agent="agent" v-if="agent" />
      </div>

      <!-- Password Modal  -->
      <div v-if="!isPdf && !passedValidation" class="w-full bg-vgreen h-screen fixed z-50">
          <div class="w-full h-full flex items-center justify-center">
              <div class="w-96 rounded-xl bg-white px-10 pb-10 shadow-lg">

                  <div class="w-full text-center my-10">
                      <h3>You have arrived at a private page, to view the contents please enter your email and
                          supplied password</h3>
                  </div>

                  <div class="w-full flex flex-wrap">
                      <div class="w-full flex relative">
                          <input v-model="email" required type="text"
                              class="input outline-none focus:text-vgreen focus:border-vgreen">
                          <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                              Email</div>
                      </div>
                      <div class="w-full flex mt-3 relative">
                          <input v-model="password" required type="password"
                              class="input outline-none focus:text-vgreen focus:border-vgreen">
                          <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                              Password</div>
                      </div>

                      <div v-if="error" class="mt-4 w-full text-center bg-red-50 text-red-500 text-sm rounded p-4">
                          {{ error }}
                      </div>

                      <div class="w-full mt-4 text-center">
                          <div @click="login()"
                              class="bg-vgreen rounded py-4 px-10 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                              Unlock</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div v-if="!loading && passedValidation & webbook.status == 'Active'" class="w-full flex flex-wrap pt-20">
          <div v-if="!isPdf" class="flex-shrink">
              <div class="h-screen fixed w-56 bg-gray-100 shadow-lg pt-0 text-sm">
                  <div class="w-full" v-for="(section, index) in item.sections" :key="index">
                      <span @click="scrollMeTo(section.title)" v-if="section.status == 'Active'"
                          :class="section.title == currentSection ? 'bg-vgreen text-white' : 'hover:bg-gray-200 cursor-pointer'"
                          class="px-4 h-12 flex items-center cursor-pointer ">{{ section.title }}</span>
                  </div>
              </div>
          </div>

          <div v-if="!isPdf" @click="showTranslation = !showTranslation" style="z-index: 9999999999999999999999" class="fixed bottom-0 ml-4 left-0 w-70 mb-6 mr-4">
        <div class="w-full hover:bg-gray-100 cursor-pointer bg-white p-3 flex space-x-2 rounded-lg shadow-lg">
          <div class="flex-shrink">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png"
              class="w-10 h-10 object-cover" alt="">
          </div>

          <div class="flex-grow h-10 flex items-center">
            <h2 class="text-vgray text-sm">Change language</h2>
          </div>
        </div>
      </div>

      <div v-if="!isPdf" :class="!showTranslation ? 'hidden' : ''" style="z-index: 9999999999999999999999;" class="fixed bg-gray-900 bg-opacity-90 top-0 left-0 z-50 h-screen w-full">
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-1/2" @click="(showTranslation = false)">
              <Translator class="bg-white rounded shadow-lg h-96 overflow-y-scroll" />
          </div>
        </div>
      </div>



          <div :class="isPdf ? '' : 'pl-56'" class="flex-grow">
              
          <div class="w-full bg-white flex">
                  <div class="container mx-auto justify-center">
                      <div class="w-full flex flex-wrap " v-for="(section, sIndex) in item.sections"
                          :key="sIndex + 's'">
                          <div class="w-full" :id="toSlug(section.title)">
                              <div class="html2pdf__page-break w-full flex flex-wrap" v-for="(w, wIndex) in section.widgets"
                                  :key="wIndex + 'w'">
                                  <widget-hero :asset="w" v-if="w.type == 'hero'" class="w-full" />
                                  <widget-executive-summary :asset="w" v-if="w.type == 'executiveSummary'"
                                      class="w-full px-20" />
                                  <widget-header :asset="w" v-if="w.type == 'header'" class="w-full px-20" />
                                  <widget-agents :asset="w" v-if="w.type == 'agents'" class="w-full px-20" />
                                  <widget-text-area :asset="w" v-if="w.type == 'textArea'" class="w-full px-20" />
                                  <widget-iframe :class="isPdf ? 'hidden' : ''" :asset="w" v-if="w.type == 'iFrame'" class="w-full px-20" />
                                  <widget-form :class="isPdf ? 'hidden' : ''" :asset="w" v-if="w.type == 'form'" class="w-full px-20" />
                                  <widget-image :asset="w" v-if="w.type == 'image'" class="w-full px-20" />
                                  <widget-image-text :asset="w" v-if="w.type == 'imageText'" class="w-full px-20" />
                                  <widget-image-gallery :asset="w" v-if="w.type == 'imageGallery'" class="w-full px-20" />
                                  <widget-image-gallery-list :asset="w" v-if="w.type == 'imageGalleryList'" class="w-full px-20" />
                                  <widget-cta :asset="w" v-if="w.type == 'cta'" class="w-full px-20" />
                                  <widget-pdf :class="isPdf ? 'hidden' : ''" :asset="w" v-if="w.type == 'pdf'" class="w-full px-20" />
                                  <widget-contact-form :class="isPdf ? 'hidden' : ''" :asset="w" v-if="w.type == 'contactForm'"
                                      class="w-full px-20" />
                                  <widget-link :asset="w" v-if="w.type == 'link'" class="w-full px-20" />
                                  <widget-video :class="isPdf ? 'hidden' : ''" :asset="w" v-if="w.type == 'video'" class="w-full px-20" />
                                  <widget-map :asset="w" v-if="w.type == 'map'" class="w-full px-20" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
     
        


              <section  v-if="!isPdf" class="w-full flex">
                  <div class="container mx-auto px-10 flex h-full items-center flex">
                      <div class="flex-shrink mr-auto">
                          <img width="200"
                              src="https://static.wixstatic.com/media/63b119_0a5614dcd14f4896905e2d79bdc09c20~mv2.gif"
                              alt="Morgan Business Sales" />
                      </div>
                      <div class="flex-shrink flex">
                          <div class="text-vgray text-sm">©2022 by Morgan Business Sales. <router-link
                                  :to="{ name: 'Home' }" class="text-vgreen cursor-pointer">Privacy Policy
                              </router-link>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  </div>

</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

import WidgetHero from "@/components/widgets/WidgetHero";
import WidgetExecutiveSummary from "@/components/widgets/WidgetExecutiveSummary";
import WidgetHeader from "@/components/widgets/WidgetHeader";
import WidgetAgents from "@/components/widgets/WidgetAgents";
import WidgetTextArea from "@/components/widgets/WidgetTextArea";
import WidgetIframe from "@/components/widgets/WidgetIframe";
import WidgetForm from "@/components/widgets/WidgetForm";
import WidgetImage from "@/components/widgets/WidgetImage";
import WidgetImageText from "@/components/widgets/WidgetImageText";
import WidgetImageGallery from "@/components/widgets/WidgetImageGallery";
import WidgetImageGalleryList from "@/components/widgets/WidgetImageGalleryList";
import WidgetCta from "@/components/widgets/WidgetCta";
import WidgetPdf from "@/components/widgets/WidgetPdf";
import WidgetContactForm from "@/components/widgets/WidgetContactForm";
import WidgetLink from "@/components/widgets/WidgetLink";
import WidgetMap from "@/components/widgets/WidgetMap";
import WidgetVideo from "@/components/widgets/WidgetVideo";

import ListingNav from "@/components/navs/listingNav";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { Translator } from 'vue-google-translate';
import { bus } from '../main'

export default {
  data() {
      return {
          webbook: null,
          showTranslation: false,
          agent: null,
          enquire: {
              name: '',
              email: '',
              phone: ''
          },
          showContactForm: false,
          error: "",
          loading: true,
          item: null,
          currentSection: null,
          email: "",
          password: "",
          passedValidation: true,
      }
  },
  computed:{
    isPdf(){
      console.log('this.$route.query.pdf', this.$route.query.pdf)
      let res = false
      if(this.$route.query.pdf) res = true
      return res
    }
  },
  methods: {
      sendForm(){
          const sgMail = require('@sendgrid/mail');
          sgMail.setApiKey('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');
          const msg = {
          to: 'josh@jblventures.com.au',
          from: this.enquire.email, // Use the email address or domain you verified above
          subject: `Enquiry from ${this.webbook.title}`,
          text: `You have an equiry from ${this.enquire.name} reguarding ${this.webbook.title}. You can phone them back on: ${this.enquire.phone} or by email: ${this.enquire.email}`,
          html: `You have an equiry from ${this.enquire.name} reguarding <strong>${this.webbook.title}</strong>. You can phone them back on: <strong>${this.enquire.phone}</strong> or by email: <strong>${this.enquire.email}</strong>`,
          };
          //ES6
          sgMail
          .send(msg)
          .then(() => {}, error => {
              console.error(error);

              if (error.response) {
              console.error(error.response.body)
              }
          });
      },
      async login() {
          console.log("webbook", this.webhook)
          if (this.item.password == this.password) {

              await addDoc(collection(db, "webbooks", this.webbook.id, "visitors"), {
                  createdAt: new Date(),
                  email: this.email,
                  passwordAttempt: this.password,
                  attempt: true
              });

              this.passedValidation = true

          } else {
              const docRef = await addDoc(collection(db, "webbooks", this.webbook.id, "visitors"), {
                  createdAt: new Date(),
                  email: this.email,
                  passwordAttempt: this.password,
                  attempt: false
              });

              this.error = "Sorry the password is invalid"
          }
      },
      toSlug(item) {
          const i = item.split(" ").join("-")
          console.log("item", i)
          return i
      },
      scrollMeTo(index) {
          const t = this.toSlug(index)
          const x = "#" + t
          this.$scrollTo(x, 500, { easing: 'ease-in-out', offset: -160 })
      },
      async getData() {
          this.loading = true
          const docRef = doc(db, "webbooks", this.$route.params.id.split('--')[0]);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
              let obj = docSnap.data()
              this.$set(obj, "id", docSnap.id)
              this.item = obj
              this.webbook = obj
              if (this.item.password != '') this.passedValidation = false
              else this.passedValidation = true
              this.getAgent()

          } else {
            this.$router.push('/')
              this.loading = false
          }
      },
      async getAgent() {
          this.loading = true
          const docRef = doc(db, "agents", this.webbook.agent.id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
              let obj = docSnap.data()
              this.$set(obj, "id", docSnap.id)
              this.agent = obj

              this.loading = false
          } else {
              this.loading = false
          }
      },
      generateReport() {
          this.$refs.html2Pdf.generatePdf()
      }
  },
  created() {
      this.getData()
      bus.$on('toggleView', (data) => {
          this[data] = !this[data];
      })
  },
  components: {
      Translator,
      ListingNav,
      WidgetExecutiveSummary,
      WidgetHeader,
      WidgetHero,
      WidgetAgents,
      WidgetTextArea,
      WidgetIframe,
      WidgetForm,
      WidgetImage,
      WidgetImageText,
      WidgetImageGallery,
      WidgetImageGalleryList,
      WidgetCta,
      WidgetLink,
      WidgetContactForm,
      WidgetMap,
      WidgetVideo,
      WidgetPdf,
      VueHtml2pdf
  },
};
</script>

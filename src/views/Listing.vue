<template>
  <div>
    <!-- Contact Form  -->
    <div
      v-if="agent && showContactForm"
      class="print:hidden w-full h-screen fixed bg-vgreen"
      style="z-index: 999999999999999999999999999999999999999"
    >
      <div class="w-full h-full flex items-center justify-center relative">
        <div class="absolute top-0 right-0 m-4">
          <div
            @click="showContactForm = false"
            class="
              bg-black
              hover:bg-opacity-20
              cursor-pointer
              bg-opacity-10
              rounded
              text-white
              h-20
              w-20
              flex
              items-center
              justify-center
            "
          >
            <svg
              class="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        <div class="w-96 bg-white shadow-lg p-10 rounded-xl">
          <h2 class="header-bold text-2xl text-vgreen">Leave a question</h2>
          <p class="text-vgray mt-2">
            Leave a question with {{ agent.firstName }} {{ agent.lastName }}.
            You can expect a call back within 48 hrs.
          </p>

          <div class="w-full mt-4">
            <div class="w-full flex relative mb-4">
              <input
                v-model="enquire.name"
                type="text"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Your name
              </div>
            </div>

            <div class="w-full flex relative mb-4">
              <input
                v-model="enquire.email"
                type="text"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Your email
              </div>
            </div>

            <div class="w-full flex relative mb-4">
              <input
                v-model="enquire.phone"
                type="text"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Your phone
              </div>
            </div>

            <div class="w-full flex relative mb-4">
              <input
                v-model="enquire.question"
                type="text"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Your question
              </div>
            </div>

            <div class="w-full mt-4 text-center">
              <div
                @click="
                  sendForm(agent.email),
                    sendForm('jade@morganbusinesssales.com')
                "
                class="
                  bg-vgreen
                  rounded
                  py-4
                  px-10
                  text-sm text-white
                  header-medium
                  cursor-pointer
                  hover:bg-green-600
                "
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav  -->
    <div
      v-if="!isPdf && !loading && passedValidation"
      class="print:hidden w-full fixed"
      style="z-index: 999999999999999999999999999999999999"
    >
      <listing-nav :agent="agent" v-if="agent" />
    </div>

    <!-- Password Modal  -->
    <div
      v-if="!isPdf && !passedValidation"
      class="w-full bg-vgreen h-screen fixed z-50"
    >
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-96 rounded-xl bg-white px-10 pb-10 shadow-lg">
          <div class="w-full text-center my-10">
            <h3>
              You have arrived at a private page, to view the contents please
              enter your email and supplied password
            </h3>
          </div>

          <div class="w-full flex flex-wrap">
            <div class="w-full flex relative">
              <input
                v-model="email"
                required
                type="text"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Email
              </div>
            </div>
            <div class="w-full flex mt-3 relative">
              <input
                v-model="password"
                required
                type="password"
                class="input outline-none focus:text-vgreen focus:border-vgreen"
              />
              <div
                class="
                  bg-white
                  rounded
                  header-medium
                  text-vgreen
                  absolute
                  text-xs
                  top-0
                  left-0
                  -mt-2
                  ml-4
                  px-2
                "
              >
                Password
              </div>
            </div>

            <div
              v-if="error"
              class="
                mt-4
                w-full
                text-center
                bg-red-50
                text-red-500 text-sm
                rounded
                p-4
              "
            >
              {{ error }}
            </div>

            <div class="w-full mt-4 text-center">
              <div
                @click="login()"
                class="
                  bg-vgreen
                  rounded
                  py-4
                  px-10
                  text-sm text-white
                  header-medium
                  cursor-pointer
                  hover:bg-green-600
                "
              >
                Unlock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!loading && passedValidation & (webbook.status == 'Active')"
      class="w-full flex flex-wrap pt-32"
    >
      <div class="sm:flex-shrink print:hidden hidden sm:block">
        <div class="h-screen fixed w-60 bg-gray-100 pt-32 sm:pt-10 shadow-lg text-sm">
          <div class="w-full flex flex-wrap h-full pb-24 pt-10">
            <div class="h-4/6 overflow-y-scroll z-50 w-full">
              <div
                class="w-full px-6"
                v-for="(section, index) in item.sections"
                :key="index"
              >
                <span
                  @click="scrollMeTo(section.title)"
                  v-if="section.status == 'Active'"
                  :class="
                    section.title == currentSection
                      ? 'bg-vgreen text-white'
                      : 'hover:bg-gray-200 cursor-pointer'
                  "
                  class="px-4 h-12 flex items-center cursor-pointer leading-none my-4"
                  >{{ section.title }}</span
                >
              </div>
            </div>

            <div
              class="
                h-2/6
                print:hidden
                ml-4
                left-0
                w-70
                mr-4
                items-end
                flex flex-wrap
              "
            >
              <div class="w-full">
                <!-- language  -->
                <div
                  @click="showTranslation = !showTranslation"
                  class="
                    w-52
                    -mb-2
                    hover:bg-gray-100
                    cursor-pointer
                    bg-white
                    p-3
                    h-16
                    flex
                    space-x-2
                    rounded-lg
                    shadow-lg
                  "
                >
                  <div class="flex-shrink">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png"
                      class="w-10 h-10 object-cover"
                      alt=""
                    />
                  </div>

                  <div class="flex-grow h-10 flex items-center">
                    <h2 class="text-vgray text-sm">Change language</h2>
                  </div>
                </div>

                <!-- PDF  -->
                <div class="print:hidden w-52 mr-6 mt-4">
                  <div
                    @click="generateReport()"
                    class="
                      bg-white
                      rounded
                      shadow-lg
                      p-3
                      rounded-lg
                      cursor-pointer
                      hover:bg-gray-100
                      text-gray-600 text-sm
                    "
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3330NBGjlAd5kJ6wSI5PxN2l0lUlJvIkTJrEZgI&s"
                      class="w-10 h-10 object-cover inline-block"
                    />
                    Print PDF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="showNav ? 'fixed top-0 left-0 h-full' : 'hidden'"
        style="z-index: 9999999999999999999999"
        class="print:hidden sm:hidden"
      >
        <div class="h-full fixed w-9/12 bg-gray-100 text-sm pb-10 shadow-lg">
          <div class="h-full flex flex-wrap">
            <div class="h-1/5 w-full flex justify-center items-center bg-white">
              <img
                width="200"
                :src="require('@/assets/logo.png')"
                alt="Morgan Business Sales"
                class="object-cover h-20"
              />
            </div>
            <div class="h-3/5 px-4 overflow-y-scroll py-6">
              <div
                class="w-full px-6"
                v-for="(section, index) in item.sections"
                :key="index"
              >
                <span
                  @click="scrollMeTo(section.title), (showNav = false)"
                  v-if="section.status == 'Active'"
                  :class="
                    section.title == currentSection
                      ? 'bg-vgreen text-white'
                      : 'hover:bg-gray-200 cursor-pointer'
                  "
                  class="px-4 h-12 flex items-center cursor-pointer"
                  >{{ section.title }}</span
                >
              </div>
            </div>
            <div
              class="
                px-4
                h-1/5
                print:hidden
                ml-4
                left-0
                w-70
                mr-4
                flex flex-wrap
              "
            >
              <div class="w-full">
                <!-- language  -->
                <div
                  @click="showTranslation = !showTranslation"
                  class="
                    w-52
                    hover:bg-gray-100
                    cursor-pointer
                    bg-white
                    p-3
                    h-16
                    flex
                    space-x-2
                    rounded-lg
                    shadow-lg
                  "
                >
                  <div class="flex-shrink">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png"
                      class="w-10 h-10 object-cover"
                      alt=""
                    />
                  </div>

                  <div class="flex-grow h-10 flex items-center">
                    <h2 class="text-vgray text-sm">Change language</h2>
                  </div>
                </div>

                <!-- PDF  -->
                <div class="print:hidden w-52 mr-6 mt-1">
                  <div
                    @click="generateReport()"
                    class="
                      bg-white
                      rounded
                      shadow-lg
                      p-3
                      rounded-lg
                      cursor-pointer
                      hover:bg-gray-100
                      text-gray-600 text-sm
                    "
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3330NBGjlAd5kJ6wSI5PxN2l0lUlJvIkTJrEZgI&s"
                      class="w-10 h-10 object-cover inline-block"
                    />
                    Print PDF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="!showTranslation ? 'hidden' : ''"
        style="z-index: 9999999999999999999999"
        class="
          print:hidden
          fixed
          bg-gray-900 bg-opacity-90
          top-0
          left-0
          z-50
          h-screen
          w-full
        "
      >
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-1/2" @click="showTranslation = false">
            <Translator
              class="bg-white rounded shadow-lg h-96 overflow-y-scroll"
            />
          </div>
        </div>
      </div>

      <div class="flex-grow print:pl-0 pl-0 sm:pl-56 pt-40 sm:pt-20">
        <div class="w-full bg-white flex">
          <div class="max-w-7xl mx-auto justify-center">
            <div
              class="w-full flex flex-wrap"
              v-for="(section, sIndex) in item.sections"
              :key="sIndex + 's'"
            >
              <div class="w-full" :id="toSlug(section.title)">
                <div
                  class="
                    contentPage
                    html2pdf__page-break
                    w-full
                    flex flex-wrap
                    print:my-20
                  "
                  :class="w.type == 'pageBreak' ? 'print-pdf-break' : ''"
                  v-for="(w, wIndex) in section.widgets"
                  :key="wIndex + 'w'"
                >
                  <widget-hero
                    :asset="w"
                    v-if="w.type == 'hero'"
                    class="w-full"
                  />
                  <widget-executive-summary
                    :asset="w"
                    v-if="w.type == 'executiveSummary'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-header
                    :asset="w"
                    v-if="w.type == 'header'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-agents
                    :asset="w"
                    v-if="w.type == 'agents'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-text-area
                    :asset="w"
                    v-if="w.type == 'textArea'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-iframe
                    :asset="w"
                    v-if="w.type == 'iFrame'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-form
                    :asset="w"
                    :agent="agent"
                    v-if="w.type == 'form'"
                    class="w-full px-0 sm:px-20"
                  />
                  <widget-image
                    :asset="w"
                    v-if="w.type == 'image'"
                    class="w-full sm:px-20"
                  />
                  <widget-image-text
                    :asset="w"
                    v-if="w.type == 'imageText'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-image-gallery
                    :asset="w"
                    v-if="w.type == 'imageGallery'"
                    class="w-full sm:px-20"
                  />
                  <widget-image-gallery-list
                    :asset="w"
                    v-if="w.type == 'imageGalleryList'"
                    class="w-full sm:px-20"
                  />
                  <widget-cta
                    :asset="w"
                    v-if="w.type == 'cta'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-pdf
                    :asset="w"
                    v-if="w.type == 'pdf'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-contact-form
                    :asset="w"
                    v-if="w.type == 'contactForm'"
                    class="w-full px-10 sm:px-20 print:hidden"
                  />
                  <widget-link
                    :asset="w"
                    v-if="w.type == 'link'"
                    class="w-full px-10 sm:px-20"
                  />
                  <widget-video
                    :asset="w"
                    v-if="w.type == 'video'"
                    class="w-full px-0 sm:px-20"
                  />
                  <widget-map
                    :asset="w"
                    v-if="w.type == 'map'"
                    class="w-full px-10 sm:px-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section v-if="!isPdf" class="w-full flex">
          <div class="max-w-7xl mx-auto px-10 flex h-full items-center flex">
            <div class="flex-shrink mr-auto">
              <img
                width="200"
                :src="require('@/assets/logo.png')"
                alt="Morgan Business Sales"
              />
            </div>
            <div class="flex-shrink flex">
              <div class="text-vgray text-sm">
                ©2022 by Morgan Business Sales.
                <router-link
                  :to="{ name: 'Home' }"
                  class="text-vgreen cursor-pointer"
                  >Privacy Policy
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
import VueHtml2pdf from "vue-html2pdf";

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
import { Translator } from "vue-google-translate";
import { bus } from "../main";

export default {
  data() {
    return {
      showNav: false,
      webbook: null,
      showTranslation: false,
      agent: null,
      enquire: {
        name: "",
        email: "",
        phone: "",
        question: "",
      },
      showContactForm: false,
      error: "",
      loading: true,
      item: null,
      currentSection: null,
      email: "",
      password: "",
      passedValidation: true,
    };
  },
  computed: {
    isPdf() {
      console.log("this.$route.query.pdf", this.$route.query.pdf);
      let res = false;
      if (this.$route.query.pdf) res = true;
      return res;
    },
  },
  methods: {
    sendForm(email) {
      let html = `
            <div style="width: 100%; padding: 40px; background-color: #efefef;">
            <div style="width: 600px; margin: auto; background-color: #fff; padding: 50px; border-radius: 40px;">
            <div><img :src="require('@/assets/logo.png')" width="200px" style="margin-bottom: 20px"/></div>
                <div><h1 class="font-size: 26px;">Feedback from form: <strong>${this.webbook.title}</strong></h1></div>
            <table class="margin: 50px 0;">
            <tbody>
            <tr> 
            <td width="200" style="font-weight: bold">Name</td>
            <td width="200">${this.enquire.name}</td>
            </tr>

            <tr> 
            <td width="200" style="font-weight: bold">Email</td>
            <td width="200">${this.enquire.email}</td>
            </tr>

            <tr> 
            <td width="200" style="font-weight: bold">Phone</td>
            <td width="200">${this.enquire.phone}</td>
            </tr>

            <tr> 
            <td width="200" style="font-weight: bold">Question</td>
            <td width="200">${this.enquire.question}</td>
            </tr>
            </tbody>   
            </table>
            </div>
            `;

      const payload = {
        to: email,
        from: "jade@morganbusinesssales.com",
        subject: `You have a question for ${this.webbook.title}`,
        text: `This is a quesiton from ${this.enquire.name}. ${this.enquire.question} - from listing: ${this.webbook.title} - email: ${this.enquire.email} - phone: ${this.enquire.phone}`,
        html: html,
      };

      axios
        .post(
          "https://us-central1-morgan-569c6.cloudfunctions.net/widgets/email/send-mail",
          payload
        )
        .then((response) => {
          console.log("Response from email", response.data);
          this.showContactForm = false;
        });
    },
    async login() {
      console.log("webbook", this.webhook);
      if (this.item.password == this.password) {
        await addDoc(collection(db, "webbooks", this.webbook.id, "visitors"), {
          createdAt: new Date(),
          email: this.email,
          passwordAttempt: this.password,
          attempt: true,
        });

        this.passedValidation = true;
      } else {
        const docRef = await addDoc(
          collection(db, "webbooks", this.webbook.id, "visitors"),
          {
            createdAt: new Date(),
            email: this.email,
            passwordAttempt: this.password,
            attempt: false,
          }
        );

        this.error = "Sorry the password is invalid";
      }
    },
    toSlug(item) {
      const i = item.split(" ").join("-");
      console.log("item", i);
      return i;
    },
    scrollMeTo(index) {
      const t = this.toSlug(index);
      const x = "#" + t;
      this.$scrollTo(x, 500, { easing: "ease-in-out", offset: -160 });
    },
    async getData() {
      console.log("getting data", this.$route.params.id.split("--")[0]);
      this.loading = true;
      const docRef = doc(db, "webbooks", this.$route.params.id.split("--")[0]);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let obj = docSnap.data();
        this.$set(obj, "id", docSnap.id);
        this.item = obj;
        this.webbook = obj;
        if (this.item.password != "") this.passedValidation = false;
        else this.passedValidation = true;
        this.getAgent();
      } else {
        this.$router.push("/");
        this.loading = false;
      }
    },
    async getAgent() {
      this.loading = true;
      const docRef = doc(db, "agents", this.webbook.agent.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let obj = docSnap.data();
        this.$set(obj, "id", docSnap.id);
        this.agent = obj;

        this.loading = false;
      } else {
        this.loading = false;
      }
    },
    generateReport() {
      window.print();
    },
  },
  created() {
    this.getData();
    bus.$on("toggleView", (data) => {
      this[data] = !this[data];
    });
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
    VueHtml2pdf,
  },
};
</script>

<style>
.contentPage {
  page-break-inside: avoid;
}
</style>

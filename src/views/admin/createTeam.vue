<template>
  <div class="w-full flex">
    <admin-sidebar />
    <div class="flex-grow bg-gray-100 h-screen">
      <admin-primary />
      <div
        class="container mx-auto p-10 flex flex-wrap h-screen overflow-y-scroll -mt-20 pt-24 z-10 relative"
      >
        <div
          v-if="error"
          class="my-4 w-full bg-red-50 text-red-500 text-sm rounded p-4"
        >
          <strong>ERROR:</strong> {{ error }}
        </div>

        <div class="w-3/4 pr-2">
          <div class="bg-white rounded-lg p-4">
            <div class="flex-shrink">
              <h2 class="header-semiBold text-sm text-vgreen">
                Broker Profile
              </h2>
              <div class="w-full flex h-full">
                <div class="flex-1 xl:overflow-y-auto">
                  <div
                    class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8"
                  >
                    <div class="w-full h-10">
                      <h1
                        class="text-3xl font-bold tracking-tight text-blue-gray-900"
                      >
                        {{ item.firstName }} {{ item.lastName }}
                      </h1>
                    </div>

                    <form
                      class="divide-y-blue-gray-200 mt-2 space-y-8 divide-y"
                    >
                      <div
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6"
                      >
                        <div class="sm:col-span-6 mb-6">
                          <p class="text-xs text-vgray">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>

                        <div class="sm:col-span-3">
                          <div class="w-full flex relative">
                            <input
                              type="text"
                              v-model="item.firstName"
                              class="input outline-none focus:text-vgreen focus:border-vgreen"
                            />
                            <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2"
                            >
                              First Name
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <div class="w-full flex relative">
                            <input
                              type="text"
                              v-model="item.lastName"
                              class="input outline-none focus:text-vgreen focus:border-vgreen"
                            />
                            <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2"
                            >
                              Last Name
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <div class="w-full flex relative">
                            <input
                              type="text"
                              v-model="item.email"
                              class="input outline-none focus:text-vgreen focus:border-vgreen"
                            />
                            <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2"
                            >
                              Email
                            </div>
                          </div>
                        </div>
                        <div class="sm:col-span-3">
                          <div class="w-full flex relative">
                            <input
                              type="text"
                              v-model="item.phone"
                              class="input outline-none focus:text-vgreen focus:border-vgreen"
                            />
                            <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2"
                            >
                              Phone
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-6">
                          <div class="w-full flex relative">
                            <input
                              type="text"
                              v-model="item.password"
                              class="input outline-none focus:text-vgreen focus:border-vgreen"
                            />
                            <div
                              class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2"
                            >
                              Password
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-6">
                          <label
                            for="photo"
                            class="block text-sm font-medium text-blue-gray-900"
                            >Photo</label
                          >
                          <div class="mt-1 flex items-center">
                            <preloader v-if="imageLoading" />

                            <img
                              v-if="!imageLoading && img1"
                              class="inline-block h-12 w-12 rounded-full"
                              :src="img1"
                              alt=""
                            />
                            <div class="ml-4 flex">
                              <div
                                class="relative flex cursor-pointer items-center rounded-md border border-vgreen bg-white py-2 px-3 shadow-sm"
                              >
                                <label
                                  for="user-photo"
                                  class="pointer-events-none relative text-sm font-medium text-blue-gray-900"
                                >
                                  <span class="text-vgreen">Change</span>
                                  <span class="sr-only"> user photo</span>
                                </label>
                                <input
                                  @change="previewImage"
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                />
                              </div>
                              <!-- <button type="button"
                                                                class="text-red-600 cursor-pointer hover:text-red-700 ml-2 text-sm">Remove</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/4 pl-2">
          <div class="bg-white rounded-lg p-4">
            <div
              @click="saveitem()"
              class="bg-vgreen rounded p-4 text-center text-sm text-white header-medium cursor-pointer hover:bg-green-600"
            >
              Save Form
            </div>
            <div class="mt-2 text-vgray text-xs">Last updated 20 Sep 2022</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/navs/adminSidebar";
import AdminPrimary from "@/components/navs/adminPrimary";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js";

import Preloader from "@/components/loader";

export default {
  data() {
    return {
      imageLoading: false,
      img1: null,
      imageData: null,
      uploadValue: -1,
      item: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        avatar: "123",
        createdAt: new Date(),
        password: "",
        active: true,
        role: "admin",
        createdAt: new Date(),
      },
      error: "",
    };
  },
  computed: {
    currentTenant() {
      return this.$store.state.currentTenant;
    },
  },
  methods: {
    previewImage(event) {
      this.imageLoading = true;
      console.log("event", event.target.files[0]);
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.img1 = null;

      const storage = getStorage();
      const storageRef = ref(storage, `${this.imageData.name}`);

      const uploadTask = uploadBytesResumable(storageRef, this.imageData);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          this.imageLoading = false;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.img1 = downloadURL;
            this.imageLoading = false;
          });
        }
      );
    },
    async saveitem() {
      createUserWithEmailAndPassword(auth, this.item.email, this.item.password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          try {
            let payload = this.item;
            this.$set(payload, "tenantId", this.currentTenant.tenantId);
            if (this.img1) this.$set(payload, "avatar", this.img1);
            this.$set(payload, "userId", user.uid);
            await setDoc(doc(db, "users", user.uid), payload)
            // Redirect
            this.$router.push({ name: "Teams" });
          } catch (error) {
            this.loading = false;
            this.error = "Sorry there was an error";
          }
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        });

      this.$router.push({ name: "Teams" });
    },
  },
  components: {
    AdminSidebar,
    AdminPrimary,
    Preloader,
  },
};
</script>
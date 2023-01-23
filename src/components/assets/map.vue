<template>
    <div class="w-full flex flex-wrap relative">
        <div class="w-full bg-gray-50 border-b px-6 border-gray-200 h-16 flex items-center relative">

            <div class="absolute top-0 right-0 m-5" @click="close()">
                <svg class="w-6 h-6 text-vgray hover:text-vgreen cursor-pointer" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>

            <h2 class="text-vgray text-lg">Add {{ asset.title }}</h2>
        </div>

        <div class="w-full relative mb-2 mt-4 px-6">
                <select v-model="value.zoom" class="input outline-none focus:text-vgreen focus:border-vgreen">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                </select>
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-2 px-2">
                    Zoom Level - 1 equal to globe view</div>
            </div>

        <div class="w-full flex  mb-2 p-6">
            <div class="w-full relative">
                <input ref="autocomplete" v-model="address" type="text" placeholder="Enter address"
                    class="input outline-none focus:text-vgreen focus:border-vgreen">
                <div class="bg-white rounded header-medium text-vgreen absolute text-xs top-0 left-0 -mt-2 ml-4 px-2">
                    Enter Address</div>
            </div>
        </div>


<div class="w-full flex flex-wrap px-6" v-for="(a, index) in value.items" :key="('a' + index)">
    <div class="w-full flex bg-gray-100 rounded p-3 text-sm text-gray-600">
        <div class="flex-grow">
            {{a.address}}
        </div>
        <div class="flex-shrink">
            <svg @click="removeAddress(index)" class="w-4 h-4 text-red-600 cursor-pointer hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
    </div>
</div>


        <div class="w-full h-16 bg-gray-100 text-center mt-3 flex items-center justify-end px-6">
            <span @click="saveItem()"
                class="bg-vgreen rounded py-2 px-4 text-sm text-white header-medium cursor-pointer hover:bg-green-600">
                Save Widget</span>
        </div>
    </div>
</template>

<script>
import { bus } from '../../main'
export default {
    props: ["asset"],
    data() {
        return {
            address: '',
            value: {
                zoom: 13,
                items: []
            }
        }
    },

    mounted() {
        

        const autocomplete = new google.maps.places.Autocomplete(
            this.$refs["autocomplete"]
        );

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            this.value.items.push(
                {
                    address: place.formatted_address,
                    long: place.geometry.location.lng(),
                    lat: place.geometry.location.lat()
                }
            )
            this.address = ''
        })
    },
    methods: {
        removeAddress(index) {
            this.value.items.splice(index, 1)
        },
        saveItem() {

            bus.$emit('saveWidget', this.value);
            bus.$emit('toggleAsset', null);
        },
        close() {
            bus.$emit('toggleAsset', null);
        }
    }, created() {
        if (this.asset.value) this.value = this.asset.value
    }
}
</script>

<style lang="postcss">
.pac-container {
    z-index: 9999999999999999999 !important
}
</style>
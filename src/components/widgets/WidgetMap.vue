<template>
    <section>
        <div class="my-6 w-full z-0 relative">
            <!-- <iframe width="100%" height="450" style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyCk2mQZ7g7MHwSE3b3bJXJeOpG71UHElek&q=' + asset.value.text">
            </iframe> -->
            <GmapMap ref="map"
  :center="markers[0].position"
  :zoom="parseInt(asset.value.zoom)"
  map-type-id="terrain"
  style="width: 100%; height: 500px; z-index: 0; position: relative"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
        </div>
    </section>
</template>
  

<script>


export default {
    props: ["asset"],
    data(){
        return{
            markers: [],
            loading: false
        }
    },
    methods:{
        getMarker(){
            this.loading = true
            let arr = []
            this.asset.value.items.forEach(a => {
                arr.push(
                    {position: {lat: a.lat, lng: a.long}, zoom: a.zoom}
                )
            })
            
            this.markers = arr
            this.loading = false
        }
    },
    mounted(){
        this.getMarker()
    }
};
</script>
  
<template>
    <section class="">
                               <div class="mx-auto max-w-7xl ">
                                
                                <PDFViewer
      :source="asset.value.text"
      style="height: 100vh; width: 100%"
      
    />
                               </div>


                           </section>
</template>

<script>
import PDFViewer from 'pdf-viewer-vue/dist/vue2-pdf-viewer'

export default {
   props: ["asset"],
   components:{
    PDFViewer
   }
};
</script>
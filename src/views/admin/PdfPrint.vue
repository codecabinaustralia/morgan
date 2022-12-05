<template>
    <div>
        <div @click="generateReport()">Generate</div>
        <vue-html2pdf :show-layout="true" :float-layout="false" :enable-download="true" :preview-modal="false"
            filename="hee hee" :pdf-quality="2" :manual-pagination="true"
            pdf-format="a4" pdf-orientation="portrait" pdf-content-width="800px" ref="html2Pdf">
            <section slot="pdf-content">
                <div class="html2pdf__page-break w-full bg-black h-40 flex items-center justify-center text-white">
                    <h1>I am here</h1>
                </div>
                <div class="html2pdf__page-break w-full bg-blue-600 h-40 flex items-center justify-center text-white">
                    <h1>I am here too</h1>
                </div>
            </section>
        </vue-html2pdf>
    </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

export default {
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        }
    },

    components: {
        VueHtml2pdf
    }
}
</script>
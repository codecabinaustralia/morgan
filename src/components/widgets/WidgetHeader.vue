<template>
  <section>
    <div class="w-full my-4">
      <h1 v-if="asset.value.type == 'Header 1'" class="header-bold text-4xl text-vgreen">{{ asset.value.text }}</h1>
      <h2 v-if="asset.value.type == 'Header 2'" class="header-bold text-3xl text-vgreen">{{ asset.value.text }}</h2>
      <h3 v-if="asset.value.type == 'Header 3'" class="header-bold text-2xl text-vgreen">{{ asset.value.text }}</h3>
      <h4 v-if="asset.value.type == 'Header 4'" class="header-bold text-xl text-vgreen">{{ asset.value.text }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  props: ["asset"]
};
</script>
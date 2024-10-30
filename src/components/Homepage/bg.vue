<script setup>
import TextHomepage from "./TextHomepage.vue";
import Show01 from "./ShowItem/Show01.vue";
import Show02 from "./ShowItem/Show02.vue";
import Show03 from "./ShowItem/Show03.vue";
import Show04 from "./ShowItem/Show04.vue";
</script>

<template>
  <section class="bg-light py-5">
    <TextHomepage />
    <div class="container text-center">
      <div class="row">
        <div class="d-flex">
          <Show01 />
          <Show02 />
          <Show03 />
          <Show04 />
        </div>
      </div>
    </div>
  </section>
</template>

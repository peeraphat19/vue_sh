<script setup></script>

<template>
  <div>
    <div class="swiper-slide">
      <div class="banner-item image-zoom-effect">
        <div class="image-holder">
          <img
            src="../../../assets/Picture/_DSC0005-2.jpg"
            alt="product"
            class="img-fluid"
          />
        </div>
        <div class="banner-content py-4">
          <h5 class="element-title text-uppercase">MOON NO.3</h5>
          <p class="fst-italic">The moon of EARTH-78411 (Dinosaur World)</p>
          <div class="btn-left">
            <a
              href="#"
              class="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
              >Discover Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  justify-content: center;
  align-items: center;
  padding: 3px;
}

.image-holder img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.image-holder:hover img {
  transform: scale(1.1);
}
</style>

<script setup>
import { ref } from "vue";
import Popmail from "./popupmail.vue";

const showPopmail = ref(false);

function openPopmail() {
  showPopmail.value = true;
}
</script>

<template>
  <section class="discount-coupon py-2 my-2 py-md-5 my-md-5">
    <div class="container">
      <div class="bg-gray coupon p-5">
        <div class="bold-text position-absolute">10% OFF</div>
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-7 col-md-12 mb-3">
            <div class="coupon-header">
              <h2 class="display-7 d-flex">10% OFF Discount Coupons</h2>
              <p class="m-0 d-flex fst-italic">
                Subscribe to get 10% OFF on all purchases
              </p>
            </div>
          </div>
          <div class="col-md-12 ">
            <div class="btn-wrap" style="font-family: 'Tiny';">
              <button @click="openPopmail" class="btn text-uppercase d-flex">
                Email me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Popmail :showModal="showPopmail" title="Subscribe for Discounts" @update:showModal="val => showPopmail = val" />
</template>

<style>
.discount-coupon .container {
    max-width: 700px;
    margin: auto;
    text-align: center;
}

.discount-coupon .coupon {
  background-color: #f0f0f0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.discount-coupon .bold-text {
  font-size: 60px;
  color: rgba(255, 99, 71, 0.1);
  top: 20px;
  left: 20px;
  font-weight: 700;
  z-index: 1;
}

.discount-coupon .coupon-header h2 {
  font-size: 1.7rem;
  color: #333;
  font-weight: 700;
  z-index: 2;
  position: relative;
}

.discount-coupon .btn-wrap .btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s ease;
}

.discount-coupon .btn-wrap .btn:hover {
  background-color: #ff6347;
}

</style>

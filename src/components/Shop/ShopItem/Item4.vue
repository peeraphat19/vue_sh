<script setup>
function AddClick() {
  alert("Add to Cart success!");
}

function PopView() {
  alert("Quick View");
}
</script>

<template>
    <div class="col mb-4">
              <div class="product-card">
                <div class="card-img">
                  <img
                    src="@/assets/Picture/_DSC9509-1.jpg"
                    alt="MOON NO.4"
                    class="product-image img-fluid"
                  />
                </div>
                <div
                  class="card-detail d-flex justify-content-between align-items-center mt-3"
                >
                  <h3 class="card-title fs-6 fw-normal m-0">MOON NO.4</h3>
                  <span class="card-price fw-bold">$11</span>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <button class="btn btn-primary add-to-cart" @click="AddClick">
                    Add to Cart
                  </button>
                  <button
                    class="btn btn-secondary quick-view"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal1"
                    @click="PopView"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
</template>
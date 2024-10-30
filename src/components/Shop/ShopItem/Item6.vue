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
                    src="../../../assets/Picture/_DSC0005-2.jpg"
                    alt="HALF MOON NO.9"
                    class="product-image img-fluid"
                  />
                </div>
                <div
                  class="card-detail d-flex justify-content-between align-items-center mt-3"
                >
                  <h3 class="card-title fs-6 fw-normal m-0">HALF MOON NO.9</h3>
                  <span class="card-price fw-bold">$45</span>
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
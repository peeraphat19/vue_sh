<script setup>
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isInvalid = ref(false);

function handleSubmit(event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please try again.");
    isInvalid.value = true;
  } else {
    isInvalid.value = false;
    alert("Sign up successful!");
  }
}

function resetValidation() {
  isInvalid.value = false;
}
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="section-title text-center">SIGN UP</h1>
        <form class="col-md-6" @submit="handleSubmit">
          <div class="mb-3">
            <label for="username" class="form-label fst-italic d-flex">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fst-italic d-flex">E-mail address</label>
            <input v-model="email" type="email" class="form-control" id="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label fst-italic d-flex">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label fst-italic d-flex">Confirm Password</label>
            <input
              v-model="confirmPassword"
              @input="resetValidation"
              type="password"
              :class="['form-control', { 'is-invalid': isInvalid }]"
              id="confirmPassword"
              required
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100"
            style="font-family: 'Tiny'; background-color: #ff6347; border-color: #ff6347"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
.is-invalid {
  border-color: red;
}

.discount-coupon .bold-text {
  font-size: 80px;
  color: rgba(255, 99, 71, 0.1);
  top: 20px;
  left: 20px;
  font-weight: 700;
  z-index: 1;
}
</style>

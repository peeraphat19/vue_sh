<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <RouterLink to="/" class="nav-link navbar-brand">JingJai Shop</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item d-flex">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item d-flex">
          <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
        </li>
        <li class="nav-item d-flex">
          <RouterLink to="/promotion" class="nav-link">Promotion</RouterLink>
        </li>
      </ul>

      <div class="d-flex">
        <RouterLink to="/signup" class="btn">Sign up</RouterLink>
      </div>

    </div>
  </div>
</nav>
</template>

<style scoped>
    .navbar-expand-lg {
        border: 1px solid;
        border-color: rgb(197, 196, 196);
        font-family: 'Tiny';
    }

    .d-flex .btn {
        color: white;
        background-color: #ff6347;
    }
</style>
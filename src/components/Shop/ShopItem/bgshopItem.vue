<script setup>
import Item1 from './Item1.vue';
import Item2 from './Item2.vue';
import Item3 from './Item3.vue';
import Item4 from './Item4.vue';
import Item5 from './Item5.vue';
import Item6 from './Item6.vue';
</script>

<template>
    <div class="container py-4">
        <div class="product-content padding-small">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            <Item1/>
            <Item2/>
            <Item3/>
            <Item4/>
            <Item5/>
            <Item6/>
          </div>
        </div>
    </div>
</template>

<style>
h1, h3, a{
    font-family: 'Tiny';
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    transition: box-shadow 0.3s;
}

.product-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-img {
    position: relative;
}

.card-img img {
    border-radius: 5px;
}

.product-store .btn {
    width: 48%;
}
</style>
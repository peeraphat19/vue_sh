<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["showModal", "title"]);
const emit = defineEmits(["update:showModal"]);

const email = ref("");

function closeModal() {
    emit("update:showModal", false);
    email.value = "";
}

function submitForm() {
    if (email.value) {
        alert("Success! Thank you for subscribing.");
        closeModal();
    } else {
        alert("Please enter a valid email address.");
    }
}
</script>

<template>
    <div v-if="showModal" class="modal" tabindex="-1" style="display: block;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"
                                v-model="email" required />
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showModal" class="modal-backdrop" @click="closeModal"></div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
}
</style>

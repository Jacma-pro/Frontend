<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="counter">
    <h2>Compteur</h2>
    <p>Compteur : {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>
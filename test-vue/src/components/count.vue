<!-- script-->
<script setup>
    import { ref } from 'vue'
    const count = ref(0)
    function increment() {
        count.value++
    }
</script>

<!-- template -->
<template>
    <div class="count">
        <p> count {{ count }}</p>
        <button @click="increment">+1</button>
    </div> 
</template>
<script setup lang="ts">

const { data } = await useFetch('/api/hello')

console.log(data.value)

</script>


<template>
    <div class="bg-gray-700 h-screen text-gray-300">
        <p>Hola desde el inicio</p>
    </div>
</template>
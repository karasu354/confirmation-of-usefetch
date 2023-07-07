<script setup>
import { useAPI } from '../composables/api';

const { error } = await useAPI()
let calledAPI = ref(0)
watch(error, () => {
  calledAPI.value += 1
  if (error.value) {
    console.log('api error', calledAPI.value)
  }
})
</script>
<template>
  <div>hello world</div>
</template>

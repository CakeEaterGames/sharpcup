<template>
  <h1>В этот раз без амогусов, я спать хочу</h1>
  <button class="big" @click="increment">{{ counter }}</button>
  <h1 v-if="clicks>10"> Я соврал ඞඞඞඞඞඞඞ </h1>
  <!-- <h1>400!!!</h1>
  <h1>найс</h1>
   -->
</template>

<style>
.big {
  font-size: 60px !important;
}
</style>

 
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios'; 

let counter = ref(0)
let clicks = ref(0)

async function increment(){
  let resp = await axios.post('/counter') 
  counter.value = resp.data
  clicks.value++;
}


onMounted(async () => {
  let resp = await axios.get('/counter') 
  counter.value = resp.data
})

setInterval(async ()=>{
  let resp = await axios.get('/counter') 
  counter.value = resp.data
}, 1000)

</script>
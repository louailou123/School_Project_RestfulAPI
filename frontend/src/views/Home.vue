<script setup> 

import cards from '@/components/Cards.vue';
import navbar from '@/components/navbar.vue'
import stats from '@/components/Stats.vue';
</script>
<template setup>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Sigmar&display=swap" rel="stylesheet">
       <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet">
<navbar/>
<div style="height:80%; width: 100%; display: flex; justify-content: space-around; flex-direction: column;">
<cards/>
<stats/>
</div>

</template>
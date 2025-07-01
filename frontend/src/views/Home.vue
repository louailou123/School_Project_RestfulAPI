<script setup> 

import cards from '@/components/Cards.vue';
import navbar from '@/components/navbar.vue'
import stats from '@/components/homeStats.vue';
</script>
<template setup>
<navbar/>
<div style="height:80%; width: 100%; display: flex; justify-content: space-around; flex-direction: column;">
<cards/>
<stats/>
</div>

</template>
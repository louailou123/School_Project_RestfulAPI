<template>
<navbar/>
<div style="height: 100%; display: flex; flex-direction:  column;gap: 120px;">
    <checktitle title="Student"/>
<CheckStudentstable/>
</div>

</template>
<script setup> 
import CheckStudentstable from '@/components/checkStudentstable.vue';
import navbar from '@/components/navbar.vue'
import checktitle from '@/components/checktitle.vue';
</script>
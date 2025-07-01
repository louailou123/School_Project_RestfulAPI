<template>
<navbar/>
<div style="height: 100%; display: flex; flex-direction:  column;gap: 120px;">
    <checktitle title="Teacher"/>
<CheckTeachersTable/>
</div>

</template>
<script setup> 
import navbar from '@/components/navbar.vue'
import checktitle from '@/components/checktitle.vue';
import CheckTeachersTable from '@/components/checkTeachersTable.vue';
</script>
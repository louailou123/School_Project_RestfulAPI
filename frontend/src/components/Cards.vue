<template>
<h1 style="width: 100%;text-align: center; color:var(--p-sky-400) ;">Summary of the school</h1>
    <div class="cards" style="display: flex; justify-content: space-around; align-items: center; height: 50%;width: 100%;">
<Card title="Students" :count="studentsCount" description="student"/>
<Card title="Teachers" :count="teachersCount" description="teacher"/>
<Card title="Payements" :count="paymentsCount" description="$"/>
    </div>

</template>
<script setup>
import Card from './Card.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
const studentsCount = ref(0);
const teachersCount = ref(0);
const paymentsCount = ref(0);

onMounted(async ()=>{
    try{
        const response = await axios.get('http://localhost:5000/');
        if(response.status === 200){
            studentsCount.value = response.data.countStudents;
            teachersCount.value = response.data.countTeachers;
            paymentsCount.value = response.data.countPayement;
        } 

    }catch(error){
        console.error('Error fetching students count:', error);
    }
})

</script>
<style>
@media (max-width: 1200px) {

.cards{
    flex-direction: column;
    height: 100% !important;

}
}
</style>
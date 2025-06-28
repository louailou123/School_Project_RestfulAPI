<template>
<h1 style="width: 100%;text-align: center; color:var(--p-sky-400) ;">Summary of the school</h1>
    <div class="cards" style="display: flex; justify-content: space-around; align-items: center; height: 50%;width: 100%;">
<Card title="Students" :count="0" description="student"/>
<Card title="Teachers" :count="0" description="teacher"/>
<Card title="Payements" :count="0" description="$"/>
    </div>

</template>
<script setup>
import Card from './Card.vue';
</script>
<style>
@media (max-width: 1200px) {

.cards{
    flex-direction: column;
    height: 100% !important;

}
}
</style>
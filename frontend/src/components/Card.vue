
<template>
    <Card >
        <template #title>{{title}}</template>
        <template #content>
{{ count }} {{ description }}
            <div>
                            <Button label="check" />
            </div>
        </template>
        
    </Card>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
const props =defineProps({
    title:{
        type: String,
        default:''

    }
    ,count:{
        type :Number,
        default:0
    },
    description:{
        type :Number,
        default:''
    },
})
</script>
<style>
.p-card{
    height: 200px;
    width: 180px;
background-color: var(--p-sky-200)!important;
}
.p-card-body{
 gap: 70px !important;
     border-radius: 10px;
}
.p-card-caption{
background-color: var(--p-sky-300)!important;
color: white;
    border-radius: 10px;
text-align: center;
   border:2px solid var(--p-sky-500) !important
}
.p-card-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.p-button{
    background-color:var(--p-sky-300)!important ;
    border:2px solid var(--p-sky-500) !important
}
.p-button:hover{
    background-color:var(--p-sky-500)!important ;
    border:2px solid var(--p-sky-600) !important
}
</style>

 <template>
<div>
    <h1 style="text-align: center; color:var(--p-sky-400) ;"> List of all {{ title }}s</h1>
    <h3 style="text-align: center; color:var(--p-sky-800) "> search for a {{ title }} or update a {{ title }}</h3>
</div>


 </template>
<script setup> 


const props = defineProps({
    title: {
        type: String,
        required: true,
        default: ''
    }
});
</script>
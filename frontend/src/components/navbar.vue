
<template>

        <div class="card">
        <Menubar :model="items" />
    </div>


</template>

<script setup>
import { ref } from "vue";

import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Students',
        icon: 'pi pi-star',
                items: [
            {
                label: 'Add Students',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Check Students',
                icon: 'pi pi-server'
            },
        ]
    },
    {
        label: 'Teachers',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Add teachers',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Check teachers',
                icon: 'pi pi-server'
            },
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>
<style>
.p-menubar-item-label{
color :var(--p-slate-900);
font-size: 17px;
}
.p-menubar {
background-color: var(--p-sky-200)!important;
border: 0 !important;
border-radius: 0 !important;
height: 50px;
}
</style>
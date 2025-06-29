<template>

        <div class="card">
        <Menubar :model="items" />
    </div>


</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar';

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => router.push('/')
    },
    {
        label: 'Students',
        icon: 'pi pi-star',
                items: [
            {
                label: 'Add Students',
                icon: 'pi pi-bolt',
                command: () => router.push('/Students/add')
            },
            {
                label: 'Check Students',
                icon: 'pi pi-server',
                command: () => router.push('/Students/check')
            },
        ]
    },
    {
        label: 'Teachers',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Add teachers',
                icon: 'pi pi-bolt',
                command: () => router.push('/Teachers/add')
            },
            {
                label: 'Check teachers',
                icon: 'pi pi-server',
                command: () => router.push('/Teachers/check')
            },
        ]
    },
    {
        label: 'Payements',
        icon: 'pi pi-envelope',
        command: () => router.push('/Payements')
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
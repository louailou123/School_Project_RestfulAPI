<template>
<h1 style="text-align: center; color: var(--p-sky-400);">Stats of Payements of this school</h1>
<h3 style="text-align: center; color: var(--p-sky-400)">all time gain of this school is {{ gain }}$</h3>
<h3 style="text-align: center; color: var(--p-sky-400)">the gain of this month is {{ gainMonth }}$</h3>
    <div class="card">
        <Chart type="line" :data="chartData_first" :options="chartOptions" class="h-[30rem]" />
    </div>
    <div class="card">
        <Chart type="line" :data="chartData_second" :options="chartOptions" class="h-[30rem]" />
    </div>

</template>
<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";
import axios from 'axios';
 const payementData = ref()

onMounted(async () => {
    chartData_first.value = setChartData_first();
    chartData_second.value = setChartData_second();
    chartOptions.value = setChartOptions();
    try{
        const response =await axios.get("http://localhost:5000/payements")

        payementData.value = response.data.data
console.log(payementData.value)
    console.log('done')
    }
    catch(error)
    {
        console.log(error)
    }
});
const gain=ref(0);
const gainMonth=ref(0);
const chartData_first = ref();
const chartData_second = ref();
const chartOptions = ref();
const dataTeacher = [28, 48, 40, 19, 86];
const dataStudent = [65, 59, 80, 81, 56];
const setChartData_first = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Student Payements',
                // this data is just for example, you can replace it with real data
                // you can also change the color of the line by changing the borderColor property
                data: dataStudent,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-sky-700'),
                tension: 0.4
            },
            {
                label: 'Teacher Payements',
                data: dataTeacher,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-sky-300'),
                tension: 0.4
            }
        ]
    };
};
const setChartData_second = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'School Payements',
                data: Object.values(payementData.value),
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-sky-500'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
<style>
 .p-chart {
    width: 99%;
    height: 350px !important;}
</style>



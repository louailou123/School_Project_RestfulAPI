
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="students" paginator :rows="8" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['Fullname', 'Phone_Number', 'Age', 'Address', 'Payement', 'Email']">
            <template #empty> No students found. </template>
            <template #loading> Loading students Please wait. </template>
            <Column field="id" header="ID" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.id }}
                </template>
            </Column>
            <Column header="Fullname" filterField="Fullname" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Fullname}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by Fullname" />
                </template>
            </Column>
            <Column header="PhoneNumber" filterField="Phone_Number" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Phone_Number}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputNumber v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by Phone Number" />
                </template>
            </Column>
                      <Column header="Age" filterField="Age" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Age}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputNumber v-model="filterModel.value"  @input="filterCallback()" placeholder="Search by Age" />
                </template>
            </Column>
                      <Column header="Birthday" filterField="Birthday" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Birthday}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <DatePicker  v-model="filterModel.value"  @date-select="filterCallback()" dateFormat="yy-mm-dd" placeholder="mm/dd/yyyy" />
                </template>
            </Column>
                                  <Column header="Email" filterField="Email" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Email}}</span>
                    </div>
                </template>
                 <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by Email" />
                </template>
            </Column>
         <Column header="Address" filterField="Address" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items  -center gap-2">
                        <span>{{ data.Address}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by Address" />
                </template>
            </Column>
            <Column header="Payement" filterField="Payement" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Payement}}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputNumber v-model="filterModel.value" @input="filterCallback()" placeholder="Search by Payements" />
                </template>
            </Column>
            <Column style="min-width: 12rem">
                     <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <RouterLink :to="`/student/update/${data.id}`" ><Button style="width: 60px;background-color: var(--p-green-400) !important;" rounded >Edit</Button></RouterLink> 
                        <Button type="submit" @click="deleteStudent(data.id)" rounded severity="warn" style="width: 60px;background-color: var(--p-red-600) !important;">Delete</Button>
                    </div>
                </template>
                

            </Column>
            

        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import Button from 'primevue/button';
const filters = ref({
    Fullname: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Phone_Number: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Address: { value: null, matchMode: FilterMatchMode.IN },
    Payement: { value: null, matchMode: FilterMatchMode.EQUALS },
    Email: { value: null, matchMode: FilterMatchMode.EQUALS } ,
     Birthday: { value: null, matchMode: FilterMatchMode.DATE_IS }
});
 



onMounted(() => {
// function to get the students data from the API
    // This is a placeholder, replace with actual API call
    // we can use loading state to show a loading spinner
    // For now, we will just log a message

    console.log('Component mounted, ready to fetch students data');
});
const students = ref([
    { id: 1001, Fullname: 'Black Watch', Phone_Number: '0987654321', Age: 30, Birthday: '1995-02-02', Address: '456 Elm St', Payement: 200, Email: ''},
    { id: 1000, Fullname: 'Bamboo Watch', Phone_Number: '1234567890', Age: 25, Birthday: '2000-01-01', Address: '123 Main St', Payement: 100, Email: 'hi@gmail.com'},
    { id: 1002, Fullname: 'Blue Band', Phone_Number: '1122334455', Age: 22, Birthday: '2001-03-03', Address: '789 Oak St', Payement: 150, Email: '' },
    { id: 1003, Fullname: 'Red Band', Phone_Number: '5566778899', Age: 28, Birthday: '1997-04-04', Address: '321 Pine St', Payement: 180, Email: '' },
    { id: 1004, Fullname: 'Green Band', Phone_Number: '2233445566', Age: 26, Birthday: '1999-05-05', Address: '654 Maple St', Payement: 120, Email: '' }
]);
 

 // error in date filter to deal with later
  
const deleteStudent = (id) => {
// Function to delete a student by ID
    // This is a placeholder, replace with actual API call
    // For now, we will just log the ID to be deleted

    if (confirm('Are you sure you want to delete this student?')) {
// suppresion logic
        console.log(`Student with ID: ${id} deleted`);
    } else {
        // User cancelled the deletion
        // You can handle the cancellation here if needed
        console.log(`Deletion of student with ID: ${id} cancelled`);
    }   }

</script>

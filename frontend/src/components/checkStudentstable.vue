
<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="students" paginator :rows="8" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['Fullname', 'Phone_Number', 'Age', 'Address', 'Payement', 'Email']">
            <template #empty> No students found. </template>
            <template #loading> Loading students Please wait. </template>
            <Column field="id" header="ID" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.studentId }}
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
                        <span>{{ data.age}}</span>
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
                        <RouterLink :to="`/Student/update/${data.studentId}`" ><Button style="width: 60px;background-color: var(--p-green-400) !important;" rounded >Edit</Button></RouterLink> 
                        <Button type="submit" @click="deleteStudent(data.studentId)" rounded severity="warn" style="width: 60px;background-color: var(--p-red-600) !important;">Delete</Button>
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
import axios from 'axios';
import { useToast } from 'primevue';
const filters = ref({
    Fullname: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Phone_Number: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Address: { value: null, matchMode: FilterMatchMode.IN },
    Payement: { value: null, matchMode: FilterMatchMode.EQUALS },
    Email: { value: null, matchMode: FilterMatchMode.EQUALS } ,
     Birthday: { value: null, matchMode: FilterMatchMode.DATE_IS }
});
let students=ref([])
let loading = ref(true);
const toast =useToast()
 const getStudents = async () => {
    try{
    const response = await axios.get("http://localhost:5000/students/check")
    if(response.data.students)
    {
      loading.value = false
      students.value = response.data.students
    }}
catch(error) 
   {
      console.log('err',error)
   }

}
 
 onMounted(getStudents);  


 

 // error in date filter to deal with later
  
const deleteStudent = async (studentId) => { 
    if (confirm('Are you sure you want to delete this student?')) { 
        // User confirmed the deletion
        console.log(`Deleting student with ID: ${studentId}`);
try{
        const response =await axios.delete(`http://localhost:5000/students/delete/${studentId}`)
        if(response.status == 200)
        {
            // Successfully deleted the student
            console.log(`Student with ID: ${studentId} deleted successfully`);
            // Optionally, you can refresh the student list or perform any other actions
            students.value = students.value.filter(student => student.studentId !== studentId); 
    toast.add({ severity: 'info', summary: 'Success', detail: 'Student Deleted', life: 3000 });
        }
}
catch(error){
        console.log('err' , error)
}
          

    
    } else {
        // User cancelled the deletion
        // You can handle the cancellation here if needed
        console.log(`Deletion of student with ID: ${id} cancelled`);
    }   }

</script>

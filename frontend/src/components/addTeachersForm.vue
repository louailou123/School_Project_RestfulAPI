
<template > 
<div width="100%" height="100%" style="display: flex; flex-direction: column; align-items: center; justify-content: center; color:var(--p-sky-400) ;">

    <h1 class="text-center" style="text-align:center">Add Teachers</h1>
    <p class="text-center" style="text-align:center">Please fill in the form below to add a new teacher.</p>
    <div class="card">

        <FileUpload name="file" url="http://localhost:5000/teachers/upload"  :multiple="false" accept=".xlsx,.xls" :maxFileSize="1000000">
            <template #empty>
                <span style="color: var(--p-emerald-500);">Drag and drop files to here to upload teachers from excel tables.</span>
            </template>
        </FileUpload>
    </div>
    <form
        class="flex flex-col gap-4"  style="width: 50%; height: 100%; margin-top:75px; display: flex; flex-direction: column; align-items: center; gap: 70px;"
        
        @submit.prevent="onSubmit">

    <div style="display: grid; grid-template-columns: 10fr 10fr; gap: 40px;place-items: center; width: 100%;">
        <div  class="input-container">        
             <FloatLabel variant="on">
            <InputText id="Fullname" v-model="Fullname" :invalid="!Fullname" />
            <label for="Fullname">Fullname</label>
        </FloatLabel> 
                <div v-if="fullname_error_message" class="p-invalid" style="color: red; font-weight: bold;  width: 100%;margin-top: 10px; text-align: center">
        {{ fullname_error_message }}</div>
    </div >
<div class="input-container">
            <FloatLabel variant="on">
            <InputNumber     id="Phone_Number" v-model="Phone_Number" :invalid="!Phone_Number" />
            <label for="Phone_Number">Phone Number</label>
        </FloatLabel>
                        <div v-if="Phone_Number_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Phone_Number_error_message }}</div>
</div>
<div class="input-container">
                    <FloatLabel variant="on">
            <InputNumber                 id="age" v-model="age" :invalid="!age" />
            <label for="age">Age</label>
        </FloatLabel>
                                <div v-if="Age_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Age_error_message }}</div>
</div>
<div  class="input-container">
        <FloatLabel variant="on">
    <DatePicker v-model="Birthday" inputId="Birthday" showIcon iconDisplay="input" variant="filled"          :invalid="!Birthday" />
    <label for="Birthday">Birthday</label>
        </FloatLabel>
                                        <div v-if="Birthday_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Birthday_error_message }}</div>
</div>
<div class="input-container">
                   <FloatLabel variant="on">
            <InputText id="Address" v-model="Address" :invalid="!Address" />
            <label for="Address">Address</label>
        </FloatLabel>
                                                <div v-if="Address_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Address_error_message }}</div>
</div>
<div    class="input-container">
                 <FloatLabel variant="on">
            <InputText id="Email" v-model="Email" :invalid="!Email" />
            <label for="Email">Email</label>
        </FloatLabel> 
                                                        <div v-if="Email_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Email_error_message }}</div>
</div>
<div class="input-container">
                    <FloatLabel variant="on">
            <InputNumber                 id="age" v-model="Payement" :invalid="!Payement" />
            <label for="age">Payement</label>
        </FloatLabel>
                                <div v-if="Payement_error_message" class="p-invalid" style="color: red; font-weight: bold; width: 100%; margin-top:10px; text-align: center">
        {{ Payement_error_message }}</div>
</div>
         <div class="input-container" style="display: flex; align-items: center; gap: 20px;">
               <Button type="submit" severity="secondary" label="Submit"  style="width: 150px;"/>
</div>            
    </div>

    </form>
</div>
</template >
<script setup> 
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import Button from 'primevue/button';
import axios from 'axios';
import FileUpload from 'primevue/fileupload';
const Fullname = ref(null);
const age = ref(null);
const Birthday = ref(null);
const Phone_Number = ref(null);
const Address = ref(null);
const Payement = ref(null);
const Payement_error_message = ref(null);
const fullname_error_message = ref(null);
const Phone_Number_error_message = ref(null);   
const Age_error_message = ref(null);
const Birthday_error_message = ref(null);
const Address_error_message = ref(null);
const Email_error_message = ref(null);
const Email = ref(null);
    const toast = useToast(); 
    // Import the FileUpload component
// Register the FileUpload component

const  onSubmit = async () => {
    fullname_error_message.value = null;
    Phone_Number_error_message.value = null;    
    Age_error_message.value = null;
    Birthday_error_message.value = null;
    Address_error_message.value = null;
    Email_error_message.value = null;
    Payement_error_message.value = null;
var b =true
    if (!Fullname.value) {
 fullname_error_message.value = 'Fullname is required';
    }
    if (!Phone_Number.value || Phone_Number.value.toString().length != 9) {
        Phone_Number_error_message.value = 'Phone Number must be 10 digits';
        b=false
    }
    if (!age.value || age.value <= 0) {
        Age_error_message.value = 'Age must be a positive number';
        b=false
    }
    if(Birthday.value && Birthday.value > new Date()) {
        Birthday_error_message.value = 'Birthday cannot be in the future';
        b=false
    }
    if (!Birthday.value) {
        Birthday_error_message.value = 'Birthday is required';
        b=false
    }
    if (!Address.value) {
        Address_error_message.value = 'Address is required';
        b=false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value)) {
        Email_error_message.value = 'Email is not valid';
        b=false
    }
        if (!Email.value) {
        Email_error_message.value = 'Email is required';
        b=false
    }
        if (!Payement.value || Payement.value <= 0) {
        Payement_error_message.value = 'Payement must be a positive number';
        b=false
    }
    if(b){
        try{
const response = await axios.post('http://localhost:5000/teachers/add',{
            Fullname: Fullname.value,
            Phone_Number: Phone_Number.value,
            age: age.value,
            Birthday: Birthday.value,
            Address: Address.value,
            Email: Email.value,
            Payement: Payement.value
        })
         if(response.status == 201)
         {
           toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Teacher added successfully',
        life: 3000
        
    });
        Fullname.value = '';
    Phone_Number.value = null;  
    age.value = null;
    Birthday.value = '';
    Address.value = '';
    Email.value = '';}
        else if(response.status == 400)
    {
        toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Validation failed',
        life: 3000})
    }
    else if(response.status == 500)
    {
                toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Server error',
        life: 3000})
    }
}

        catch(error)
        {
                     toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Validation error ',
        life: 3000})
            console.log('error',error)
        }


   }
    }



;
</script>
<style>
.p-invalid .p-inputtext,
.p-invalid .p-inputnumber-input,
.p-invalid .p-datepicker-input {
    border: 1.5px solid red !important;
}
.p-floatlabel,.p-inputtext,.p-inputnumber,.p-datepicker   {
    width: 100%;
}
.input-container {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.p-fileupload-header{
    display: flex  ;
    justify-content: center;
    align-items: center;
}
</style>
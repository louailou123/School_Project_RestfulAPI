
<template > 
<div width="100%" height="100%" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">

    <h1 class="text-center" style="text-align:center">Add Students</h1>
    <p class="text-center" style="text-align:center">Please fill in the form below to add a new student.</p>
        <div v-if="error_message" class="p-invalid" style="color: red; font-weight: bold; height: 50px; width: 100%; text-align: center ;margin-top: 20px">
        {{ error_message }}</div>
    <form
        class="flex flex-col gap-4"
        :model="{
            Fullname,
            Phone_Number,
            age,
            Birthday
        }"
        :rules="{
            Fullname: 'required',
            Phone_Number: 'required|numeric|max:9999999999',
            age: 'required|numeric',
            Birthday: 'required'
        }"  style="width: 50%; height: 100%; margin-top:75px; display: flex; flex-direction: column; align-items: center; gap: 300px;"
        
        @submit.prevent="onSubmit">

    <div style="display: grid; grid-template-columns: 10fr 10fr; gap: 40px;place-items: center; width: 100%;">
         <FloatLabel variant="on">
            <InputText id="Fullname" v-model="Fullname" :invalid="!Fullname" />
            <label for="Fullname">Fullname</label>
        </FloatLabel> 
        <FloatLabel variant="on">
            <InputNumber                 max="9999999999"  id="Phone_Number" v-model="Phone_Number" :invalid="!Phone_Number" />
            <label for="Phone_Number">Phone Number</label>
        </FloatLabel>
                <FloatLabel variant="on">
            <InputNumber                 id="age" v-model="age" :invalid="!age" />
            <label for="age">Age</label>
        </FloatLabel>
        <FloatLabel variant="on">
    <DatePicker v-model="Birthday" inputId="Birthday" showIcon iconDisplay="input" variant="filled"          :invalid="!Birthday" />
    <label for="Birthday">Birthday</label>
        </FloatLabel>
               <FloatLabel variant="on">
            <InputText id="Address" v-model="Address" :invalid="!Address" />
            <label for="Address">Address</label>
        </FloatLabel>
                     
    </div>
   <Button type="submit" severity="secondary" label="Submit" />
    </form>
</div>
</template >
<script setup> 
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import DatePicker from 'primevue/datepicker';
import Button from 'primevue/button';
const Fullname = ref(null);
const age = ref(null);
const Birthday = ref(null);
const Phone_Number = ref(null);
const Address = ref(null);
const error_message = ref(null);
const onSubmit = () => {
    error_message.value = null;
    if (!Fullname.value) {
        error_message.value = 'Fullname is required';
        return;
    }
    if (!Phone_Number.value || Phone_Number.value.length != 10) {
        error_message.value = 'Phone Number must be 10 digits';
        return;
    }
    if (!age.value || age.value <= 0) {
        error_message.value = 'Age must be a positive number';
        return;
    }
    if (!Birthday.value) {
        error_message.value = 'Birthday is required';
        return;
    }
    const toast = useToast(); 

toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Student added successfully',
        life: 3000
    });
    Fullname.value = '';
    Phone_Number.value = '';  
    age.value = '';
    Birthday.value = '';
    Address.value = '';
    console.log('Form submitted successfully');

};
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
</style>
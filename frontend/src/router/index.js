import Add_Students from '@/views/Add_Students.vue'
import Add_Teachers from '@/views/Add_Teachers.vue'
import Check_Students from '@/views/Check_Students.vue'
import Check_Teachers from '@/views/Check_Teachers.vue'
import Home from '@/views/Home.vue'
import Payements from '@/views/Payements.vue'
import Update_Students from '@/views/Update_Students.vue'
import Update_Teachers from '@/views/Update_Teachers.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home_page",
      component:Home
    },
        {
      path:"/Students/add",
      name:"add_Students_page",
      component:Add_Students
    }
    ,
        {
      path:"/Teachers/add",
      name:"add_Teachers_page",
      component:Add_Teachers
    }    ,
        {
      path:"/Students/check",
      name:"check_Students_page",
      component:Check_Students
    },
    {
      path:"/Teachers/check",
      name:"check_Teachers_page",
      component: Check_Teachers
    },
    {
      path:"/Payements",
      name:"Payements_page",
      component: Payements
    },
    {
      path:"/Student/update/:id",
      name:"update_Student_page",
      component : Update_Students
    }
    ,
    {
      path:"/teacher/update/:id",
      name:"update_Teachers_page",
      component : Update_Teachers
    }
  ],
})

export default router

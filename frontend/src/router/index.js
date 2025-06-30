import Add_Students from '@/views/Add_Students.vue'
import Add_Teachers from '@/views/Add_Teachers.vue'
import Home from '@/views/Home.vue'
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
    }
  ],
})

export default router

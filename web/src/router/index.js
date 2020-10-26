import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '../views/Students.vue'
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'students',
    component: Students
  },
  {
    path: '/add-student',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/edit-student',
    mame: 'EditStudent',
    component: EditStudent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

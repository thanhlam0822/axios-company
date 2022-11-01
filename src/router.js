import { createRouter, createWebHistory } from 'vue-router'
import GetCompany from './components/CompanyList/GetCompany'
import CompanyDetail from './components/CompanyList/CompanyDetail'
import AddCompany from './components/CompanyList/AddCompany'
import GetEmployees from './components/EmployeeList/GetEmployees'
import EmployeeDetail from './components/EmployeeList/EmployeeDetail'
import AddEmployee from './components/EmployeeList/AddEmployee'

const routes =  [
    {
        path: "/company",
        
        component: GetCompany
    },
    {
        path: "/company/:id",
        component : CompanyDetail
    },
    {
        path: "/company/add",
        component : AddCompany
    },
    {
        path: "/company/:id/employees",
        component: GetEmployees
    },
    {
        path:"/company/:id/employees/:idEmployee",
        component: EmployeeDetail
    }
    ,
    {
        path:"/company/:id/employees/add",
        component: AddEmployee
    },
    
    
    
   
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
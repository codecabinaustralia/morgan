import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminListings from '../views/admin/AdminListings.vue'
import Directory from '../views/Directory.vue'
import WebBooks from '../views/admin/WebBooks.vue'
import Agents from '../views/admin/Agents.vue'
import Forms from '../views/admin/Forms.vue'
import Billing from '../views/admin/Billing.vue'
import Sections from '../views/admin/Sections.vue'
import createWebBook from '../views/admin/createWebBook.vue'
import Preview from '../views/admin/preview.vue'
import EditForm from '../views/admin/editForm.vue'
import createForm from '../views/admin/createForm.vue'
import createAgent from '../views/admin/createAgent.vue'
import EditAgent from '../views/admin/editAgent.vue'
import createTeam from '../views/admin/createTeam.vue'
import EditTeam from '../views/admin/editTeam.vue'
import Listing from '../views/Listing.vue'
import Teams from '../views/admin/Teams.vue'
import CompanySettings from '../views/admin/CompanySettings.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import ResetPassword from '../views/ResetPassword.vue'
import PdfPrint from '../views/admin/PdfPrint.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WebBooks',
    component: WebBooks
  },
  {
    path: '/PdfPrint',
    name: 'PdfPrint',
    component: PdfPrint
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/admin/billing',
    name: 'Billing',
    component: Billing
  },
  {
    path: '/admin/company-settings',
    name: 'CompanySettings',
    component: CompanySettings
  },
  {
    path: '/admin/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/businesses-for-sale',
    name: 'Directory',
    component: Directory
  },
  {
    path: '/web-books',
    name: 'WebBooks',
    component: WebBooks
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/forms/new',
    name: 'createForm',
    component: createForm
  },
  {
    path: '/forms/:id',
    name: 'EditForm',
    component: EditForm
  },
  {
    path: '/agents/new',
    name: 'createAgent',
    component: createAgent
  },
  {
    path: '/agents/:id',
    name: 'EditAgent',
    component: EditAgent
  },
  {
    path: '/users/new',
    name: 'createTeam',
    component: createTeam
  },
  {
    path: '/users/:id',
    name: 'EditTeam',
    component: EditTeam
  },
  {
    path: '/web-books/edit/:id/:sectionId',
    name: 'createWebBook',
    component: createWebBook
  },
  {
    path: '/web-books/sections/:id',
    name: 'Sections',
    component: Sections
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/listing/:id',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/admin/listings',
    name: 'AdminListings',
    component: AdminListings
  }

]

const router = new VueRouter({
  routes
})

export default router

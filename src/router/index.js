import Vue from 'vue'
import Router from 'vue-router'
import EditOtd from '@/pages/EditOtd'
import EditPlan from '@/pages/EditPlan'
import Upload from '@/pages/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editOtd',
      name: 'EditOtd',
      component: EditOtd
    },
    {
      path: '/UploadFile',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/EditPlan',
      name: 'EditPlan',
      component: EditPlan
    }
  ]
})

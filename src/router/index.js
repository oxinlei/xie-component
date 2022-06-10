import Vue from 'vue'
import Router from 'vue-router'
import Button from '../page/Button'
import Box from '../page/Box'
import AnimateText from '../page/AnimateText'
import TabControl from '../page/TabControl'
import ColorText from '../page/ColorText'
import EditorForm from '../page/EditorForm'
import EditText from '../page/EditText'
import Test from '../page/Test'
import UploadFiles from '../page/UploadFiles'
import IllustrationAnimation from '../page/IllustrationAnimation'
import IllustrationAnimation1 from '../page/IllustrationAnimation1'
import Progress from '../page/Progress'
import TestTwo from '../page/TestTwo'
import Store from '../page/Store'
import FishBoneBox from '../page/FishBoneBox'
import Carousel from '../page/Carousel'
import Gantt from '../page/Gantt'
import Form from '../page/Form'
import Table from '../page/Table'
import JsonViewBox from '../page/JsonViewBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Box',
      name: 'Box',
      component: Box
    },
    {
      path: '/AnimateText',
      name: 'AnimateText',
      component: AnimateText
    },
    {
      path: '/TabControl',
      name: 'TabControl',
      component: TabControl
    },
    {
      path: '/ColorText',
      name: 'ColorText',
      component: ColorText
    },
    {
      path: '/EditorForm',
      name: 'EditorForm',
      component: EditorForm
    },
    {
      path: '/EditText',
      name: 'EditText',
      component: EditText
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/UploadFiles',
      name: 'UploadFiles',
      component: UploadFiles
    },
    {
      path: '/IllustrationAnimation',
      name: 'IllustrationAnimation',
      component: IllustrationAnimation
    },
    {
      path: '/IllustrationAnimation1',
      name: 'IllustrationAnimation1',
      component: IllustrationAnimation1
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/TestTwo',
      name: 'TestTwo',
      component: TestTwo
    },
    {
      path: '/Store',
      name: 'Store',
      component: Store
    },
    {
      path: '/FishBoneBox',
      name: 'FishBoneBox',
      component: FishBoneBox
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/Gantt',
      name: 'Gantt',
      component: Gantt
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/JsonViewBox',
      name: 'JsonViewBox',
      component: JsonViewBox
    },    
  ]
})

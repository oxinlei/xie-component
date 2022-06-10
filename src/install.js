import Vue from 'vue'
import FormBox from '@/components/FormBox'
import TableBox from '@/components/TableBox'
const Install = () => {
  Vue.use(FormBox)
  Vue.use(TableBox)
}

export default Install

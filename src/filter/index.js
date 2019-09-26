import Vue from 'vue'
import { tranTime } from '../utils/tools'

const filters = {
  tranTime,
  dealEmpty (value) {
    return value === null || value === '' ? '-' : value
  }
}

function allFilter () {
  for (const key in filters) {
    Vue.filter(key, filters[key])
  }
}
export default allFilter

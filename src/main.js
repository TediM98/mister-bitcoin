import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'

import './assets/main.scss'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiCurrencyBitcoin,
  BiTelephone,
  MdEmailOutlined,
  RiContactsLine,
  MdDeleteoutline,
  LaInfoCircleSolid,
  MdModeeditOutlined
} from 'oh-vue-icons/icons'

addIcons(
  BiCurrencyBitcoin,
  MdDeleteoutline,
  RiContactsLine,
  BiTelephone,
  MdEmailOutlined,
  LaInfoCircleSolid,
  MdModeeditOutlined
)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
app.component('v-icon', OhVueIcon)

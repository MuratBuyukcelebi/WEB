import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Set Api
import { ApiUtil } from "@/utils/api.util";

ApiUtil.init(
  process.env.NODE_ENV === "production" ?
    "https://lookupguru.herokuapp.com/" :
    "http://localhost:3600/"
);

// Vue Meta Mask
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// Tooltip
import VTooltip from 'v-tooltip'
Vue.use(VTooltip, {
  defaultHtml: true,
  trigger: "hover",
  defaultHideOnTargetClick: false
})

// Google Analytics
import VueAnalytics from 'vue-analytics';
if (process.env.NODE_ENV === "production") {
  Vue.use(VueAnalytics, {
    id: 'UA-89120054-6',
    router
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  metaInfo: {
    title: "Discord Search ID",
    titleTemplate: '%s - Lookup.Guru'
  }
}).$mount('#app')

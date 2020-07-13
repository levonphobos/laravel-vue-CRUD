require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import Layout from './Layout'
import router from './router/router'
import store from './store/store'
import _ from 'lodash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserPlus)
library.add(faUpload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Layout)
}).$mount('#app');

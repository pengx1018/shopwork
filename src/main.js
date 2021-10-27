import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // render(createElement) {
  //   console.log(createElement)
  //   return createElement(App)
  // },
  // render: (createElement) => {
  //   return createElement(App)
  // },
  // render: createElement => createElement(App)
  // }
  
  //test test
  
}).$mount('#app')

import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import ApolloClient from "apollo-boost"

import Index from './components/index.vue'
import New from './components/new.vue'

const apolloClient = new ApolloClient({
  uri: "/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/new', component: New },
  ],
})

const app = new Vue({
  router,
  apolloProvider,
  el: '#app',
})
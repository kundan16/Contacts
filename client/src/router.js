import Vue from "vue";
import Router from "vue-router";
import ContactList from "./views/Contact_list.vue";
import ContactForm from "./views/Contact_form.vue";
import ContactDetails from "./views/Contact_details.vue";
import ContactUpdate from "./views/Contact_update";

Vue.use(Router);

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: "contactlist", component: ContactList 
    },
    { path: '/home', name: "contactlist", component: ContactList 
},
    {
        path: '/contact/:id', name: "contactdetails" , component: ContactDetails 

    },
    {
        path: '/contact/:id/update', name: "contactupdate" , component: ContactUpdate 

    },
        {
          path: '/contacts/create', name:"contactcreate", component: ContactForm
      }
    ]
})

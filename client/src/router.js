import Vue from "vue";
import Router from "vue-router";
import ContactList from "./views/Contact_list.vue";
import ContactForm from "./views/Contact_form.vue";
import ContactDetails from "./views/Contact_details.vue";

Vue.use(Router);

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

export default new Router({
    routes: [
        { path: '/', name: "contactlist", component: ContactList 
    },
    {
        path: '/contact/:id/', name: "contactdetails" , component: ContactDetails 

    },
        {
          path: '/contacts/create', name:"contactcreate", component: ContactForm
      }
    ]
})

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "Contact",
//       component: Home
//     },
//     {
//       path: "/create",
//       name: "Craate",
//       component: ContactForm
//     }
//   ]
// });

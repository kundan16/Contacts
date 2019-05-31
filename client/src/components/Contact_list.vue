<template>
  <v-container>
    
    <div class="contact-list">
    <ul>
        <li id="detail" v-for="(contact,index) in contacts" :key="index">
            <router-link :to="{ name: 'contactdetails', params: { id: contact._id } }">{{ contact.name }}</router-link>
        </li>
    </ul>
    </div>
    <router-view/>
  </v-container>
</template>

<script>
import axios from 'axios';
// import detail from './Contact_detail';
  export default {

    name: "contactlist",
    data () {
      return {
       contacts: []
       
      }
    },
    mounted() {
      axios
        .get('http://localhost:8080/contacts')
        .then(response => (this.contacts = response.data))
    },

    
  }


</script>

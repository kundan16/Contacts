<template>
    <v-container>
  <div class="detail">
   
      <h1>CONTACT DETAILS</h1>
      <br>
    <h3>NAME:  {{ contact.name }} </h3>
    <div>NUMBER:    {{ contact.number }} </div>
    <div>EMAIL:    {{ contact.email }} </div>
    <router-link :to="{ name: 'contactupdate', params: { id: contact._id } }"><v-btn>Update Contact</v-btn></router-link>
<v-btn @click="deletet">
    Delete Contact
</v-btn>

  </div>
    </v-container>
</template>

<script>
import axios from 'axios'
 import router from '../router'


export default {
    data () {
        return {
            contact: {}
        }
    },

mounted() {
   var id = this.$route.params.id;

    axios
        .get('http://localhost:8080/contact/' + id )
        .then(response => {
            this.contact = response.data;
        
       })
        .catch(error => {
            console.log(error)
        })
},
methods: {
    deletet () {

var id = this.$route.params.id;

        axios
        .post('http://localhost:8080/contact/' + id + '/delete')
        .catch(error => {
            console.log(error)
        });
        router.replace({path: "/home"});
        

    }
}

}
</script>
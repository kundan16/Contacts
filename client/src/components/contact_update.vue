<template>
<v-container>
<form>
    <div class="form">
      <label for='name'> Name:</label>
      <input  v-model="name" id="name" type='text' placeholder="name"  required='true'  >
        <br>
      <label for='number'> Number: </label>
      <input id="number" v-model="number" type='number' placeholder="number"  required='true'>
    <br>
      <label for='email'> EMAIL: </label>
      <input id="email" v-model="email" type='string' placeholder="email"  >
<br>
<br>
    <v-btn @click="formSubmit" type="submit" > Submit</v-btn>
    </div>
</form>
    </v-container>

</template>

<script>

import router from '../router'
import axios from 'axios'

export default {

    data () {
        return {
            contact: [],
            name: "",
            number: "",
            email: "",
            id:""
            
        }
    },
   mounted() {
    this.id = this.$route.params.id;
   console.log(this.id);

    axios
        .get('http://localhost:8080/contact/' + this.id )
        .then(response => {
            this.contact = response.data;
            this.name = this.contact.name;
            this.number = this.contact.number;
            this.email = this.contact.email;
            console.log(this.contact);
        
       })
        .catch(error => {
            console.log(error)
        })
        
},
     methods: {
            formSubmit(e) {
       
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/contact/' + this.id + '/update',
                    data:  {
                     "name": this.name,
                     "number": this.number,
                     "email": this.email
                }, 

                    headers: {'Content-Type' : 'application/json'}
                })
                .then(router.replace({ name: 'contactdetails', params: { id: contact._id } }))
                //.then(router.go(-3))
                .catch(function (error) {
                 alert(error);
              
                });

                //router.replace({ name: 'contactdetails', params: { id: contact._id } });
           
}

     }
}

</script>

<template>
<v-container>
<form>
    <div class="form">
      <label for='name'> Name:</label>
      <input  v-model="name" id="name" type='text' placeholder='Name'  required='true'  >
        <br>
      <label for='number'> Number: </label>
      <input id="number" v-model="number" type='number' placeholder='Number'  required='true'>
    <br>
      <label for='email'> EMAIL: </label>
      <input id="email" v-model="email" type='string' placeholder='example@gmail.com'  >
<br>
<br>
    <v-btn @click="formSubmit" type='submit' > Submit</v-btn>
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
            name: "",
            number: "",
            email: ""
        }
    },
     methods: {
            formSubmit(e) {
            
              
                let d = {
                     "name": this.name,
                     "number": this.number,
                     "email": this.email
                };
                

                axios({
                    method: 'post',
                    url: 'http://localhost:8080/contact/create',
                    data:  {
                     "name": this.name,
                     "number": this.number,
                     "email": this.email
                }, 

                    headers: {'Content-Type' : 'application/json'}
                })
                .then(function() {router.replace({path: '/'}) } )
                .catch(function (error) {
                 alert(error);
              
                });

               
}

     }
}

</script>

<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">CONTACTS</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="contactcreate"
      >
        <router-link to="/contacts/create">Create Contact</router-link>
      
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      
    </v-content>
  </v-app>
</template>

<script>


export default {
 
}
</script>

<template>
  <v-app-bar app color="#1F415D" flat>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
          class="hidden-sm-and-down"
        >
          {{ link }}
        </v-btn>
        <v-btn text  class="hidden-sm-and-down" to="/contactenos" nuxt>
          contactenos
        </v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
</template>
<script>

export default {
  
  data() {
    return {
       links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
    };
  },
  
};
</script>


<template>
  <v-container>
    <v-toolbar
      color="blue"
      flat
    
    >
      <v-img
        alt="logo"
        src="logo.png"
        max-width="70"
      ></v-img>
      <v-toolbar-items>
        <v-btn
          text
          color="#FFFFFF"
        >
          <nuxt-link
            to="/"
            color="#FFFFFF"
          >
            Главная
          </nuxt-link>
        </v-btn>

        <v-btn
          text
          color="#FFFFFF"
        >
          <nuxt-link to="/posts">Новости</nuxt-link>
        </v-btn>
        
        <v-btn
          text
          color="#FFFFFF"
        >
          <nuxt-link to="/gallery">Галерея</nuxt-link>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
        <v-icon color="white">mdi-search-web</v-icon>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.v-application a {
  color: white;
  text-decoration: none;
}
</style>

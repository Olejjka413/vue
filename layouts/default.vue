<template>
  <v-app dark="false">
    <v-app-bar
      app
      color="blue"
    >
      <Navbar/>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'DefaultLayout',
  components: { Navbar }
}
</script>

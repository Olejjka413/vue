<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      light
    >
    <v-img
          src="./assets/logo.svg"
          height="30"
          width="30"
        >
        </v-img>
    <v-btn class="ml-9">
          <router-link to="/" class="router-link">Главная</router-link>
        </v-btn>
        <v-btn class="ml-9">
          <router-link to="/news" class="router-link">Новости</router-link>
        </v-btn>
        <v-btn class="ml-9 mr-16">
          <router-link to="/gallery" class="router-link">Галерея</router-link>
        </v-btn>

        <v-text-field
          dense
          label="Поиск"
          :rules="rules"
          placeholder = "Искать"
          hide-details="auto"
        ></v-text-field>
        <v-icon>mdi-search-web</v-icon>
    </v-app-bar>

    <v-main>
      <header/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
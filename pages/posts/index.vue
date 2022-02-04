<template>
  <div class="wrapper">
    <h1>Статьи</h1>
    <v-container>
      <Filters :filterPosts="filterPosts"/>
      <v-spacer></v-spacer>
      
    </v-container>
    <div
      class="d-flex pa-2 flex-wrap justify-start"
    >
      <v-card
        v-for="article in searchHandler"
        :key="article.id"
        class="mx-auto card"
        max-width="344"
      >
        <v-img
          src="images/preview.jpeg"
          height="200px"
        ></v-img>

        <v-card-title>
          <router-link
            :to="`posts/${article.id}`"
          >{{ article.name }}
          </router-link>
        </v-card-title>

        <v-card-subtitle>
          {{ article.shortDesc }}
        </v-card-subtitle>
      </v-card>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import Filters from "../../components/Filters";

export default {
  name: 'index',
  components: {Filters},
  data() {
    return {
      info: [],
      search: [],
      searchClosed: true,
    };
  },
  methods: {
    filterPosts(catName) {
      return this.info = this.info.filter((post) => {
        return post.category === catName
      })
    },
  },
  mounted() {
    axios
      .get('http://demo-api.vsdev.space/api/articles')
      .then(response => (this.info = response.data));
  },
  computed: {
    searchHandler() {
      return this.info.filter(post => {
        return post.name.includes(this.search)
      })
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
h2 {
   text-align: center;
}
.v-sheet.v-card {
  margin: 20px!important;
}
</style>

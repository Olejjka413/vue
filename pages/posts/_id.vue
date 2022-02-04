<template>
  <div class="wrapper">
    <h1>{{ this.post.name }}</h1>
    <v-img
      src="//assets/images/full.jpeg"
      height="200px"
      width="300px"
      alt="full"
     
    ></v-img>

    <div class="date">{{ this.post.date }}</div>
    <p class="text">{{ this.post.desc }}</p>
    <nuxt-link
      to="/posts"
      class="back"
    >Назад</nuxt-link>
    <Comments v-bind:id="this.$route.params.id" />
  </div>
</template>

<script>
import axios from "axios";
import Comments from "../../components/Comments";

export default {
  name: '_id',
  components: {Comments},
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    axios
      .get(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`)
      .then(response => (this.post = response.data));
  }
}
</script>

<style scoped>

</style>

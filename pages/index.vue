<template>
  <v-container>
    <div class="wrapper">
      <h1>Добро пожаловать!</h1>
      <Slider />
    </div>
  </v-container>
</template>

<script>
import Slider from "../components/Slider";

export default {
  name: 'index',
  components: {Slider}
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
h1 {
  text-align: center;
  font-size: 35px;
  
}
</style>

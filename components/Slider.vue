<template>
  <div class="slider-wrapper">
    <h2>Анонсы новостей</h2>
    <v-carousel v-if="sliderTrue">
      <v-carousel-item
        v-for="(item,i) in sliderTrue"
        :key="i"
        
        max-height="300"
        max-width="500"
      >
        <div class="text">
          {{ item.name }}
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Slider',
  data () {
    return {
      items: [],
    }
  },
  mounted() {
    axios
      .get('http://demo-api.vsdev.space/api/articles')
      .then(response => (this.items = response.data));
  },
  computed:{
    sliderTrue: function(){
      return this.items.filter(function(i){
        return i.slider === true
      })
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 30px;
  margin-top: 60px;
  text-align: center;
}
.v-item-group {
  width: 500px;
  height: 200px !important;
  margin: 0 auto;
}
.text {
  max-width: 500px;
  background-color: #7ca1ca;
  padding: 20px 50px 20px 50px;
  
  
  font-size: 25px;
  margin-top: 50px;
  text-align: center;
  color: white;
}
</style>

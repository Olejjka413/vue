<template>
  <div>
    <h2>Категории</h2>
    <p
      v-for="category in categories"
      :key="category.id"
      @click="() => filterPosts(category.id)"
    >
      {{ category.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: ['filterPosts'],
  mounted() {
    this.$store.dispatch('getCategories');
  },
  computed: {
    categories() {
      return this.$store.getters.CATEGORIES;
    },
  },
}
</script>


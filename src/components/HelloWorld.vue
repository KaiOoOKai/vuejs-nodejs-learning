<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<script>
export default {
  components() {  
  },
  data() { 
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  created() {
    this.increment();
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
  }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  },
  mounted() {
    console.log(this.author.name)
    this.author.name = 'dsa'
  }
}
</script>


<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with fdsf
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <button 
   class="btn btn-success"
      id="new-rule-btn"
      style="float: right;"
      @click="increment">Click me!</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

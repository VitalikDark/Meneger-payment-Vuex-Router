<template>
  <div>
      <h1>Create</h1>

    
      <div id="creating">
        <input v-model="title" type="number" id="title" required>
        <label for="title">Price</label>

        <textarea v-model="description" id="description"></textarea>
        <label for="description">Description</label>


        <button @click="submitHandler">Create!</button>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'create',
  data: () => ({
    title: '',
    description: ''
    
  }),
  methods: {
    submitHandler() {
      const task= {
        title: this.title,
        description: this.description,
        id: Date.now()
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  }

}
</script>

<style scoped>
  #creating {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
  }
  
</style>

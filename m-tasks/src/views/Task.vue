<template>
  <div>
  	<h1>Task</h1>
	<h2>{{task.title}}</h2>

  	<div v-if="task" id="taskitem">
  		
	  		<input v-model="title" type="number" id="title" required>
	  		<label for="title">Title</label>

	  		<textarea v-model="description" id="description"></textarea>
	  		<label for="description">Description</label>

	  		<button @click="submitHandler">Update</button>
				
	  	
  	</div>
  	<p v-else>not found</p>

  </div>
</template>

<script>

export default {
	data: () => ({
		title: '',
	  	description: ''
	}),
	mounted() {
		this.title=this.task.title,
  	this.description= this.task.description
	},
	computed: {
		task() {
			return this.$store.getters.taskById(+this.$route.params.id)
		}
	},
	methods: {
  	submitHandler() {
  		this.$store.dispatch('updateTask', {
  			id: this.task.id,
  			description: this.description,
  			title: this.title
  		})
  		this.$router.push('/list');
  	}
  }
}
</script>
<style>
	#taskitem {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
	}
</style>

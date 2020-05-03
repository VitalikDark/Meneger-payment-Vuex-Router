<template>
  <div>
    <h1>List</h1>
    <hr>

    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Description</th>
        <th>Open</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(task, idx) of tasks"
          :key="task.id"
      >
        <td>{{idx + 1}}</td>
        <td>{{task.title}}</td>
        <td class="td">
          <div class="text">{{task.description}}</div>
        </td>
        <td>
          <router-link tag="button" :to="'/task/' + task.id">
            Open
          </router-link>
        </td>
        <td><button @click="deleteCar(task)">Remove</button></td>
      </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>

    
  </div>
</template>

<script>
export default {
  
computed: {
  tasks() {
    return this.$store.getters.tasks
  }
  
  },
  methods: {
    deleteCar(task) {
      // return this.$store.getters.tasks
      this.$store.commit('DELETE_CAR', task);
    }
  }

}
</script>
<style>
  
</style>

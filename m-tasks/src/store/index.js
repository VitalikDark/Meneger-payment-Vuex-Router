import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, title}) {
      const tasks= state.tasks.concat()

      const idx=tasks.findIndex(t => t.id === id)
      const task=tasks[idx]
      tasks[idx]={...task, description, title}

      state.tasks=tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    DELETE_CAR(state, task) {
      var index = state.tasks.findIndex(c => c.id == task.id);
      state.tasks.splice(index, 1);
   }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },

  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
})

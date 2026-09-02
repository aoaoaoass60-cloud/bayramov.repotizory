<template>
  <div>
    <h1>Список задач</h1>

    <TaskInput @add-task="addTask" />

    <div>
      <button @click="filter = 'all'">Все</button>
      <button @click="filter = 'active'">Активные</button>
      <button @click="filter = 'completed'">Выполненные</button>
    </div>

    <h3>Осталось {{ getActiveTasksCount() }}</h3>

    <TaskList
        :tasks="getFilteredTasks()"
        @delete-task="deleteTask"
        @toggle-task="toggleTask"
    />
  </div>
</template>

<script>
import TaskInput from './TaskInput.vue'
import TaskList from './TaskList.vue'

export default {
  components: {
    TaskInput,
    TaskList
  },
  data() {
    return {
      tasks: [],
      filter: 'all'
    }
  },
  methods: {
    addTask(text) {
      this.tasks.push({
        id: Date.now(),
        text: text,
        completed: false
      })
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id)
      if (task) {
        task.completed = !task.completed
      }
    },
    getActiveTasksCount() {
      return this.tasks.filter(task => !task.completed).length
    },
    getFilteredTasks() {
      if (this.filter === 'active') {
        return this.tasks.filter(task => !task.completed)
      } else if (this.filter === 'completed') {
        return this.tasks.filter(task => task.completed)
      }
      return this.tasks
    }
  }
}
</script>
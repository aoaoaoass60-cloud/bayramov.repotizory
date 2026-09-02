<template>
  <div>
    <input
        v-model="newTask"
        placeholder="Введите задачу"
        @keyup.enter="addTask"
    />
    <button @click="addTask">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('add-task', this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>
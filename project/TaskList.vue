<template>
  <ul>
    <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', task.id)"
        @toggle-task="$emit('toggle-task', task.id)"
    />
  </ul>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>
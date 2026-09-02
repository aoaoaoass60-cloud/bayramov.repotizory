<template>
  <li>
    <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle-task', task.id)"
    />
    <span
        :style="{
      textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.text }}
    </span>
    <button @click="$emit('delete-task', task.id)">Удалить</button>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
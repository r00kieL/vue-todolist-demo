<script setup>
const props = defineProps({
  filteredTodos: Array,
});

const emit = defineEmits(['remove-todo', 'toggle-todo']);
</script>

<template>
  <li v-for="todo in filteredTodos" :key="todo.id">
    <div class="left">
      <el-checkbox @change="emit('toggle-todo', todo.id)" size="large"/>
      <p :class="{done: todo.done}">{{ todo.text }}</p>
    </div>
    <button type="button" @click="emit('remove-todo', todo.id)">X</button>
  </li>
</template>

<style scoped>
li {
  background-color: whitesmoke;
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  border-radius: 10px;
}

li div{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.done {
  text-decoration: line-through;
}
</style>
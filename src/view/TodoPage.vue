<script setup>
import {ref, computed} from 'vue';

const newTodo = ref('');
const status = ref('all');

let id = 0
const todos = ref([
  {id: id++, text: "学习vue", done: false},
  {id: id++, text: "学习Three.js", done: false},
  {id: id++, text: "学习英语", done: false},
])

const filteredDodos = computed(() => {
  if (status.value === "all") return todos.value
  if (status.value === "finished") return todos.value.filter((t) => t.done)
  if (status.value === "active") return todos.value.filter((t) => !t.done)
})


function addTodo() {
  if (newTodo.value.trim() === '') return;

  todos.value.push({id: id++, text: newTodo.value, done: false});
  newTodo.value = '';
}

function removeTodo(todoId) {
  todos.value = todos.value.filter((t) => t.id !== todoId);
}

</script>

<template>
  <div>
    <el-container class="container">
      <el-header class="header">Todo List</el-header>

      <el-main class="main">
        <form>
          <el-input
              class="input-todo"
              v-model="newTodo"
              placeholder="输入想要添加的todo"
              clearable
          />
          <el-button class="input-todo-btn" type="success" color="#409eff" @click="addTodo">
            <div>+</div>
          </el-button>
        </form>

        <div class="state">
          <button @click="status = 'all'" :class="{'selected-status' : status === 'all'}">全部</button>
          <button @click="status = 'finished'" :class="{'selected-status' : status === 'finished'}">已完成</button>
          <button @click="status = 'active'" :class="{'selected-status' : status === 'active'}">未完成</button>
        </div>

        <ul>
          <li v-for="todo in filteredDodos" :key="todo.id">
            <div class="left">
              <el-checkbox v-model="todo.done" size="large"/>
              <p :class="{done: todo.done}">{{ todo.text }}</p>
            </div>
            <button @click="removeTodo(todo.id)">X</button>
          </li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.container {
  background-color: white;

  width: 600px;
  height: 800px;

  border-radius: 15px;

  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  font-size: 50px;
  font-weight: bold;
}

form {
  display: flex;
  justify-content: center;
  gap: 10px
}

.input-todo {
  width: 450px;
  height: 60px;

  border-radius: 300px;
}

.input-todo-btn {
  height: 60px;
  font-size: 50px;
}

ul {
  padding: 0;
  width: 500px;
  margin-left: 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

ul li {
  background-color: whitesmoke;
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;

  padding: 0 15px;

  border-radius: 10px;
}

.done {
  text-decoration: line-through;
}

.state {
  /*background-color: red;*/

  width: 500px;
  height: 50px;

  margin: 15px 0 15px 15px;

  display: flex;
}

.state button {
  background: none;
  border: none;
  outline: none;

  transition: color 0.3s ease;
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.selected-status {
  color: #409eff;
}

.input-todo-btn div {
  color: white;
}
</style>
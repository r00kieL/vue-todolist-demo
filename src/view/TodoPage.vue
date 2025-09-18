<script setup>
import {ref, computed, watch} from 'vue';

const DEFAULTS = {
  "todos": [],
  "status": "all",
};

const allStatus = {
  all: "all",
  finish: "finish",
  active: "active",
}

const k = {
  todos: "todos",
  status: "status",

}

let id = 0;
const newTodo = ref('');

const todos = ref(loadFromLS(k.todos));
const status = ref(loadFromLS(k.status));

if (todos.value.length > 0) {
  id = Math.max(...todos.value.map(t => t.id));
}

const filteredTodos = computed(() => {
  if (status.value === allStatus.all) return todos.value;
  if (status.value === allStatus.finish) return todos.value.filter((t) => t.done);
  if (status.value === allStatus.active) return todos.value.filter((t) => !t.done);
});

function addTodo() {
  if (newTodo.value.trim() === '') return;

  todos.value.push({id: ++id, text: newTodo.value, done: false});
  newTodo.value = '';
}

function removeTodo(todoId) {
  todos.value = todos.value.filter((t) => t.id !== todoId);
}

function clearCompleted() {
  todos.value = todos.value.filter((t) => !t.done);
  if (status.value === allStatus.finish) status.value = allStatus.all
}

watch(todos, (v) => saveToLS(k.todos, v), {deep: true});
watch(status, (v) => saveToLS(k.status, v));

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key, fallback) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : (fallback ?? DEFAULTS[key]);
}
</script>

<template>
  <div>
    <el-container class="container">
      <el-header class="header">Todo List</el-header>

      <el-main class="main">
        <form @submit.prevent="addTodo">
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
          <div class="left">
            <button @click="status = allStatus.all" :class="{'selected-status' : status === allStatus.all}">
              全部
            </button>
            <button @click="status = allStatus.finish" :class="{'selected-status' : status === allStatus.finish}">
              已完成
            </button>
            <button @click="status = allStatus.active" :class="{'selected-status' : status === allStatus.active}">
              未完成
            </button>
          </div>
          <div class="right">
            <button @click="clearCompleted">清理所有已完成的todo</button>
          </div>
        </div>

        <ul>
          <li v-for="todo in filteredTodos" :key="todo.id">
            <div class="left">
              <el-checkbox v-model="todo.done" size="large"/>
              <p :class="{done: todo.done}">{{ todo.text }}</p>
            </div>
            <button type="button" @click="removeTodo(todo.id)">X</button>
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

  pointer-events: none;
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
  width: 520px;
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

  width: 520px;
  height: 50px;

  margin: 15px 0 15px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

.right button {
  background: revert;
}

.right button:hover {
  color: #409eff;
}

.selected-status {
  color: #409eff;
  font-weight: bold;
}

.input-todo-btn div {
  color: white;
}
</style>
<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/todo" class="nav-btn">todo</RouterLink>
    <RouterLink to="/about" class="nav-btn">about</RouterLink>
  </nav>

  <RouterView></RouterView>

</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  padding-right: 25px;
}

.nav-btn {
  font-weight: bold;
  color: black;

  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #409eff;
}
</style>
<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos,
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: monospace, sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#app {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>

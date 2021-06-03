<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted(){
    const vconsole = require('vconsole');
    new vconsole();
  }
}
</script>

<style lang="scss">
</style>

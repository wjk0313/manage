<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   
  </div>
  
</template>

<script>
// @ is an alias to c
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
        return {
          
        }
      },
  components: {
    HelloWorld
  }
}
</script>

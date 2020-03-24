<template>
  <div id="app">
    <header>
      <headmenu/>
    </header>
    <router-view/>
  </div>
</template>

<script>
import headmenu from "@/components/headmenu";
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    headmenu

  }
}

</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  header{
    width: 100%;
    height: 60px;
    background-color: #145896;
  }
  input{
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 1px solid #145896;
    font-size: 22px;
    outline:none;
    transition: border 0.4s, box-shadow 0.4s, background-color 0.4s;
  }
  input:hover{
    background-color: #ececec;
  }
  input:focus{
    border-bottom: 1px solid #145896;
    background-color: #ececec;
    box-shadow: inset 0 -2px 0 #145896;
  }

</style>

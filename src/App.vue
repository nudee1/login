<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
    apiKey: 'AIzaSyB_oMzqK3AC8YdtreRma7yNLg3RUR6G_70',
    authDomain: 'm555-c0af4.firebaseapp.com',
    databaseURL: 'https://m555-c0af4.firebaseio.com',
    projectId: 'm555-c0af4',
    storageBucket: 'm555-c0af4.appspot.com',
    messagingSenderId: '131311109150'
}
firebase.initializeApp(config)
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

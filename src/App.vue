<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDHXuVT-TqKuY8SVKSO86ya30kwXTlLpGU',
  authDomain: 'fir-9f580.firebaseapp.com',
  databaseURL: 'https://fir-9f580.firebaseio.com',
  projectId: 'fir-9f580',
  storageBucket: 'fir-9f580.appspot.com',
  messagingSenderId: '232780330744'
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

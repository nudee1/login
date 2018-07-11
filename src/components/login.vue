<template>
  <div class="hello">
    <center>
    <div class="column is-one-third">
     <div class="box">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" v-model="username" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" v-model="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" type="button" @click="login()" name="button">
      Login
    </button>
  </p>
</div>
     </div>
     </div>
    </center>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      shadmin: '',
      data: {
        username: '',
        password: ''
      }
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      firebase.database().ref('/admin/').once('value').then(function (snapshot) {
        that.shadmin = snapshot.val()
      })
    },
    login () {
      for (var mai in this.shadmin) {
        if (this.username === this.shadmin[mai].uasrname && this.password === this.shadmin[mai].password) {
          this.$router.replace('home1')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

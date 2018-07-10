<template>
  <div class="hello">
    <input type="text"  v-model="username" name="" value="">
    <input type="password"  v-model="password" name="" value="">
<button type="button" @click= "login()"name="button">login</button>
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

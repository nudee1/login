<template lang="html">
<div >
  เพิ่ม admin </br>
  <input type="text" name="" v-model="data.uasrname" value="">
  <input type="text" name="" v-model="data.password" value="">
  <button type="button" name="button" @click = "add()"> add</button> </br></br>
<table border="1">
  <tr>
    <td>uasrname</td>
    <td>password</td>
    <td>แก้ไข</td>
    <td>ลบ</td>
  </tr>
  <tr v-for ="(admin, key) in shadmin"  v-if = "sw !== key">
    <td>{{admin.uasrname}}</td>
    <td>{{admin.password}}</td>
    <td>  <button type="button" name="button" @click = "swap(key)"> Edit</button> </br></br></td>
    <td>  <button type="button" name="button" @click = "Delete(key)"> Delete</button> </br></br></td>
  </tr>
    <tr v-else  >
      <td>  <input type="text" name="" v-model="admin.uasrname" value=""></td>
      <td><input type="text" name="" v-model="admin.password" value=""></td>
      <td>  <button type="button" name="button" @click = "Update(key, admin.uasrname, admin.password)"> Save</button> </br></br></td>
      <td>  <button type="button" name="button" @click = "cancel()"> Cancle</button> </br></br></td>
    </tr>
</table>

</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      data: {
        uasrname: '',
        password: ''
      },
      shadmin: '',
      sw: ''
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
    add () {
      console.log('asd')
      firebase.database().ref('admin').push(this.data)
      this.data.uasrname = ''
      this.data.password = ''
      this.pullData()
    },
    Update (key, uasrname, password) {
      this.sw = ''
      firebase.database().ref('admin').child(key).update({
        uasrname: uasrname,
        password: password
      })
    },
    Delete (key) {
      firebase.database().ref('admin').child(key).remove()
      this.pullData()
    },
    swap: function (key) {
      this.sw = key
    },
    cancel () {
      this.sw = ''
    }
  }
}
</script>

<style lang="css">
</style>

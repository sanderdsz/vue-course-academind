<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Teste',
        age: '28'
      }
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age
      }
    }
  }
}
</script>

<style>

</style>
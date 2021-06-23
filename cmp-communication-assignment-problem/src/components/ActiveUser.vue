<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      require: true
    },
    userage: {
      type: String,
      require: true
    }
  }
}
</script>

<style>

</style>
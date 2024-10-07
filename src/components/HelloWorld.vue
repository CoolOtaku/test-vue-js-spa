<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <img alt="Аватар" src="../../public/avatar.jpg" width="125" height="125" />
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style>
.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.greetings img {
  border-radius: 50%;
}
</style>
<template>
  <div class="container">
    <h2 class>Question {{number}} / {{sumOfQuestions}}</h2>
    <span :technology>{{technology.software.text}}</span>
    <hr />

    <img src="..\..\assets\logo.png" alt />
    <router-link to="/results">
      <button class="btn btn-primary">go to results</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "1",
      sumOfQuestions: "100"
    };
  },
  props: ["technology"]
};
</script>

<style>
</style>
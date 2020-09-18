<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="..\..\assets\logo.png" alt />
        <h2 class>Skill self-evaluation</h2>
        <p
          class
        >Here you can choose which categories of questions you want to see on your test. You will see only questions up to the level you have chosen, never higher.</p>
        <p
          class
        >The highe level you chose, the more questions you will have to answer, but also the more time you will get to finish your test.</p>
        <h2 class>Remember</h2>
        <p class>Once you click SUBMIT button, you will not be anle to change your answer.</p>
      </div>
      <div class="col-6">
        <div class="test">
          <form action v-for="(value, name, index) in technology" :key="name">
            <input type="checkbox" @input="toggle($event)" />
            name: {{name}}
            <p>index: {{index}}</p>
            <p>value: {{value}}</p>
            <input type="range" min="1" max="3" v-model="value" />
            <p>J R S</p>
          </form>
          <p>{{technology}}</p>
          <router-link to="/quiz">
            <button class="btn btn-primary">go to questiosn</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technology: { sa: 0, js: 0, sql: 0 }
    };
  },
  methods: {
    toggle($event) {
      if ($event.target.checked) {
        $event.target.nextElementSibling.disabled = false;
      } else {
        $event.target.nextElementSibling.disabled = true;
      }
    }
  }
};
</script>

<style lang="scss">
.max-opacity {
  opacity: 1;
}
.min-opacity {
  opacity: 0.7;
}
img {
  width: 20vw;
}
</style> 
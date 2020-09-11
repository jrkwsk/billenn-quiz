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
          <app-technology v-for="technology in technologies" :technology="technology">{{technology}}</app-technology>

          <router-link to="/quiz">
            <button class="btn btn-primary">go to questiosn</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Technology from "./Technology.vue";

export default {
  data() {
    return {
      technologies: [
        { id: 1, name: "Software Architecture", shortcut: "SA", level: 0 },
        { id: 2, name: "Javascript", shortcut: "JS", level: 0 },
        { id: 3, name: ".NET", shortcut: "NET", level: 0 }

        // "Angular",
        // "Java",
        // "React",
        // "SQL",
        // "CSS",
        // "GIT"
      ]
    };
  },

  props: [""],

  components: {
    "app-technology": Technology
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
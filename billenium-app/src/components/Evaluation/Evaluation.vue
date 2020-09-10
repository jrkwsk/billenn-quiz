<template>
  <div class="container">
    <div class="explainer">
      <h1>explainr</h1>
    </div>
    <div class="test">
      <app-technology
        v-for="(technology, index) in technologyNames"
        :technologyNames="technologyNames[index]"
        :key="technology"
      ></app-technology>
    </div>

    <router-link to="/quiz">
      <button class="btn btn-primary">go to questiosn</button>
    </router-link>
  </div>
</template>

<script>
import Technology from "./Technology.vue";

export default {
  data() {
    return {
      technAnswer: "techanswer",
      technologyNames: ["Javascrit", "SQL", "git", "dupa", "css"]
    };
  },

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
</style> 
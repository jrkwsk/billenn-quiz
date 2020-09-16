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
          <app-technology
            v-for="(technology, index) in technologyNames"
            :technologyNames="technologyNames[index]"
            :key="technology"
            @input="addToCheckboxData($event)"
          ></app-technology>
          <h2>tutaj result : {{ result }}</h2>
          <!-- <h2>tutaj CheckboxData: {{ CheckboxData }}</h2> -->
          <h2>mateusz mowi {{mateusz}}</h2>

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
      technologyNames: [
        "Software Architecture",
        "Javascript",
        ".NET",
        "Angular",
        "Java",
        "React",
        "SQL",
        "CSS",
        "GIT"
      ],
      // checkboxData: "",
      mateusz: {},
      rawData: []
    };
  },

  props: ["result"],
  methods: {
    addToCheckboxData($event) {
      // console.log("dupaaaa");
      // add to raw data
      this.rawData.push($event);
      console.log($event);
      console.log("tutaj sa technolgie:" + this.rawData);

      this.mateusz = this.rawData;
    }
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
img {
  width: 20vw;
}
</style> 
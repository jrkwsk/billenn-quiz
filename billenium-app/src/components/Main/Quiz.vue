<template>
  <div class="container">
    <div class="row header-line">
      <div class="col-10">
        <h2>Question {{questionNo}} / {{questions.length}}</h2>
      </div>

      <div class="col-2 text-right">
        <span>{{ questions[questionNo-1].technology}}</span>
        <hr />
        <span>level: {{questions[questionNo-1].level}}</span>
      </div>
    </div>
    <hr />
    <h3>{{questions[questionNo-1].text}}</h3>
    <br />
    <form action>
      <br />
      <input type="radio" v-model="actualAnswer" :id="questions[questionNo-1].a" value="a" />
      <label :for="questions[questionNo-1].a">{{questions[questionNo-1].a}}</label>
      <br />
      <input type="radio" v-model="actualAnswer" :id="questions[questionNo-1].b" value="b" />
      <label :for="questions[questionNo-1].b">{{questions[questionNo-1].b}}</label>
      <br />
      <input type="radio" v-model="actualAnswer" :id="questions[questionNo-1].c" value="c" />
      <label :for="questions[questionNo-1].c">{{questions[questionNo-1].c}}</label>
      <br />
      <input type="radio" v-model="actualAnswer" :id="questions[questionNo-1].d" value="d" />
      <label :for="questions[questionNo-1].d">{{questions[questionNo-1].d}}</label>

      <br />
    </form>
    <!-- <h3>wszystkie: {{answers}}</h3>
    <h3>obecna: {{actualAnswer}}</h3>-->

    <div class="row footer-line">
      <div class="col-3">
        <img src="..\..\assets\logo.jpg" alt />
      </div>
      <div class="col-7">
        <h3>Time left: 00:00:00</h3>
      </div>
      <div class="col-2">
        <button
          class="btn btn-primary"
          @click="submitAnswer"
          v-show="questionNo!==questions.length"
          :disabled="actualAnswer===''"
        >submit</button>
        <router-link to="/results">
          <button class="btn btn-primary" v-show="questionNo==questions.length">go to results</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionNo: "1",
      answers: [],
      actualAnswer: "",
      //to do: get questions from the server
      questions: [
        {
          technology: "Javascript",
          level: 1,
          text: "What is JS",
          a: "this",
          b: "that",
          c: "sure",
          d: "none",
          correct: "a"
        },
        {
          technology: "GIT",
          level: 1,
          text: "What is GIT",
          a: "I know",
          b: "he knows",
          c: "noone knows",
          d: "who cares",
          correct: "a"
        },
        {
          technology: "SQL",
          level: 1,
          text: "What is SQL",
          a: "null",
          b: "blank",
          c: "0",
          d: "NaN",
          correct: "a"
        },
        {
          technology: "Javascript",
          level: 1,
          text: "What is JS",
          a: "this",
          b: "that",
          c: "sure",
          d: "none",
          correct: "a"
        },
        {
          technology: "GIT",
          level: 1,
          text: "What is GIT",
          a: "I know",
          b: "he knows",
          c: "noone knows",
          d: "who cares",
          correct: "a"
        },
        {
          technology: "SQL",
          level: 1,
          text: "What is SQL",
          a: "null",
          b: "blank",
          c: "0",
          d: "NaN",
          correct: "b"
        },
        {
          technology: "Javascript",
          level: 1,
          text: "What is JS",
          a: "this",
          b: "that",
          c: "sure",
          d: "none",
          correct: "a"
        },
        {
          technology: "GIT",
          level: 1,
          text: "What is GIT",
          a: "I know",
          b: "he knows",
          c: "noone knows",
          d: "who cares",
          correct: "c"
        },
        {
          technology: "SQL",
          level: 1,
          text: "What is SQL",
          a: "null",
          b: "blank",
          c: "0",
          d: "NaN",
          correct: "d"
        }
      ]
    };
  },
  methods: {
    submitAnswer() {
      this.questionNo++;
      this.answers.push(this.actualAnswer);
      const allInputs = document.querySelectorAll("input");
      //unchecks radios after sumitting
      allInputs.forEach(el => (el.checked = false));
      this.actualAnswer = "";
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 10vw;
}
label,
input {
  display: inline;
}
</style>
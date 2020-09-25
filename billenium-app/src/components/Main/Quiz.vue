<template>
  <div class="container">
    <div class="row header-line">
      <div class="col-10">
        <h2>Question {{questionNo}} / {{questions.length}}</h2>
      </div>

      <div class="col-2">
        <span>{{ questions[questionNo-1].technology}}</span>
      </div>
    </div>
    <hr />
    <h3>{{questions[questionNo-1].text}}</h3>
    <br />
    <form action>
      <br />
      <input
        type="radio"
        v-model="actualAnswer"
        :id="questions[questionNo-1].answer1"
        :value="questions[questionNo-1].answer1"
      />
      <label :for="questions[questionNo-1].answer1">{{questions[questionNo-1].answer1}}</label>
      <br />
      <input
        type="radio"
        v-model="actualAnswer"
        :id="questions[questionNo-1].answer2"
        :value="questions[questionNo-1].answer2"
      />
      <label :for="questions[questionNo-1].answer2">{{questions[questionNo-1].answer2}}</label>
      <br />
      <input
        type="radio"
        v-model="actualAnswer"
        :id="questions[questionNo-1].answer3"
        :value="questions[questionNo-1].answer3"
      />
      <label :for="questions[questionNo-1].answer2">{{questions[questionNo-1].answer3}}</label>
      <br />
      <input
        type="radio"
        v-model="actualAnswer"
        :id="questions[questionNo-1].answer4"
        :value="questions[questionNo-1].answer4"
      />
      <label :for="questions[questionNo-1].answer2">{{questions[questionNo-1].answer4}}</label>

      <br />
    </form>
    <h3>wszystkie{{answers}}</h3>
    <h3>obecna{{actualAnswer}}</h3>

    <div class="row footer-line">
      <div class="col-3">
        <img src="..\..\assets\logo.jpg" alt />
      </div>
      <div class="col-7">
        <h3>Time left: 00:00:00</h3>
      </div>
      <div class="col-2">
        <button class="btn btn-primary" @click="submitAnswer">submit</button>
      </div>
    </div>
    <!-- <router-link to="/results">
      <button class="btn btn-primary">go to results</button>
    </router-link>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionNo: "1",
      sumOfQuestions: "100",
      // questionsArr: [""],
      answers: [""],
      actualAnswer: "",
      questions: [
        {
          technology: "Javascript",
          level: 1,
          text: "What is JS",
          answer1: "this",
          answer2: "that",
          answer3: "sure",
          answer4: "none",
          correct: 1
        },
        {
          technology: "GIT",
          level: 1,

          text: "What is GIT",
          answer1: "I know",
          answer2: "he knows",
          answer3: "noone knows",
          answer4: "who cares",
          correct: 1
        },
        {
          technology: "SQL",
          level: 1,

          text: "What is SQL",
          answer1: "null",
          answer2: "blank",
          answer3: "0",
          answer4: "NaN",
          correct: 1
        },
        {
          technology: "Javascript",
          level: 1,

          text: "What is JS",
          answer1: "this",
          answer2: "that",
          answer3: "sure",
          answer4: "none",
          correct: 1
        },
        {
          technology: "GIT",
          level: 1,

          text: "What is GIT",
          answer1: "I know",
          answer2: "he knows",
          answer3: "noone knows",
          answer4: "who cares",
          correct: 1
        },
        {
          technology: "SQL",
          level: 1,

          text: "What is SQL",
          answer1: "null",
          answer2: "blank",
          answer3: "0",
          answer4: "NaN",
          correct: 2
        },
        {
          technology: "Javascript",
          level: 1,

          text: "What is JS",
          answer1: "this",
          answer2: "that",
          answer3: "sure",
          answer4: "none",
          correct: 1
        },
        {
          technology: "GIT",
          level: 1,

          text: "What is GIT",
          answer1: "I know",
          answer2: "he knows",
          answer3: "noone knows",
          answer4: "who cares",
          correct: 3
        },
        {
          technology: "SQL",
          level: 1,

          text: "What is SQL",
          answer1: "null",
          answer2: "blank",
          answer3: "0",
          answer4: "NaN",
          correct: 2
        }
      ]
    };
  },
  methods: {
    submitAnswer() {
      this.questionNo++;
      this.answers.push(this.actualAnswer);
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
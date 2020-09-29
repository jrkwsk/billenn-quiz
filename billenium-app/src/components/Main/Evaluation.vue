<template>
  <div class="container">
    <div class="row p-5">
      <div class="col-6 px-5 explainer-side">
        <img src="..\..\assets\logo.png" alt />
        <h2 class>Skill self-evaluation</h2>
        <hr />
        <p
          class
        >Here you can choose which categories of questions you want to see on your test. You will see only questions up to the level you have chosen, never higher.</p>
        <p
          class
        >The highe level you chose, the more questions you will have to answer, but also the more time you will get to finish your test.</p>
        <h2 class>Remember</h2>
        <hr />
        <p class>Once you click SUBMIT button, you will not be able to change your answer.</p>
      </div>
      <div class="col-6 px-5 test-side">
        <div class="test">
          <form action v-for="(value, name, index) in technology" :key="name">
            <input type="checkbox" @input="toggleDisabled($event)" v-model="value.ischecked" />
            {{value.text}}
            <input
              type="range"
              min="1"
              max="3"
              v-model="value.level"
              disabled
            />
            <p>Junior Regular Senior</p>
          </form>
          <!-- <p>{{technology}}</p> -->
          <!-- <button @click="submitLevels">sprawdz level</button> -->

          <!-- to do: enable button if at leat one button is checked -->
          <router-link to="/quiz">
            <button
              @click="submitLevels"
              class="btn btn-primary"
              :disabled="startTest"
            >go to questions</button>
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
      startTest: true,
      technology: {
        software: {
          text: "Software Architecture",
          name: "sa",
          level: 1,
          ischecked: false
        },
        net: {
          text: ".NET",
          name: "ner",
          level: 1,
          ischecked: false
        },
        java: {
          text: "Java",
          name: "ja",
          level: 1,
          ischecked: false
        },
        sql: {
          text: "SQL",
          name: "sql",
          level: 1,
          ischecked: false
        },
        git: {
          text: "GIT",
          name: "git",
          level: 1,
          ischecked: false
        },
        javascript: {
          text: "Javascript",
          name: "js",
          level: 1,
          ischecked: false
        },
        angular: {
          text: "Angular",
          name: "an",
          level: 1,
          ischecked: false
        },
        react: {
          text: "React",
          name: "re",
          level: 1,
          ischecked: false
        },
        CSS: {
          text: "CSS",
          name: "css",
          level: 1,
          ischecked: false
        }
      }
    };
  },

  methods: {
    toggleDisabled($event) {
      if ($event.target.checked) {
        $event.target.nextElementSibling.disabled = false;
      } else {
        $event.target.nextElementSibling.disabled = true;
      }
    },
    submitLevels() {
      //function changes value of level to 0 if technology is not checked. This works just before submiting the summary of form.
      const tech = this.technology;
      for (const [key, value] of Object.entries(tech)) {
        if (value.ischecked === false) {
          value.level = 0;
        }
      }
      //post to database
      this.$http
        .post(
          "https://vue-billen-codes.firebaseio.com/users.json",
          this.technology,
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

      //get list of questions
      this.$http
        .get("https://vue-billen-codes.firebaseio.com/users.json", {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          return response.json();
        })
        .then(users => console.log(users));
    }
  }
};

// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
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
div.test-side {
  column-count: 2;
}

input {
  display: block;
}
</style> 
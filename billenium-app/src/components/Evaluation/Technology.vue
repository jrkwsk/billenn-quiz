<template>
  <div class="container">
    <!-- //byyć może checked on click okaze sie niepotrzebne tbc -->
    <!-- :checked="checked" @click="checked=!checked" -->
    <input
      type="checkbox"
      v-model="checkedTech"
      :value="technologyNames"
      :id="technologyNames"
      @change="checkedAndLeveled"
    />
    <label :for="technologyNames">{{ technologyNames }}</label>
    <br />
    <div class="seniority-wrapper" :class="{ 'min-opacity': !checkedTech}">
      <input
        type="range"
        min="1"
        max="3"
        v-model="levelChosen"
        @input="checkedAndLeveled"
        :disabled="!checkedTech"
      />
      <br />
      <p>Junior Regular Senior</p>
    </div>
    <h2>tutaj result: {{ result }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedTech: "",
      techName: "",
      levelChosen: "1",
      result: []
    };
  },
  props: ["technologyNames"],
  methods: {
    checkedAndLeveled() {
      if (this.checkedTech == true) {
        this.techName = this.technologyNames;
        this.result = this.techName + ": " + this.levelChosen;
        // return this.result;
        // console.log(this.result);
      } else if (this.checkedTech == false) {
        this.techName = this.technologyNames;
        this.result = this.techName + ": " + 0;
        // console.log(this.result);

        // return this.result;
      }

      // console.log("dza");
      //     this.$http
      // .get("https://vue-billen-codes.firebaseio.com/codes.json", {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // })
      let evaluation = JSON.stringify(this.result);
      this.$http
        .put(
          "https://vue-billen-codes.firebaseio.com/evaluation.json",
          evaluation,
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(
          response => {
            console.log(response);
            // return response.json();
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  created() {
    this.techName = this.technologyNames;
    this.result = this.techName + ": " + 0;
  }
};
</script>

<style lang="scss" scoped>
.min-opacity {
  opacity: 0.5;
}
</style>
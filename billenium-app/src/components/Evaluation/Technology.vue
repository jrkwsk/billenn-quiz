<template>
  <div class="container">
    <!-- //byyć może checked on click okaze sie niepotrzebne tbc -->
    <!-- :checked="checked" @click="checked=!checked" -->
    <input type="checkbox" v-model="checkedTech" :value="technologyNames" :id="technologyNames" />
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
    <h1>tutaj wynik: {{ checkedAndLeveled() }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedTech: "",
      techName: "",
      levelChosen: "1"
    };
  },
  props: ["technologyNames"],
  methods: {
    checkedAndLeveled() {
      if (this.checkedTech == true) {
        this.techName = this.technologyNames;
        return this.techName + ": " + this.levelChosen;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.min-opacity {
  opacity: 0.5;
}
</style>
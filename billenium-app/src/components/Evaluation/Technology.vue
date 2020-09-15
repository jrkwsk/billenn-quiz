<template>
  <div class="container">
    <!-- //byyć może checked on click okaze sie niepotrzebne tbc -->
    <!-- :checked="checked" @click="checked=!checked" -->
    <input type="checkbox" v-model="checkedTech" :value="user.name" :id="user.id" />
    <label :for="user.id">{{ user.name }}</label>
    <br />
    <div class="seniority-wrapper" :class="{ 'min-opacity': !checkedTech}">
      <input
        type="range"
        min="1"
        max="3"
        v-model="levelChosen"
        @input="summary()"
        :disabled="!checkedTech"
      />
      <!-- maybe nt input event: to check -->
      <br />
      <p>Junior Regular Senior</p>
      <br />
    </div>
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
  props: ["users", "emailCode"],
  methods: {
    summary() {
      if (this.checkedTech) {
        const summary = {
          //todo save user email code in local storage?
          useraaa: this.emailCode,
          techName: this.user.name,
          techLevel: this.levelChosen
        };
        console.log(summary);
      } else {
        const summary = {
          //todo save user email code in local storage?
          useraaa: aaa,
          techName: this.user.name,
          techLevel: "0"
        };
        console.log(summary);
      }
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  }
};
</script>

<style lang="scss" scoped>
.min-opacity {
  opacity: 0.5;
}
</style>
<template>
  <div class="container">
    <div class="explainer">
      <h1>explainr</h1>
    </div>
    <div class="test">
      <h1>test</h1>
      <form action>
        <ul>
          <li v-for="tech in technologies" :key="tech.id" :id="tech.name">
            <input type="checkbox" v-model="tech.checked" :id="tech.shortcut" />
            <label for>{{tech.text}}</label>
            <br />
            <div class="seniority-wrapper">
              <input
                type="range"
                min="1"
                max="3"
                value="0"
                :id="tech.id"
                :disabled="tech.disabled = !tech.checked"
              />
              <p :class="{ 'min-opacity': !tech.checked }">junior regular senior</p>
            </div>
            <p>czy zaznaczone {{tech.checked}}</p>
            <p>czy nieaktywne {{tech.disabled}}</p>
          </li>
        </ul>
      </form>
    </div>

    <router-link to="/quiz">
      <button class="btn btn-primary">go to questiosn</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          id: "1",
          shortcut: "sa",
          text: "Software Archtecture",
          name: "softwarearchtecture",
          levelChosen: 0,
          checked: false,
          disabled: true
        },
        {
          id: "2",
          shortcut: "js",
          text: "Javascript",
          name: "javascript",
          levelChosen: 0,
          checked: false,
          disabled: true
        }
      ],
      technologiesChosen: [
        {
          name: "sa",
          level: "0"
        }
      ]
    };
  },
  methods: {
    toggleDisabled() {
      this.tech.checked === true
        ? (this.tech.disabled = false)
        : (this.tech.disabled = true);
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
</style> 
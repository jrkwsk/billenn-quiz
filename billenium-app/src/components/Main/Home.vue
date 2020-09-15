<template>
  <div class="container-fluid p-0 m-0 main-wrapper">
    <div class="row content">
      <div class="col-6 image-side"></div>
      <div class="col-6 text-side p-5">
        <img src="../../assets/logo.jpg" class="mb-5" />
        <p
          class="text-justify pt-5"
        >Welcome to the Billennium Test Base. Here you can take our recruitment test which will help us make an initial evaluation of your skills</p>
        <p class="text-justify pt-5">
          If you have already contacted our HR department, check your e-mail for access code to enter. If not, feel free to send us your CV at
          <a
            href="mailto:rekrutacja@billennium.com"
          >rekrutacja@billennium.com</a>
        </p>
        <form action>
          <label class="pt-5">Please enter the code recieved in e-mail to start the test:</label>
          <input type="text" v-model.trim="emailCode" @keydown="checkCandidate" />
        </form>
        <div class="enter-section d-flex justify-content-end pt-5 mt-5">
          <router-link :to="agreeEntry">
            <button class="btn btn-bille">enter</button>
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
      emailCode: "aaa",
      agreeEntry: "/"
    };
  },
  methods: {
    checkCandidate() {
      this.$http
        .get("https://vue-billen-codes.firebaseio.com/codes.json", {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          console.log(response.json());
          return response.json();
        })
        .then(codes =>
          !codes.includes(this.emailCode)
            ? (this.agreeEntry = "/invalid")
            : (this.agreeEntry = "/evaluation")
        );
    }
  }
};
</script>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
$color-of-background: #fff;

div.main-wrapper {
  max-width: 100vw;
  max-height: 100vh;
}
div.image-side {
  background-image: url("../../assets/comp.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
div.text-side {
  font: 100% $font-stack;
  background-color: $color-of-background;
  height: 100vh;
}
img {
  width: 80%;
}

div.enter-section {
  margin-bottom: 0;
}
</style>
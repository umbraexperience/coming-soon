<template>
  <div id="app">
    <div class="h-center padding-sides">
      <video src="./assets/umbra.mp4" autoplay loop class="w-video"></video>
      <div class="margin-top relative w-full h-auto">
        <h2 class="light absolute">
          An inmersive experience to find yourself.
        </h2>
        <h3 class="absolute">Coming Soon</h3>
      </div>
    </div>

    <div class="bottom">
      <a href="https://paypal.me/pools/c/8kxzH2J8F0" class="regular"
        >Contribute</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: black;
}
body * {
  color: #b4b4b4;
}
#app {
  font-family: serif;
  text-align: center;
  height: 100%;
  font-family: "Tiempos Headline Light", Times, serif;
  filter: blur(0.07rem);
  transition: filter 2s ease-in-out;
}

.relative {
  top: 0;
  left: 0;
  right: 0;
  position: relative;
}

.absolute {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 0;
}

.margin-top {
  margin-top: 2rem;
}

h2 {
  z-index: 10;
}
h3 {
  z-index: 5;

  opacity: 0.12;
}

.light {
  font-family: "Tiempos Headline Light", Times, serif;
}
.regular {
  font-family: "Tiempos Headline Regular", Times, serif;
}

.w-full {
  width: 100%;
}

h2 {
  font-size: 1.15rem;
  font-weight: normal;
}

h3 {
  font-family: "Tiempos Headline Regular", Times, serif;
  font-size: 3rem;

  font-weight: normal;
  margin-top: -0.7rem;
}
@media screen and (min-width: 650px) {
  h3 {
    font-size: 4.2rem;
    margin-top: -1.3rem;
  }
}

@media screen and (min-width: 650px) {
  h2 {
    font-size: 1.3rem;
  }
}
a {
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: filter 0.2s ease-in-out, color 0.2s ease-in-out;
}

a:hover {
  filter: blur(0.55rem);
}
.h-center {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.padding-sides {
  padding: 0 2rem;
}
.bottom {
  position: absolute;
  bottom: 6%;
  left: 0;
  right: 0;
}

.w-video {
  margin-top: 3rem;
  width: 75%;
}
@media screen and (min-width: 650px) {
  .w-video {
    width: 40%;
  }
}
</style>

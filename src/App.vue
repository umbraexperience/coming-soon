<template>
  <div id="app">
    <div class="h-center padding-sides">
      <video playsinline preload autoplay muted loop class="w-video">
        <source src="./assets/umbra.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div class="title-container w-full">
        <h2 class="title font-light absolute">
          <span>An inmersive experience to find yourself.</span>
        </h2>
        <h3 class="sub-title absolute font-regular">
          <span>Coming Soon</span>
        </h3>
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
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
  filter: blur(0.07rem);
  transition: filter 2s ease-in-out;
  overflow: hidden;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Light"),
    url("./assets/fonts/TiemposHeadline-Light.otf") format("otf");
  font-weight: 300;
}

@font-face {
  font-family: "Tiempos Headline";
  src: local("Tiempos Headline Regular"),
    url("./assets/fonts/TiemposHeadline-Regular.otf") format("otf");
  font-weight: 400;
}

.absolute {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 0;
  margin: 0;
}

.title {
  font-size: 1.15rem;
  font-weight: normal;
  white-space: nowrap;

  top: 1.65rem;
  z-index: 10;
}
.title span {
  background: linear-gradient(
    140deg,
    rgba(8, 8, 8, 1) 20%,
    rgba(94, 94, 94, 1) 50%,
    rgba(11, 11, 11, 1) 80%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 200% auto;
  animation: textShine 6s linear infinite;
}
.sub-title {
  font-size: 3rem;
  font-weight: normal;
  white-space: nowrap;

  z-index: 5;
}

.sub-title span {
  background: linear-gradient(
    140deg,
    rgb(4, 4, 4) 30%,
    rgb(20, 20, 20) 50%,
    rgb(4, 4, 4) 70%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 8s linear infinite;
}

.text-animation {
  background: linear-gradient(
    140deg,
    rgba(2, 2, 2, 1) 20%,
    rgba(80, 80, 80, 1) 50%,
    rgba(2, 2, 2, 1) 80%
  );

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;

  background-size: 200% auto;
  animation: textShine 8s linear infinite;
}

@keyframes textShine {
  to {
    background-position: -200%;
  }
}

@media screen and (min-width: 650px) {
  .sub-title {
    font-size: 4.2rem;
    margin-top: -1.3rem;
  }
}

@media screen and (min-width: 650px) {
  .title {
    top: 1.2rem;
    font-size: 1.3rem;
  }
}

.font-light {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 300;
}
.font-regular {
  font-family: "Tiempos Headline", Times, serif;
  font-weight: 400;
}

.w-full {
  width: 100%;
}

.title-container {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  text-align: center;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  transition: filter 0.2s ease-in-out, -webkit-text-fill-color 0.4s ease-in-out;

  background: linear-gradient(
    140deg,
    rgba(2, 2, 2, 1) 20%,
    rgba(80, 80, 80, 1) 50%,
    rgba(2, 2, 2, 1) 80%
  );

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 200% auto;
  animation: textShine 7s linear infinite;
}

@media screen and (min-width: 650px) {
  a:hover {
    filter: blur(0.55rem);
  }
}
.h-center {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.padding-sides {
  padding: 0 1.5rem;
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

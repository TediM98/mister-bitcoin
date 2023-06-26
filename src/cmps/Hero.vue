eslint-disable vue/multi-word-component-names
<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="title">Mister Bitcoin</h1>
      <p class="subtitle">
        Your ultimate trading app for conquering the world of cryptocurrencies!
      </p>
      <!-- <div class="buttons">
        <button class="send">Send Bitcoin</button>
        <button class="receive">Receive Bitcoin</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  //   name: 'HeroCmp',
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50vh;
  background: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url('../assets/img/home-background.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;

  .hero-content {
    text-align: center;
  }

  .title {
    font-size: 3em;
    margin-bottom: 0.5em;
    color: #ffffff;
  }

  .subtitle {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: #e3e3e3;
  }

  .buttons {
    display: flex;
    justify-content: center;

    button {
      margin: 0 1em;
      padding: 0.5em 1em;
      font-size: 1em;
      color: #fff;
      background: hsla(160, 100%, 37%, 1);
      border: none;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background: hsla(160, 100%, 37%, 0.8);
      }
    }
  }
}
</style>

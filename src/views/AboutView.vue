<script>
import harryImg from "/src/harryImg.jpg";

export default {
  data() {
    return {
      harryImg: harryImg,
    };
  },
};
</script>

<template>
  <p>
    More info at
    <a href="https://www.wizardingworld.com/" target="_blank">wizardingworld</a>
  </p>
  <img :src="harryImg" />
</template>

<style scoped>
p {
  text-align: center;
  margin-top: 5rem;
}
img {
  width: 500px;
  margin: auto;
  display: block;

  padding-top: 50px;
}
</style>

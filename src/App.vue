<script>
import SearchCharacter from "./components/SearchCharacter.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  components: {
    SearchCharacter,
  },
};
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/" class="home">Hem</RouterLink>
      <RouterLink to="/about" class="about">Om</RouterLink>
      <RouterLink to="/contact" class="contact">Kontakt</RouterLink>
    </nav>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  margin-top: 1rem;
}

.home,
.about,
.contact {
  padding-right: 1rem;
  text-decoration: none;
  color: black;
}
</style>

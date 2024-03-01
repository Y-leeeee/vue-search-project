<template>
  <div v-if="character">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" alt="Character Image" />
    <p>{{ character.ancestry }}</p>
    <p>{{ character.species }}</p>
    <p>{{ character.house }}</p>
    <p>{{ character.patronus }}</p>
    <p>{{ character.actor }}</p>
    <p>{{ character.alternate_names }}</p>
    <p>{{ character.gender }}</p>
    <p>{{ character.dateOfBirth }}</p>
    <p>{{ character.yearOfBirth }}</p>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
};
</script>

<style scoped></style>

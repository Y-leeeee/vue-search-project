<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <input
          class="input-form"
          type="text"
          v-model="search"
          placeholder="Type character name and press enter"
          @input="getCharacter"
        />
        <img :src="harryImg" class="homeImg" v-show="isShowing" />
        <div v-if="characters.length > 0 && search">
          <ul>
            <li v-for="character in characters" :key="character.id">
              <img
                :src="character.image"
                class="characterImg"
                alt="Character Image"
              />
              {{ character.name }}
              <button
                @click="showCharacterDetails(character)"
                class="btn btn-dark"
              >
                Details
              </button>
            </li>
          </ul>
        </div>
        <character-details
          v-if="selectedCharacterDetails"
          :character="selectedCharacterDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterDetails from "./CharacterDetails.vue";
import harryImg from "/src/wand.gif";

export default {
  name: "HarryPotterCharacters",

  components: {
    CharacterDetails,
  },

  data() {
    return {
      characters: [],
      search: "",
      selectedCharacterDetails: null,
      harryImg: harryImg,
      isShowing: true,
    };
  },

  methods: {
    getCharacter() {
      fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .then((characters) => {
          this.characters = characters.filter((character) =>
            character.name.toLowerCase().includes(this.search.toLowerCase())
          );
          this.isShowing = this.search === "" ? true : false;
        });
    },

    showCharacterDetails(character) {
      this.selectedCharacterDetails = character;
    },
  },
};
</script>

<style scoped>
.input-form {
  text-align: center;
  width: 700px;
  margin: auto;
  display: block;
  margin-top: 8rem;
}

.homeImg {
  width: 200px;
  display: block;
  margin: auto;
}

.characterImg {
  width: 100px;
  margin-top: 10px;
}

li {
  list-style: none;
}
</style>

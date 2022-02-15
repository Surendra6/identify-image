<template>
  <v-container class="results-container">
    <div class="action-wrapper">
      <router-link
        to="/report"
        class="generate-report v-btn v-btn--has-bg v-size--default primary"
        tag="button"
      >
        Generate Report
      </router-link>
    </div>

    <div class="results-list custom-scroll-bar">
      <div v-if="notRealImages.length === 0" class="mt-6 no-results">
        <h4>No Results</h4>
      </div>
      <v-hover v-else v-for="(image, index) in notRealImages" :key="index">
        <template v-slot:default="{ hover }">
          <v-card class="img-card">
            <img :src="image.image" class="thumbnail-image" />

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn
                  fab
                  dark
                  small
                  color="red"
                  @click="handleRemove(image.id)"
                >
                  <v-icon dark> mdi-delete-forever </v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ResultsList",

  data: () => ({
    dialogm1: "",
    dialog: false,
  }),
  computed: {
    ...mapState({
      notRealImages: (state) => state.imageSelection.notRealImages,
    }),
  },
  methods: {
    handleRemove(id) {
      this.$store.dispatch("imageSelection/removeNotRealImage", id);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/common.scss";
.results-container {
  margin-top: 10px;
  border-top: 1px solid rgb(0 0 0 / 20%);

  .action-wrapper {
    text-align: right;
  }
  .generate-report {
    text-decoration: none;
  }

  .results-list {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;

    .thumbnail-image {
      width: 100px;
      height: 100%;
      border-radius: 4px;
    }
  }
  .img-card {
    margin: 10px;
  }
  .no-results {
    width: 100%;
  }
}
</style>

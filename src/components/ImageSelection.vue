<template>
  <v-container class="selection-wrapper">
    <img :src="imageUrl" class="image" />
    <div class="action-wrapper">
      <v-btn width="150" @click="nextImage"> Real </v-btn>
      <v-dialog v-model="showDialog" scrollable max-width="450px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" width="150"> Not Real </v-btn>
        </template>
        <v-card>
          <v-card-title class="font-weight-bold">Why</v-card-title>
          <div class="text-md-left v-card__title">Choose features</div>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <div v-for="feature in features" :key="feature">
              <v-checkbox
                v-model="selectedFeatures"
                :label="feature"
                :value="feature"
              ></v-checkbox>
            </div>
          </v-card-text>
          <div class="text-md-left v-card__title">Other:</div>
          <div class="new-feature-input">
            <v-text-field
              v-model="ownFeature"
              label="Feature"
              placeholder="Enter your own feature"
              outlined
            ></v-text-field>
          </div>

          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue font-weight-bold" text @click="handleCancel">
              Cancel
            </v-btn>
            <v-btn
              color="blue font-weight-bold"
              :disabled="selectedFeatures.length === 0"
              text
              @click="handleOk"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { IMAGE_URL } from "../utils/Constants";
import { mapState } from "vuex";
export default {
  name: "ImageSelection",

  data: () => ({
    showDialog: false,
    imageId: "",
    imageUrl: "",
    selectedFeatures: [],
    ownFeature: "",
  }),
  computed: {
    ...mapState({
      features: (state) => state.imageSelection.features,
    }),
  },
  methods: {
    nextImage() {
      const id = new Date().getTime();
      this.imageId = id;
      this.imageUrl = `${IMAGE_URL}?t=${id}`;
    },
    handleCancel() {
      this.reset();
    },
    handleOk() {
      if (this.ownFeature.length !== 0) {
        this.selectedFeatures.push(this.ownFeature);
        this.$store.dispatch("imageSelection/setOwnFeature", this.ownFeature);
      }
      this.$store.dispatch("imageSelection/setNotRealImage", {
        id: this.imageId,
        image: this.imageUrl,
        selectedFeatures: this.selectedFeatures,
      });
      this.reset();
      this.nextImage();
    },
    reset() {
      this.showDialog = false;
      this.selectedFeatures = [];
      this.ownFeature = "";
    },
  },
  mounted() {
    this.nextImage();
  },
};
</script>

<style scoped>
.selection-wrapper {
  padding: 30px;
}
.image {
  width: 330px;
}

.action-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 0;
}

.new-feature-input {
  padding: 16px 24px 10px;
}
</style>

<template>
  <v-container>
    <v-card class="mx-auto report-layout" max-width="390">
      <v-card-title class="font-weight-bold">Report</v-card-title>
      <div class="reports custom-scroll-bar">
        <div v-for="(report, index) in reports" :key="`feature-${index}`">
          <div v-if="report.imageList.length > 0">
            <div class="feature-title">{{ report.feature }}</div>
            <span
              v-for="(image, index) in report.imageList"
              :key="`report-image-${index}`"
            >
              <img :src="image" class="thumbnail-image" />
            </span>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="action-wrapper">
        <router-link
          to="/"
          class="add-more v-btn v-btn--has-bg v-size--default primary"
          tag="button"
          >Add more
        </router-link>
      </div>
    </v-card>
  </v-container>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Report",

  data: () => ({
    reports: [],
  }),
  computed: {
    ...mapState({
      features: (state) => state.imageSelection.features,
      notRealImages: (state) => state.imageSelection.notRealImages,
    }),
  },
  watch: {
    notRealImages: {
      handler: function () {
        this.generateReports();
      },
      deep: true,
    },
  },
  methods: {
    generateReports() {
      this.reports = this.features.map((feature) => {
        return {
          feature,
          imageList: this.imagesByFeature(feature),
        };
      });
    },
    imagesByFeature(feature) {
      let images = [];
      this.notRealImages.forEach((item) => {
        if (item.selectedFeatures.includes(feature)) {
          images.push(item.image);
        }
      });
      return images;
    },
  },
  mounted() {
    this.generateReports();
  },
};
</script>

<style scoped lang="scss">
@import "../styles/common.scss";
.action-wrapper {
  text-align: right;
}
.add-more {
  text-decoration: none;
  margin: 10px;
}
.report-layout {
  margin: 20px auto;
}
.reports {
  text-align: left;
  height: 500px;
  overflow: auto;
}
.thumbnail-image {
  width: 100px;
  height: 100%;
  border-radius: 4px;
  margin: 10px;
}
.feature-title {
  margin-left: 15px;
  font-weight: 600;
}
</style>

<template>
  <v-container>
    <v-card class="mx-auto selection-layout" max-width="390">
      <ImageSelection />
      <ResultsList />
    </v-card>
  </v-container>
</template>

<script>
import ResultsList from "@/components/ResultsList.vue";
import ImageSelection from "@/components/ImageSelection.vue";
export default {
  name: "IdentifyImage",
  components: {
    ResultsList,
    ImageSelection,
  },
  data: () => ({}),
};
</script>


<style scoped lang="scss">
.selection-layout {
  margin: 20px auto;
}
</style>

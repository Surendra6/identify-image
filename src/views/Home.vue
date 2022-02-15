<template>
  <div class="home">
    <IdentifyImage />
  </div>
</template>

<script>
// @ is an alias to /src
import IdentifyImage from "@/components/IdentifyImage.vue";

export default {
  name: "Home",
  components: {
    IdentifyImage,
  },
};
</script>

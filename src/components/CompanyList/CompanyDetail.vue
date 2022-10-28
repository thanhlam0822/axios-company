<template>
  <h3>This is company : {{ company.name }}</h3>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      company: null,
    };
  },
  created() {
    axios
      .get("http://localhost:8080/api/company/" + this.$route.params.id)
      .then((response) => {
        this.company = response.data;
      });
  },
};
</script>

<template>
  {{ employee.id }}
  {{ employee.name }}
  {{ employee.email }}
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employee: null,
    };
  },

  created() {
    axios
      .get(
        "http://localhost:8080/api/company/" +
          this.$route.params.id +
          "/employees/" +
          this.$route.params.idEmployee
      )
      .then((response) => {
        this.employee = response.data;
      });
  },
};
</script>

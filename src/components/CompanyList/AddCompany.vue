<template>
  <h2>ADD COMPANY</h2>
  <form @submit.prevent="addCompany">
    <div>
      <label for="">Name:</label>
      <input type="text" v-model="name" />
      <button type="submit">Add</button>
    </div>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addCompany() {
      axios.post(`http://localhost:8080/api/company/`, {
        name: this.name,
      });
    },
  },
};
</script>

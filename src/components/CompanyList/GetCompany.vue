<template>
  <div>
    <ul>
      <li v-for="company in companies" :key="company.id">
        <p>{{ company.id }}</p>
        <p>{{ company.name }}</p>
        <button @click="isUpdate = !isUpdate">Update Form</button>
        <form v-if="isUpdate" @submit.prevent="updateCompany(company.id)">
          <input type="text" v-model="fixBug" />
          <button type="submit">Update</button>
        </form>

        <a :href="'/company/' + company.id">Details</a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      companies: [],
      name: "",
      isUpdate: false,
    };
  },
  methods: {
    updateCompany(id) {
      axios
        .put("http://localhost:8080/api/company/" + id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
  computed: {
    fixBug: {
      get() {
        return "";
      },
      set(companyName) {
        this.name = companyName;
      },
    },
  },
  created() {
    axios.get("http://localhost:8080/api/company/").then((response) => {
      this.companies = response.data;
    });
  },
};
</script>

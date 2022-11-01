<template>
  <div>
    <!-- <ul>
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
    </ul> -->
  </div>
  <div class="container">
    <h2>List Company</h2>
    <table class="table table-hover">
      <thead>
        <th>STT</th>
        <th>NAME</th>
        <th>ACTION</th>
        <th>DETAIL</th>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="company.id">
          <td>{{ (index += 1) }}</td>
          <td>{{ company.name }}</td>

          <td>
            <button class="btn btn-primary" @click="isUpdate = !isUpdate">
              Update Form
            </button>
            <form v-if="isUpdate" @submit.prevent="updateCompany(company.id)">
              <input type="text" v-model="fixBug" />
              <button type="submit">Update</button>
            </form>
            /
            <a
              :href="'/company/' + company.id + '/employees' + '/add'"
              class="btn btn-success"
              role="button"
              >ADD EMPLOYEES</a
            >
          </td>
          <td>
            <a :href="'/company/' + company.id + '/employees'"
              >List Employees</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <add-company-vue> </add-company-vue>
</template>
<script>
import axios from "axios";
import AddCompanyVue from "./AddCompany.vue";
export default {
  components: {
    AddCompanyVue,
  },
  data() {
    return {
      companies: [],
      name: "",
      isAdd: false,
      isUpdate: false,
    };
  },
  methods: {
    updateCompany(id) {
      alert("UPDATE SUCCESS");
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

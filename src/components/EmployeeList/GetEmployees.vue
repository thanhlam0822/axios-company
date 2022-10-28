<template>
  <ul>
    <li v-for="employee in employees" :key="employee.id">
      {{ employee.id }} {{ employee.name }} {{ employee.mail }}
      <update-employee
        v-model:name="updateName"
        v-model:mail="updateMail"
        @update-em="updateEmployee(employee.id)"
      >
      </update-employee>
      <button @click="deleteEmployee(employee.id)">Delete</button>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
import UpdateEmployee from "./UpdateEmployee.vue";

export default {
  components: {
    UpdateEmployee,
  },
  data() {
    return {
      employees: [],
      updateName: "",
      updateMail: "",

      isSuccess: false,
    };
  },
  methods: {
    updateEmployee(id) {
      axios
        .put(
          "http://localhost:8080/api/company/" +
            this.$route.params.id +
            "/employees/" +
            id,
          {
            name: this.updateName,
            mail: this.updateMail,
          }
        )
        .then((response) => {
          alert("UPDATE SUCCESSFULL");
          console.log(response);
        });
    },
    deleteEmployee(id) {
      axios
        .delete("http://localhost:8080/api/company/" + "employees/" + id)
        .then((response) => {
          alert("DELETE SUCCESSFUL");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },
  },
  watch: {
    name() {
      this.updateName = this.name;
      this.updateMail = this.mail;
    },
  },
  created() {
    axios
      .get(
        "http://localhost:8080/api/company/" +
          this.$route.params.id +
          "/employees"
      )
      .then((response) => {
        this.employees = response.data;
      });
  },
};
</script>

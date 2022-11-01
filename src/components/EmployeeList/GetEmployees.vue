<template>
  <!-- <ul>
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
  </ul> -->
  <div class="container">
    <h2>List of Employees</h2>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee.id">
          <td>{{ (index += 1) }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.mail }}</td>
          <td>
            <update-employee
              v-model:name="updateName"
              v-model:mail="updateMail"
              @update-em="updateEmployee(employee.id)"
            >
            </update-employee>
            /
            <button class="btn btn-danger" @click="deleteEmployee(employee.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
      currentPage: 1,
      perPage: 5,
      total: 100,
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
          `/employees`
      )
      .then((response) => {
        this.employees = response.data;
      });
  },
};
</script>

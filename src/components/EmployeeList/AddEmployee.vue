<template>
  <form @submit.prevent="addEmployee">
    <div v-for="employee in employees" :key="employee">
      <label for="">Name:</label> <input type="text" v-model="employee.name" />
      <label for="">Email:</label><input type="text" v-model="employee.mail" />
    </div>

    <button type="submit">Add Employee</button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      employees: [
        {
          name: "",
          mail: "",
        },
      ],
    };
  },
  methods: {
    addEmployee() {
      axios.post(
        `http://localhost:8080/api/company/${this.$route.params.id}/employees/`,

        this.employees
      );
    },
  },
};
</script>

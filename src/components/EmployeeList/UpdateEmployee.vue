<template>
  <button @click="isUpdate = !isUpdate">Update</button>
  <div v-if="isUpdate">
    <form @submit.prevent="updateEmployee">
      <label for="">Name:</label>
      <input
        :value="name"
        @input="(event) => $emit('update:name', event.target.value)"
      />
      <label for="">Email:</label>
      <input
        :value="mail"
        @input="(event) => $emit('update:mail', event.target.value)"
      />
      <button @click="$emit('update-em')">Update Employee</button>
    </form>
  </div>
</template>
<script>
export default {
  emits: ["update-em"],
  props: ["name", "mail"],
  data() {
    return {
      isUpdate: false,
    };
  },
  methods: {},

  // methods: {
  //   updateEmployee() {
  //     axios
  //       .put(
  //         "http://localhost:8080/api/company/" +
  //           this.$route.params.id +
  //           "/employees/" +
  //           this.$route.params.idEmployee,
  //         {
  //           name: this.updateName,
  //           mail: this.updateEmail,
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   },
  // },

  //   computed: {
  //     fixBug: {
  //       get() {
  //         return "";
  //       },
  //       set(name) {
  //         this.updateName = name;
  //       },
  //     },
  //     fixBug2: {
  //       get() {
  //         return "";
  //       },
  //       set(email) {
  //         this.updateEmail = email;
  //       },
  //     },
  //     fixBug3() {
  //       return !this.isUpdate;
  //     },
  //   },
};
</script>

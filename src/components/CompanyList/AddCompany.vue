<template>
  <ModalComponent @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <form @submit.prevent="addCompany">
        <div>
          <label for="">Name:</label>
          <input type="text" v-model="name" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  </ModalComponent>
  <button @click="toggleModal" type="button" class="btn btn-info">Add</button>
</template>
<script>
import axios from "axios";
import ModalComponent from "../EmployeeList/ModalComponent.vue";
import { ref } from "vue";
export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addCompany() {
      alert("ADD SUCCESSFUL");
      axios.post(`http://localhost:8080/api/company/`, {
        name: this.name,
      });
    },
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>
<style>
.modal-content {
  border: 0;
}
</style>

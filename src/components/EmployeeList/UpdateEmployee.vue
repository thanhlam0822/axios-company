<template>
  <ModalComponent @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <form class="form - update">
        <div class="form - group">
          <label class=".control-label" for="">Name:</label>
          <input
            :value="name"
            @input="(event) => $emit('update:name', event.target.value)"
          />
        </div>
        <div class="form-grou">
          <label for="">Email:</label>
          <input
            :value="mail"
            @input="(event) => $emit('update:mail', event.target.value)"
          />
        </div>

        <button class="btn btn-primary" @click="$emit('update-em')">
          Update Employee
        </button>
      </form>
    </div>
  </ModalComponent>
  <button @click="toggleModal" type="button" class="btn btn-info">
    Update
  </button>
</template>
<script>
import ModalComponent from "./ModalComponent.vue";
import { ref } from "vue";
export default {
  emits: ["update-em"],
  props: ["name", "mail"],
  components: {
    ModalComponent,
  },
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
form.form.\-.update {
  display: flex;
}
</style>

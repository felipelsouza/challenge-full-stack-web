<template>
  <div class="edit-student">
    <v-subheader>Editar Aluno</v-subheader>
    <v-card v-if="student">
      <v-row class="ml-6">
        <v-subheader class="overline">Registro Acadêmico: {{student.id}}</v-subheader>
        <v-subheader class="overline">CPF: {{student.cpf}}</v-subheader>
      </v-row>
      <Form :studentToEdit="student"/>
      <v-row class="ml-6">
        <v-subheader class="outline">Criado em: {{student.createdAt}}</v-subheader>
        <v-subheader class="outline">Atualizado em: {{student.updatedAt}}</v-subheader>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Form from "../components/Form";
import User from "../services/users";

export default {
  components: { Form },
  
  data() {
    return {
      student: null
    }
  },

  async mounted() {
    await this.getStudentById();
  },


  methods: {
    async getStudentById() {
      const routeId = this.$router.history.current.params.id;
      const user = await User.indexById(routeId)
        .then(res => {
          return res.data;
        });
      this.student = user;
    }
  }
};
</script>
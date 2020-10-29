<template>
  <div class="add-student">
    <v-subheader>Cadastrar Aluno</v-subheader>
    <v-card>
      <Form />
    </v-card>
  </div>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "EditStudent",

  components: { Form },
};
</script>

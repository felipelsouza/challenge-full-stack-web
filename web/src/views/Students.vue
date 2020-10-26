<template>
  <div class="students">
    <v-subheader>Listar Alunos</v-subheader>
    <v-container fluid class="ma-2">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="students"
          :items-per-page="10"
          :search="search"
          class="elevation-1"
        ></v-data-table>
          <!-- loading
          loading-text="Carregando alunos..." -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Students",

  data() {
    return {
      search: '',

      headers: [
        {
          text: "Registro Acadêmico",
          align: "start",
          value: "ra",
        },
        {
          text: "Nome",
          value: "name",
        },
        {
          text: "CPF",
          value: "cpf",
          sortable: false,
        },
        {
          text: "E-mail",
          value: "email",
          sortable: false,
        },
      ],

      students: [
        {
          ra: 1,
          name: "Felipe",
          cpf: "11111111111",
          email: "felipe@gmail.com",
        },
        {
          ra: 2,
          name: "Maria",
          cpf: "11111111111",
          email: "maria@gmail.com",
        },
        {
          ra: 3,
          name: "João",
          cpf: "11111111111",
          email: "joao@gmail.com",
        },
      ],
    };
  },
};
</script>

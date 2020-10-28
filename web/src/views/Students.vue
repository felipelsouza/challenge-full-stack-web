<template>
  <div class="students">
    <v-subheader>Listar Alunos</v-subheader>
    <v-container fluid class="ma-2">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Procurar"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <router-link :to="'/add-student'" style="text-decoration: none">
            <v-btn dark class="mb-2">Cadastrar Aluno</v-btn>
          </router-link>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="students"
          :items-per-page="10"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ students }">
            <v-icon small class="mr-2" @click="editStudent(students)"> mdi-pencil </v-icon>
            <v-icon small @click="deleteStudent()"> mdi-delete </v-icon>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">
                  Deseja confirmar exclusão?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="cancelDelete()">Cancelar</v-btn>
                  <v-btn color="blue darken-1" text @click="confirmDelete(students)">Confirmar</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import User from '../services/users';

export default {
  name: "Students",

  mounted() {
    User.index().then(res => {
      this.students = res.data
    });
  },

  data() {
    return {
      students: [],
      search: "",
      dialogDelete: false,

      headers: [
        {
          text: "Registro Acadêmico",
          align: "start",
          value: "id",
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
        {
          text: "",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },

  methods: {
    deleteStudent() {
      this.dialogDelete = true;
    },
    confirmDelete(student) {
      this.students.splice(this.index, 1);
      this.dialogDelete = false;
    },
    cancelDelete() {
      this.dialogDelete = false;
    },
    editStudent(student) {
      this.$router.push('edit-student');
    }
  },
};
</script>

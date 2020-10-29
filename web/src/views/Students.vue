<template>
  <div class="students">
    <v-subheader>Listar Alunos</v-subheader>
    <v-container fluid class="ma-2">
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <router-link :to="'/add-student'" style="text-decoration: none">
            <v-btn dark class="mb-2">Cadastrar Aluno</v-btn>
          </router-link>
        </v-card-title>
        <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Registro Acadêmico</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students" :key="student.id">
                  <td>{{ student.id }}</td>
                  <td>{{ student.name }}</td>
                  <td>{{ student.cpf }}</td>
                  <td>{{ student.email }}</td>
                  <td>
                    <v-icon small class="mr-2" @click="openEditModal(student)">
                      mdi-pencil
                    </v-icon>
                    <v-icon small @click="openDeleteModal(student.id)">
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="headline">
                      Deseja confirmar exclusão?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="cancelDelete()">Cancelar</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteStudent()">Confirmar</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import User from "../services/users";

export default {
  name: "Students",

  async mounted() {
    this.loadStudents();
  },

  data() {
    return {
      students: [],
      search: "",
      dialogDelete: false,
      studentToRemove: 0,
    };
  },

  methods: {
    async loadStudents() {
      await User.index().then((res) => {
        this.students = res.data;
      });
    },
    openDeleteModal(student) {
      this.studentToRemove = student;
      this.dialogDelete = true;
    },
    async deleteStudent() {
      await User.delete(this.studentToRemove);
      this.studentToRemoveId = 0;
      this.dialogDelete = false;
      this.loadStudents();
    },
    cancelDelete() {
      this.studentToRemove = 0;
      this.dialogDelete = false;
    },
    openEditModal(student) {
      this.$router.push({ path: `/edit-student/${student.id}` })
    }
  },
};
</script>

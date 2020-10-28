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
        <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th v-for="header in headers" :key="header.text">
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students" :key="student.id">
                  <td>{{ student.id }}</td>
                  <td>{{ student.name }}</td>
                  <td>{{ student.cpf }}</td>
                  <td>{{ student.email }}</td>
                  <td>
                    <v-icon small class="mr-2" @click="editStudent(student.id)"> mdi-pencil </v-icon>
                    <v-icon small @click="openDeleteModal(student.id)"> mdi-delete </v-icon>
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
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>

        <!-- <v-data-table
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
        </v-data-table> -->
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
        },
        {
          text: "E-mail",
          value: "email",
        },
        {
          text: "",
          value: "actions",
        },
      ],
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
    editStudent(student) {
      this.$router.push("edit-student");
    },
  },
};
</script>

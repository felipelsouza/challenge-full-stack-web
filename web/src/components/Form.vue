<template>
  <div class="form">
    <v-container fluid class="ma-1">
      <v-form v-model="valid" @submit.prevent="submit">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="9" md="3">
            <v-text-field
              v-model="name"
              label="Nome"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9" md="3">
            <v-text-field
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9" md="3">
            <v-text-field
              v-if="cpf.length === 0"
              v-model="cpf"
              label="CPF"
              :counter="11"
              :rules="cpfRules"
              required
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="ma-9">
          <v-spacer></v-spacer>
          <router-link 
            :to="'/'" 
            style="text-decoration: none"
          >
            <v-btn class="mr-4">Cancelar</v-btn>
          </router-link>
          <v-btn 
            class="mr-4" 
            type="submit" 
            :disabled="!valid"
          >
            Salvar
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import User from "../services/users";

export default {
  props: {
    studentToEdit: Object
  },

  mounted() {
    if(this.studentToEdit) {
      this.id = this.studentToEdit.id;
      this.name = this.studentToEdit.name;
      this.email = this.studentToEdit.email;
      this.cpf = this.studentToEdit.cpf;
    }
  },

  data() {
    return {
      valid: false,
      id: 0,
      name: "",
      email: "",
      cpf: "",

      nameRules: [(v) => !!v || "Insira o Nome do aluno"],
      emailRules: [
        (v) => !!v || "Insira o e-mail",
        (v) => /.+@.+/.test(v) || "Insira um e-mail válido",
      ],
      cpfRules: [
        (v) => !!v || "Insira o CPF",
        (v) => v.length <= 11 || "CPF deve conter 11 caracteres",
        (v) => v.length >= 11 || "CPF deve conter 11 caracteres",
      ],
    };
  },

  methods: {
    async submit() {
      if(!this.studentToEdit) {
        await User.create(this.name, this.email, this.cpf);
        alert("Cadastro realizado com sucesso!");
        this.$router.push("/");
      } else {
        await User.update(this.id, this.name, this.email);
        alert("Aluno editado com sucesso!");
        this.$router.push("/");
      }
    }
  },
};
</script>
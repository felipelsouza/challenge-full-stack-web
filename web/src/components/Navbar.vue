<template>
  <nav>
    <v-app-bar app flat dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey-text">
        <span class="font-weight-light">Grupo</span>
        <span>A</span>
        <span class="font-weight-light"> - Gerenciador de Matrículas</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-img src="../assets/grupoa-logo.png"></v-img>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item 
            v-for="link in links" 
            :key="link.text" 
            link :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "mdi-account-group",
          text: "Listar Alunos",
          route: "/",
        },
        {
          icon: "mdi-account-plus",
          text: "Adicionar Aluno",
          route: "/add-student",
        },
      ],
    };
  },
};
</script>
<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Naša online knjižnica</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list dense>
        
        <v-list-item @click="goToPage('home')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Početna</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item @click="goToPage('about')">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>O nama</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item @click="goToPage('books')">
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Knjige</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    }
  }
};
</script>

<style scoped>

.v-navigation-drawer {
  background-color: #f355a9; 
}

.v-list-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: #d3d3d3; 
}

.v-list-item-title {
  font-weight: bold;
}
</style>

<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" density="compact" flat>
      <v-avatar class="hidden-md-and-up" color="grey-darken-1" size="32"></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs color="grey-darken-2" centered>
        <v-tab v-for="link in links" 
        :key="link" 
        :to="link.vodi"
        :text="link.tekst"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet min-height="268" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" md="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view/>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="2">
            <v-sheet min-height="268" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        tekst: "Početna",
        vodi: "/"
      },
      {
        tekst: "Blog",
        vodi: "/blog"
      },
      {
        tekst: "O nama",
        vodi: "/onama"
      },
      {
        tekst: "Kontakt",
        vodi: "/kontakt"
      }
    ]
  })
}
</script>

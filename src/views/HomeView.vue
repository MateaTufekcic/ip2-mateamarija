<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search by list_name"
            single-line
            hide-details
            :loading="isLoading"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          v-for="(book, index) in paginatedBooks"
          :key="index"
          cols="12"
          md="3"
        >
          <BookItems :book="book" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> 
          <v-pagination
            v-model="page"
            :length="totalPages"
            @input="getData"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BookItems from "../components/BookItems.vue";
export default {
  name: 'HomeView',
  components: {
    BookItems
  },

  data() {
    return {
      books: [],
      page: 1, 
      totalPages: 0,
      itemsPerPage: 20, 
      search: "",
      isLoading: false,
      searchTimerId: null
    };
  },

  created() {
    this.getData();
  },

  computed: {
    paginatedBooks() {
      const start = (this.page - 1) * this.itemsPerPage;
      return this.books.slice(start, start + this.itemsPerPage);
    }
  },

  methods: {
    getData() {
      const api = "https://api.nytimes.com/svc/books/v3/lists/names.json";
      this.isLoading = true;

      this.axios.get(api, {
        params: {
          "api-key": "ovG52UU2j2mAXjghMHG2ucTlkSnA64jx",
          "list_name": this.search || undefined
        }
      })
      .then((response) => {
        this.books = response.data.results;
        this.totalPages = Math.ceil(response.data.num_results / this.itemsPerPage);
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Došlo je do greške:", error);
        this.isLoading = false;
      });
    },

    fetchEntriesDebounced() {
      clearTimeout(this.searchTimerId); 
      this.searchTimerId = setTimeout(() => {  
        this.getData();
      }, 500);  
    }
  },

  watch: {
    search(val) {
      if (!val) {
        return;
      }

      this.books = [];
      this.page = 1;
      this.isLoading = true;
      this.fetchEntriesDebounced();
    }
  }
};
</script>

<style>

</style>

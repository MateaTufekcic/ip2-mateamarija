<template>
  <v-card class="book-card">
    <v-card-title class="book-card-title">{{ book.list_name }}</v-card-title>
    <v-card-subtitle class="book-card-subtitle">{{ book.newest_published_date }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'BookItems',  
  props: {
    book: Object
  }
};
</script>

<style scoped>
.book-card {
  background: #ffffff;
  padding: 30px;
  max-width: 600px;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  z-index: 2;
  border-radius: 0;
}

.book-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  z-index: 1;
  animation: gradientAnimation 6s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  }
  50% {
    background: linear-gradient(45deg, #a6c1ee, #fbc2eb);
  }
  100% {
    background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  }
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.book-card-title {
  font-size: 0.7rem;
  font-weight: bold;
  color: #0e0e0e;
  z-index: 3;
  position: relative;
}

.book-card-subtitle {
  font-size: 0.6rem;
  color: #3f4343;
  z-index: 3;
  margin-top: 5px;
  position: relative;
}
</style>

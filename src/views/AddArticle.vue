<template>
  <v-container class="forma">
    <v-form ref="form" v-model="valid">
      <v-subheader class="text-center font-weight-bold display-2 naslov text-primary">Dodaj novu knjigu</v-subheader>
      <v-divider></v-divider>

      <v-text-field
        v-model="naslov"
        label="Naslov knjige"
        :rules="[v => !!v || 'Naslov je obavezan']"
        outlined
        required
      ></v-text-field>

      <v-textarea
        v-model="opis"
        label="Opis knjige"
        :rules="[v => !!v || 'Opis je obavezan']"
        outlined
        required
      ></v-textarea>

      <v-select
        v-model="zanr"
        :items="zanrovi"
        label="Odaberite žanr"
        :rules="[v => !!v || 'Žanr je obavezan']"
        outlined
        required
      ></v-select>

      <v-row>
        <v-col cols="12" lg="3">
          <v-btn @click="submitBook" color="primary" dark large class="submit-btn">
            Dodaj knjigu
          </v-btn>
        </v-col>

        <v-col cols="12" lg="9">
          <v-alert 
            type="success"
            v-model="successAlert" 
            dismissible
            v-if="successAlert">
            Hvala, uspješno ste dodali novu knjigu!
          </v-alert>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      naslov: '',
      opis: '',
      zanr: null,
      zanrovi: ['Fikcija', 'Nefikcija', 'Biografija', 'Poezija', 'Klasici', 'Triler', 'Fantastika'],
      successAlert: false,
    };
  },
  methods: {
    submitBook() {
      if (this.$refs.form.validate()) {
        this.successAlert = true;
        this.naslov = '';
        this.opis = '';
        this.zanr = null;
      }
    },
  },
};
</script>

<style scoped>
.forma {
  padding: 20px;
  background-color: #fce4ec;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.naslov {
  color: #d81b60;
  margin-bottom: 20px;
}

.submit-btn {
  background-color: #d81b60;
  color: white;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #c2185b;
}

.v-alert {
  background-color: #f8bbd0;
  color: #c2185b;
  border-radius: 5px;
  margin-top: 20px;
}

.v-alert--success {
  border-left: 5px solid #c2185b;
}

.v-alert--error {
  border-left: 5px solid #d32f2f;
}

.v-text-field .v-input__control {
  background-color: #fce4ec;
  border-radius: 5px;
}

.v-text-field label {
  color: #d81b60;
}

.v-text-field input {
  color: #c2185b;
}

.new-book-btn {
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.new-book-btn:hover {
  background-color: #444;
}

.add-book-btn {
  background-color: #fff;
  color: #d81b60;
  border: 2px solid #d81b60;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.add-book-btn:hover {
  background-color: #d81b60;
  color: white;
}
</style>

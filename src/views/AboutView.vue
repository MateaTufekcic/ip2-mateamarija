<template>
  <v-container>
    
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
        :src="require('@/assets/images1.jpeg')"
          height="400px"
          class="rounded-img"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
        :src="require('@/assets/images2.jpeg')"
          height="400px"
          class="rounded-img"
        ></v-img>
      </v-col>
    </v-row>

   
    <v-row>
      <v-col cols="12">
        <h1>Kontaktirajte nas</h1>
        <p>
          Dobrodošli u našu online knjižnicu! Ako imate bilo kakva pitanja ili želite više informacija o knjigama i resursima koje nudimo, 
          slobodno nas kontaktirajte putem telefona, emaila ili ispunite kontakt formu.
          Pružamo jednostavan pristup knjigama i resursima putem interneta, 
          omogućavajući korisnicima da istražuju i uživaju u literaturi u bilo kojem trenutku i sa bilo kojeg mesta.
          Svi naši resursi su pažljivo odabrani kako bi zadovoljili različite ukuse i potrebe čitatelja, sa novim naslovima koji se redovno dodaju.
          Pored klasičnih knjiga, naša platforma omogućava korisnicima da istražuju digitalne knjige i e-knjige koje su dostupne za čitanje na različitim uređajima.
          S naglaskom na obrazovanje i ljubav prema knjigama, naša online knjižnica je idealno mesto za učenike, 
          studente i sve ljubitelje knjiga koji žele da unaprede svoje znanje i prošire horizonte.
        </p>

       
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Adresa</v-list-item-title>
              <v-list-item-subtitle>Brčko, zona 1, bb, 76214</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>broj</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Telefon</v-list-item-title>
              <v-list-item-subtitle>063757058</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>theonlineLibrary@mail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <!-- Uspješan slanje poruke alert -->
        <v-alert 
          type="success"
          v-model="successAlert" 
          dismissible>
          Uspješno ste poslali poruku!
        </v-alert>
      </v-col>
    </v-row>

    
    <v-row>
      <v-col cols="12">
        <v-btn color="pink darken-1" class="my-5" @click="dialog = true">
          Kontaktirajte nas putem forme
        </v-btn>
      </v-col>
    </v-row>

   
    <v-dialog v-model="dialog" max-width="500px">
      <v-card class="contact-form-card">
        <v-card-title>
          <span class="headline">Kontakt Forma</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Ime" required class="contact-form-field"></v-text-field>
            <v-text-field label="Email" required class="contact-form-field"></v-text-field>
            <v-textarea label="Poruka" required class="contact-form-field"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink darken-1" text @click="dialog = false">
            Odustani
          </v-btn>
          <v-btn color="yellow darken-3" text @click="submitForm">
            Pošalji
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
    <v-row class="footer-section">
      <v-col cols="12">
        <v-card class="footer-card">
          <v-card-title>
            Ovaj projekt su radile Matea i Marija. API koji smo koristile za ovaj projekt je New York Times Books API.
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      successAlert: false
    };
  },
  methods: {
    submitForm() {
      this.dialog = false;
      this.successAlert = true;
    },
  },
};
</script>

<style scoped>

body {
  background-color: #ffc0cb; 
  margin: 0;
  padding: 0;
}


h1 {
  margin-bottom: 16px;
}

.my-5 {
  margin-top: 32px;
}

.v-img {
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.v-col.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-card {
  background-color: #2c2c2c;
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
}

.footer-section {
  margin-top: 30px;
}


.contact-form-card {
  background-color: #b63331;
  padding: 20px;
  border-radius: 10px;
}

.contact-form-field {
  background-color: #d3901d; 
  margin-bottom: 15px;
}

.v-btn {
  border-radius: 20px;
}

.v-btn.pink.darken-1 {
  background-color: #d81b60;
  color: white;
}

.v-btn.yellow.darken-3 {
  background-color: #fdd835;
  color: white;
}

.v-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8081;


app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          
  password: '',          
  database: 'knjiznica_db' 
});


// Povezujem se na bazu i obrađujem eventualnu grešku
db.connect((err) => {
    if (err) {
      console.error('Greška prilikom povezivanja sa bazom:', err); // Ako dođe do greške, ispisujem je u konzolu
    } else {
      console.log('Povezan sa bazom podataka.'); // Ako je uspješno, ispisujem poruku
    }
  });
  
  // API endpoint za dobivanje svih knjiga
  app.get('/api/books', (req, res) => {
    const query = 'SELECT * FROM books'; // SQL upit za dobivanje svih knjiga
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message }); // Ako dođe do greške, šaljem status 500 s porukom greške
      } else {
        res.json(result); // Uspješan odgovor s rezultatima
      }
    });
  });
  
  // API endpoint za dodavanje nove knjige
  app.post('/api/books', (req, res) => {
    const { title, author, published_date } = req.body; // Uzimam podatke iz tijela zahtjeva
    const query = 'INSERT INTO books (title, author, published_date) VALUES (?, ?, ?)'; // SQL upit za dodavanje knjige
    db.query(query, [title, author, published_date], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message }); // Šaljem grešku ako je došlo do problema
      } else {
        res.status(201).json({ message: 'Knjiga je uspešno dodana!' }); // Uspješno dodavanje
      }
    });
  });
  
  // API endpoint za ažuriranje postojeće knjige
  app.put('/api/books/:id', (req, res) => {
    const { id } = req.params; // Uzimam ID knjige iz URL-a
    const { title, author, published_date } = req.body; // Uzimam nove podatke iz tijela zahtjeva
    const query = 'UPDATE books SET title = ?, author = ?, published_date = ? WHERE id = ?'; // SQL upit za ažuriranje knjige
    db.query(query, [title, author, published_date, id], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message }); // Šaljem grešku ako je došlo do problema
      } else {
        res.json({ message: 'Knjiga je uspešno ažurirana!' }); // Uspješno ažuriranje
      }
    });
  });
  
  // API endpoint za brisanje knjige
  app.delete('/api/books/:id', (req, res) => {
    const { id } = req.params; // Uzimam ID knjige iz URL-a
    const query = 'DELETE FROM books WHERE id = ?'; // SQL upit za brisanje knjige
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message }); // Šaljem grešku ako je došlo do problema
      } else {
        res.json({ message: 'Knjiga je uspešno obrisana!' }); // Uspješno brisanje
      }
    });
  });
  
  // Pokrećem server na zadanom portu
  app.listen(port, () => {
    console.log(`Server radi na portu ${port}`); // Ispisujem poruku da server radi
  });
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware per servire file statici
app.use(express.static(path.join(__dirname, "public")));

// Route per le pagine
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/chi-siamo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "chi-siamo.html"));
});

app.get("/cosa-facciamo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cosa-facciamo.html"));
});

app.get("/contatti", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contatti.html"));
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});

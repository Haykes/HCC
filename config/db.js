const sqlite3 = require("sqlite3").verbose();

// création de la base de données dans un fichier nommé 'ma_base_de_donnees.sqlite'
const db = new sqlite3.Database("ma_base_de_donnees.sqlite");

// création de la table "Adhérents"
db.run(`CREATE TABLE Adherents (
  id_adherent INTEGER PRIMARY KEY,
  nom TEXT,
  prenom TEXT,
  email TEXT UNIQUE,
  mot_de_passe TEXT,
  date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
  role TEXT
)`);

// création de la table "Actualités"
db.run(`CREATE TABLE Actualites (
  id_actualite INTEGER PRIMARY KEY,
  titre TEXT,
  contenu TEXT,
  date_creation DATE,
  id_auteur INTEGER,
  FOREIGN KEY (id_auteur) REFERENCES Adherents (id_adherent)
)`);

// création de la table "Matchs"
db.run(`CREATE TABLE Matchs (
  id_match INTEGER PRIMARY KEY,
  date_match DATE,
  id_createur INTEGER,
  adversaire TEXT,
  score_final TEXT,
  FOREIGN KEY (id_createur) REFERENCES Adherents (id_adherent)
)`);

// création de la table de liaison "Participations"
db.run(`CREATE TABLE Participations (
  id_adherent INTEGER,
  id_match INTEGER,
  PRIMARY KEY (id_adherent, id_match),
  FOREIGN KEY (id_adherent) REFERENCES Adherents (id_adherent),
  FOREIGN KEY (id_match) REFERENCES Matchs (id_match)
)`);

// fermeture de la base de données
db.close();

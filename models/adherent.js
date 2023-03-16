const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ma_base_de_donnees.sqlite");

module.exports = {
  createAdherent: (adherent, callback) => {
    const { nom, prenom, email, mot_de_passe, date_inscription, role } =
      adherent;
    const sql =
      "INSERT INTO Adherents (nom, prenom, email, mot_de_passe, date_inscription, role) VALUES (?, ?, ?, ?, ?, ?)";
    db.run(
      sql,
      [nom, prenom, email, mot_de_passe, date_inscription, role],
      function (err) {
        callback(err, { id: this.lastID });
      }
    );
  },

  getAdherentById: (id, callback) => {
    const sql = "SELECT * FROM Adherents WHERE id_adherent = ?";
    db.get(sql, [id], (err, row) => {
      callback(err, row);
    });
  },

  getAllAdherents: (callback) => {
    const sql = "SELECT * FROM Adherents";
    db.all(sql, [], (err, rows) => {
      callback(err, rows);
    });
  },

  updateAdherent: (id, adherent, callback) => {
    const { nom, prenom, email, mot_de_passe, date_inscription, role } =
      adherent;
    const sql =
      "UPDATE Adherents SET nom = ?, prenom = ?, email = ?, mot_de_passe = ?, date_inscription = ?, role = ? WHERE id_adherent = ?";
    db.run(
      sql,
      [nom, prenom, email, mot_de_passe, date_inscription, role, id],
      function (err) {
        callback(err, { changes: this.changes });
      }
    );
  },

  deleteAdherent: (id, callback) => {
    const sql = "DELETE FROM Adherents WHERE id_adherent = ?";
    db.run(sql, [id], function (err) {
      callback(err, { changes: this.changes });
    });
  },
};

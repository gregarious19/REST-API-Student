const { query } = require("express");
const pool = require("../../db.js");
const queries = require("./queries.js");

const getStudents = (req, res) => {
  const { id } = req.query;
  pool.query(queries.getStudents(id), (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;
  // Assuming checkStudent returns a boolean
  if (
    (pool.query(queries.checkStudent({ email })),
    (err, result) => result === email)
  ) {
    pool.query(
      queries.addStudent({ name, email, age, dob }), // Assuming addStudent is a function or a template string
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }

        pool.query(queries.getStudents(), (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
          }
          return res.status(200).json(result.rows);
        });
      }
    );
  } else {
    return res
      .status(401)
      .json({ status: 401, data: [], message: "already present" });
  }
};

const removeStudents = (req, res) => {
  const { id } = req.body;
  if (
    (pool.query(queries.checkStudent({ id })), (err, result) => result === id)
  ) {
    pool.query(queries.removeStudent({ id }), (err, result) => {
      try {
        if (err) throw err;
        else {
          pool.query(queries.getStudents(), (err, result) => {
            res.status(200).json({ status: "ok", data: result.rows });
          });
        }
      } catch {
        res.status(500).send(err);
      }
    });
  } else {
    res.send("not found");
  }
};

module.exports = { getStudents, addStudents, removeStudents };

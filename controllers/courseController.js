const db = require("../config/db"); // adjust path if needed

// 📌 CREATE Course
exports.createCourse = (req, res) => {
  const { code, title, units } = req.body;
  if (!code || !title || !units) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO courses (code, title, units) VALUES (?, ?, ?)";
  db.query(sql, [code, title, units], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "Course code already exists" });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Course created", id: result.insertId });
  });
};

// 📌 READ ALL Courses
exports.getCourses = (req, res) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// 📌 READ ONE Course
exports.getCourseById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM courses WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: "Course not found" });
    res.json(results[0]);
  });
};

// 📌 UPDATE Course
exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { code, title, units } = req.body;

  const sql = "UPDATE courses SET code=?, title=?, units=? WHERE id=?";
  db.query(sql, [code, title, units, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course updated" });
  });
};

// 📌 DELETE Course
exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM courses WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  });
};
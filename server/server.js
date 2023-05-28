const PORT = process.env.PORT ?? 9090;
const express = require("express");
const cors = require("cors")
const app = express();
const pool = require("./db");

app.use(cors())

app.get("/todos/:userEmail", async (req, res) => {
  const userEmail = "farnooshmoayeri@gmail.com";
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

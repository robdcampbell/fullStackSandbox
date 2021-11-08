const express = require("express");
const app = express();
const PORT = 5000;

//import users and sequelize library
const { sequelize, User } = require("./models");

//midelware
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;

  try {
    // Sequelize creat based on Model
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(err).json(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    // Model.findAll() will retrieve all of a certain model
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});
app.get("/users/:uuid", async (req, res) => {
  try {
    // Model.findOne()
    const uuid = req.params.uuid;
    const user = await User.findOne({
      where: { uuid },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
  // Syncs the models listed in models directory to populate tables in the DB
  // await sequelize.sync({ force: true });
  await sequelize.authenticate();
  console.log("Database Connected!");
});

const express = require("express");
const cors = require("cors");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//Api Endponints

//GET /login ? email & pass
server.get("/login", (req, res) => {
  const email = req.query.email;
  const pass = req.query.pass;

  if (!email || !pass) {
    res.sendStatus(404);
  } else {
    if (email === "ivan@adalab.es" && pass === "1234") {
      res.json({ userId: "9876" });
    } else {
      res.json({ error: "Error" });
    }
  }
});

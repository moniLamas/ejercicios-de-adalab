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

// API
server.get("/", (req, res) => {
  console.log("Peticion a la ruta /");
  res.send("<html><body><h1>Hola</h1></body></html>");
});

server.get("/users", (req, res) => {
  console.log("Peticion a la ruta GET /users");
  console.log(req.query);

  const response = {
    users: [{ name: "Irene" }, { name: "Ana" }],
  };
  const filterdata = response.users.filter(
    (user) => user.name === req.query.name
  );
  res.json(filterdata);
});

server.post("/users", (req, res) => {
  res.json({ error: "No esta permitido" });
});

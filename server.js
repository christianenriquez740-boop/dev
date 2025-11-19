import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/install", (req, res) => {
  console.log("Instalación recibida:", req.body);
  res.status(200).json({ message: "API instalada correctamente", data: req.body });
});

app.post("/uninstall", (req, res) => {
  console.log("Desinstalación recibida:", req.body);
  res.status(200).json({ message: "API desinstalada correctamente", data: req.body });
});

app.get("/", (req, res) => {
  res.send("Servidor activo: Lucky Monkey API 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

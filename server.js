const express = require("express");
const app = express();
app.use(express.json());

// Ruta de instalación
app.post("/install", (req, res) => {
  res.status(200).json({ message: "API instalada correctamente", data: req.body });
});

// Ruta de desinstalación
app.post("/uninstall", (req, res) => {
  res.status(200).json({ message: "API desinstalada correctamente", data: req.body });
});

// Ruta de mensajes de Telegram
app.post("/telegram", (req, res) => {
  const { message } = req.body;
  console.log("Mensaje recibido de Telegram:", message);

  res.status(200).json({
    reply: "Lucky Monkey Bot activo 🚀",
    original: message
  });
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

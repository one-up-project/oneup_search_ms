import express from "express";
import cors from "cors";
import storeRoutes from "./routes/stores.js";

const PORT = process.env.PORT;
const URL_GATEWAY = process.env.URL_GATEWAY;
const app = express();

app.options("/", (req, res) => {
  //res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204);
});

// permitir solo ciertos orígenes
// react app http://localhost:3000
// gateway http://localhost:4000
// Configuración básica de CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true,
  })
);

// Configuración de rutas
app.use("/search-ms/stores", storeRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

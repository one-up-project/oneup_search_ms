import express from "express";
import cors from "cors";
import storeRoutes from './routes/stores.js';

const PORT = 8800;
const app = express();

// Configuración básica de CORS
app.use(cors());

// permitir solo ciertos orígenes
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true, 
}));


app.use("/search-ms/stores", storeRoutes);

app.options("/", (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
  });
  

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });   
  
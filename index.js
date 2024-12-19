import express from "express";
import storeRoutes from './routes/stores.js';

const PORT = 8800;
const app = express();


app.use("/search-ms/stores", storeRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });   
  
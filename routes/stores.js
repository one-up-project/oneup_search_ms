
import express  from "express";
import { getStores } from "../callbacks/store.js";

const router = express.Router()

//obtener las reseñas de productos
//lat and lon from the user
router.get("/get-near-stores/:lat/:lon", getStores);

export default router 
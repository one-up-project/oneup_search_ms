import express from "express";
import {
  getStores,
  getStoresByName,
  getStoreById,
} from "../callbacks/store.js";

const router = express.Router();

//obtener las tiendas en un radio de 2km
//lat and lon from the user
router.get("/get-near-stores/:lat/:lon", getStores);

//obtener las tiendas por nombre y categoria
router.get("/get-stores-by-name/:name/:category", getStoresByName);

//obtener tienda por id
router.get("/get-store-by-id/:id", getStoreById);

export default router;

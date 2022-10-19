import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  addProduct,
  getProduct,
  getProducts,
  allProduct,
  deleteProduct,
} from "../controllers/product.js";

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/find", allProduct);
router.delete("/:id", auth, deleteProduct);
export default router;

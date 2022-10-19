import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  categories: { type: Array },
  imgFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  price: { type: String, required: true },
  inStock: { type: Boolean, default: true },
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;

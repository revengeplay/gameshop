import ProductModel from "../models/product.js";
import mongoose from "mongoose";

export const addProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ProductModel({
    ...product,
    createdAt: new Date().toISOString(),
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(404).json({ message: "등록이 되지 않았습니다." });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: "잘못되었습니다." });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: "잘못되었습니다." });
  }
};

export const allProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await ProductModel.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `존재하지 않습니다. : ${id}` });
    }
    await ProductModel.findByIdAndRemove(id);
    res.json({ message: "삭제되었습니다." });
  } catch (error) {
    res.status(404).json({ message: "잘못되었습니다." });
  }
};

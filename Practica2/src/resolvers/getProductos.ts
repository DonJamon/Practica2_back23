import { Request, Response } from "npm:express@4.18.2";
import productSchema from "../db/schema.ts";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productSchema.find().exec();

    if (products.length === 0) {
      res.status(404).send("No hay productos");
      return;
    }
    // Devuelve la lista de productos
    const productos = products.map((product) => ({
      name: product.name,
      price: product.price,
    }));
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default getAllProducts;
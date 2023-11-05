import { Request, Response } from "npm:express@4.18.2";
import productSchema from "../db/schema.ts";

const postProduct = async (req: Request, res: Response) => {
  try {
    const { name, cif } = req.body;
    if (!name || !cif) {
      res.status(400).send("faltan parametros");
      return;
    }
    const producto = new productSchema({ name, cif });
    await producto.save();
    res.status(200).send({
      name: producto.name,
      price: producto.price,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};
export default postProduct;
import { Request, Response } from "npm:express@4.18.2";
import productSchema from "../db/schema.ts";

const deleteProducto = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const client = await productSchema.findOneAndDelete({ _id }).exec();
    if (!client) {
      res.status(404).send("no existe");
      return;
    }
    res.status(200).send("borrado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteProducto;
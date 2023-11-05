import { Request, Response } from "npm:express@4.18.2";
import clientSchema from "../db/schema.ts";

const postClient = async (req: Request, res: Response) => {
  try {
    const { name, cif } = req.body;
    if (!name || !cif) {
      res.status(400).send("faltan parametros");
      return;
    }
    const cliente = new clientSchema({ name, cif });
    await cliente.save();
    res.status(200).send({
      name: cliente.name,
      cif: cliente.cif,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};
export default postClient;
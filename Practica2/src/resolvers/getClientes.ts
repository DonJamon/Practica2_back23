import { Request, Response } from "npm:express@4.18.2";
import clientSchema from "../db/schema.ts";

const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await clientSchema.find().exec();

    if (clients.length === 0) {
      res.status(404).send("No hay clientes");
      return;
    }
    // Devuelve la lista de productos
    const clientes = clients.map((client) => ({
      name: client.name,
      cif: client.cif,
    }));
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default getAllClients;
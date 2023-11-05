import { Application, Router } from "oak";

import { deleteCliente } from "./resolvers/deleteCliente.ts";
import { deleteProducto } from "./resolvers/deleteProducto.ts";
import { getAllClients } from "./resolvers/getClientes.ts";
import { getAllProducts } from "./resolvers/getProductos.ts";
import { postProduct } from "./resolvers/postProducto.ts";
import { postClient } from "./resolvers/postCliente.ts";

const router = new Router();

router
  .get("/getProducts", getAllProducts)
  .get("/getClient", getAllClients)
  .delete("/deleteClient/", deleteCliente)
  .delete("/deleteProduct/", deleteProducto)
  .post("/addClient", postClient)
  .post("/addProducts", postProduct);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 7777 });
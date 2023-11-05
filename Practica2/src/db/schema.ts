import { ObjectId } from "mongo";
import { client } from "../types.ts";
import { product } from "../types.ts";
import { invoice } from "../types.ts";

export type clientSchema = client & {
  _id: ObjectId;
};
export type productSchema = product & {
  _id: ObjectId;
};
export type invoiceSchema = invoice & {
  _id: ObjectId;
};
import express from "express";
import { validateRequest } from "../../middlewares";
import {
  ClientQueryValidator,
  ClientValidator,
  UpdateClientValidator,
} from "./clientsModel";
import clientsController from "./clientsController";

const router = express.Router();

router.post(
  "/",
  validateRequest({
    body: ClientValidator,
  }),
  clientsController.createClient
);

router.get(
  "/",
  validateRequest({
    query: ClientQueryValidator,
  }),
  clientsController.findAllClients
);

router.get("/:id", clientsController.findOneClient);

router.put(
  "/:id",
  validateRequest({
    body: UpdateClientValidator,
  }),
  clientsController.updateClient
);

router.delete("/:id", clientsController.deleteClient);

export default router;

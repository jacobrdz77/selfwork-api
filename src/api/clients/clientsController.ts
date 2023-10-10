import { NextFunction, Request, Response } from "express";
import { Client } from "./clientsModel";
import {
  createClientService,
  deleteClientService,
  findAllClientsService,
  findOneClientService,
  updateClientService,
} from "./clientsService";

async function createClient(
  req: Request<{}, {}, Client>,
  res: Response,
  next: NextFunction
) {
  try {
    const client = await createClientService(req.body);
    return res.status(200).json(client);
  } catch (error) {
    next(error);
  }
}

async function findAllClients(
  req: Request<{}, {}, {}, { userId: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const clients = await findAllClientsService(req.query.userId);
    return res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
}

async function findOneClient(
  req: Request<{ id: string }, {}, Client>,
  res: Response,
  next: NextFunction
) {
  try {
    const client = await findOneClientService(req.params.id);

    if (!client) {
      return res
        .status(404)
        .json({ message: `Client with ID: ${req.params.id} not found.` });
    }

    return res.status(200).json(client);
  } catch (error) {
    next(error);
  }
}

async function updateClient(
  req: Request<{ id: string }, {}, Client>,
  res: Response,
  next: NextFunction
) {
  try {
    await updateClientService(req.params.id, req.body);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

async function deleteClient(
  req: Request<{ id: string }, {}, Client>,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteClientService(req.params.id);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

export default {
  findOneClient,
  findAllClients,
  createClient,
  updateClient,
  deleteClient,
};

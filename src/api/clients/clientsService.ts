// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import { Client } from "./clientsModel";

export async function createClientService(client: Client) {
  const newClient = await prisma.client.create({
    data: {
      name: client.name,
      email: client.email,
      phone: client.phone,
      companyName: client.companyName,
      businessAddress: client.businessAddress,
      user: {
        connect: {
          id: client.userId,
        },
      },
    },
  });

  return newClient;
}

export async function findAllClientsService(userId: string) {
  const clients = await prisma.client.findMany({
    where: {
      userId,
    },
  });

  return clients;
}

export async function findOneClientService(id: string) {
  const client = await prisma.client.findUnique({
    where: {
      id,
    },
  });

  console.log("Client: ", client);

  return client;
}

export async function updateClientService(id: string, clientData: Client) {
  await prisma.client.update({
    where: {
      id,
    },
    data: clientData,
  });
}

export async function deleteClientService(id: string) {
  await prisma.client.delete({
    where: {
      id,
    },
  });
}

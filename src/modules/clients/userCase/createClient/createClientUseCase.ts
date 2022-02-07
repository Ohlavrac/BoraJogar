import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
    username: string;
    password: string;
    email: string;
    number: string;
    discordId: string;
    urlImage: string;
}

export class CreateClientUseCase {
    async execute({username, password, email, number, discordId, urlImage}: ICreateClient) {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                },
                email: {
                    equals: email,
                },
                number: {
                    equals: number
                }
            }
        });

        if (clientExists) {
            throw new Error("Ja existe um cliente com essas informações")
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                email,
                number,
                password: hashPassword,
                urlImage,
                discordId
            }
        });

        return client;
    }
}
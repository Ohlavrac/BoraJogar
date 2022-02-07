import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

export class CreateClientController {
    async handle (req: Request, res: Response) {
        const {
            username,
            email,
            number,
            password,
            urlImage,
            discordId
        } = req.body

        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            username,
            email,
            number,
            password,
            urlImage,
            discordId
        });

        return res.json(result);
    }
}
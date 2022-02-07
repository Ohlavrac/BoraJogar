import { Router } from "express";
import { CreateClientController } from "./modules/clients/userCase/createClient/createClientController";

const routes = Router();

const createClientController = new CreateClientController()

routes.post("/registraClient", createClientController.handle);

export default routes;
import { application, Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.send("Ola Mundo");
});

export default routes;
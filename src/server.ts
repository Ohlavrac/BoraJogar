import express from "express";
import routes from "./routes";

const server = express();
const port = 3000;

server.use(routes);

server.listen(3000, () => console.log("Server rodando na porta: "+ port));
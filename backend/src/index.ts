import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .get("/", () => "Потратил несколько часов на то, чтобы понять, что реакт говно и сделал сэмпл с фронтэндом и бэкэндом в докере")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

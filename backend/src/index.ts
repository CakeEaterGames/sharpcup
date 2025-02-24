import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

let counter = 0;

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello!")
  .get("/counter", () => counter)
  .post("/counter", () => {
    counter++;
    return counter;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

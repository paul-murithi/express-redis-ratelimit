import "dotenv/config";
import { Redis } from "ioredis";
import { script } from "./scripts/load-script.js";

const HOST = process.env.REDIS_HOST;
const PORT = Number(process.env.REDIS_PORT);

export const redis = new Redis({
  host: HOST,
  port: PORT,
});

redis.on("connect", () => {
  console.log(`redis successfully connected to port: ${PORT}`);
});

redis.on("error", (err) => {
  console.log(`An error occured: ${err.message}`);
});

const result = await redis.eval(script, 1, "my:key", 60);
console.log(result);

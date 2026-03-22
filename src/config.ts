import "dotenv/config";
import { Redis } from "ioredis";
import { script } from "./scripts/load-script.js";
import type { Request } from "express";

/**
 * Redis setup
 */

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

/**
 * Base types
 */
export type RateLimiterConfig = {
  redis: Redis;
  windowMs: number;
  max: number;
  keyPrefix?: string;
  message?: string;
  skipFailedRequests?: boolean;
  skip?: (req: Request) => boolean;
};

console.log(redis instanceof Redis);

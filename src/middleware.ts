import type { RateLimiterConfig } from "./config.js";

export function validateConfig(config: RateLimiterConfig): void {
  const { windowMs, max, redis } = config;
  if (
    typeof windowMs !== "number" ||
    !Number.isFinite(windowMs) ||
    windowMs <= 0
  ) {
    throw new Error(
      `Invalid windowMs: ${windowMs}. Must be a positive finite number.`,
    );
  }

  if (typeof max !== "number" || !Number.isInteger(max) || max <= 0) {
    throw new Error(`Invalid max requests: ${max}. Must be a positive integer`);
  }

  if (!redis || typeof redis.eval !== "function") {
    throw new Error("Invalid Redis client: .eval() is required.");
  }
}

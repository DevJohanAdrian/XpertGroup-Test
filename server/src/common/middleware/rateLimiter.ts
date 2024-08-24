import type { Request } from "express";
import { rateLimit } from "express-rate-limit";

import { env } from "@/common/utils/envConfig";

const rateLimiter = rateLimit({
  legacyHeaders: true, // Disable the `X-RateLimit-*` headers
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS, // Limit each IP to 100 requests per `window`
  message: "Too many requests from this IP, please try again in 15 minutes.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  windowMs: 15 * 60 * env.COMMON_RATE_LIMIT_WINDOW_MS, // 15 minutos
  skipFailedRequests: false,
  skipSuccessfulRequests: false,
  keyGenerator: (req: Request) => req.ip as string,
});

export default rateLimiter;

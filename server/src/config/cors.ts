import { env } from "@/common/utils/envConfig";
const corsOptions = {
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: [env.CORS_ORIGIN, "http://localhost:4200"],
  // Allow credentials like cookies
  credentials: true,
  // Allow specific headers
  allowedHeaders: ["Content-Type", "Authorization", "x-access-token", "refresh"],
};

export default corsOptions;

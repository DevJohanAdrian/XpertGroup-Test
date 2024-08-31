import { openAPIRouter } from "@/api-docs/openAPIRouter";
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import corsOptions from "./config/cors";
import connectDB from "./database";
import routes from "./routes";

const logger = pino({ name: "server start" });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(rateLimiter);

// Request logging //falta ver donde se guarda los archivos
app.use(requestLogger);

// Routes
app.use("/api/v1", routes);

// Swagger UI Ver configuracion
app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

// Conexión a MongoDB
connectDB();


export { app, logger };

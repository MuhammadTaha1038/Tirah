import express, {
  type RequestHandler,
} from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

const app = express();
const createPinoHttp = pinoHttp as unknown as (options: unknown) => RequestHandler;

app.use(
  createPinoHttp({
    logger,
    serializers: {
      req(req: { id?: string; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rootHandler: RequestHandler = (_req, res) => {
  res.json({
    service: "tirah-api-server",
    status: "ok",
    health: "/api/healthz",
  });
};

app.get("/", rootHandler);

app.use("/api", router);

export default app;

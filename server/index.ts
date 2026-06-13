import express, { Express } from "express";
import { handlePing } from "./routes/ping";
import { handleDemo } from "./routes/demo";

export function createServer(): Express {
  const app = express();

  app.use(express.json());

  // API routes
  app.get("/api/ping", handlePing);
  app.get("/api/demo", handleDemo);

  return app;
}

import express, { Express, RequestHandler } from "express";
import cors from "cors";
import { DemoResponse } from "@shared/api";

export function createServer(): Express {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Ping endpoint
  const handlePing: RequestHandler = (_req, res) => {
    res.json({ message: "pong" });
  };

  // Demo endpoint
  const handleDemo: RequestHandler = (_req, res) => {
    const response: DemoResponse = {
      message: "Hello from the server!",
      timestamp: Date.now(),
    };
    res.json(response);
  };

  // Register routes
  app.get("/api/ping", handlePing);
  app.get("/api/demo", handleDemo);

  return app;
}

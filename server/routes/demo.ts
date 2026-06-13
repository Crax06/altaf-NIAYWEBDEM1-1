import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api";

export const handleDemo: RequestHandler = (_req, res) => {
  const response: DemoResponse = {
    message: "This is a demo endpoint",
    timestamp: new Date().toISOString(),
  };
  res.json(response);
};

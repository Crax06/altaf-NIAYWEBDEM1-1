import { RequestHandler } from "express";
import { PingResponse } from "@shared/api";

export const handlePing: RequestHandler = (_req, res) => {
  const response: PingResponse = {
    message: "pong",
  };
  res.json(response);
};

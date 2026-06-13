import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createServer } from "./index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const apiApp = createServer();

// Serve API routes
app.use(apiApp);

// Serve static files from the SPA build
const spaDir = join(__dirname, "../spa");
app.use(express.static(spaDir));

// Fallback to index.html for SPA routes
app.get("*", (_req, res) => {
  res.sendFile(join(spaDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

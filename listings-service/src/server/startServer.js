import express from "express";
import cors from "cors";

import accessEnv from "#root/helpers/accessEnv";
import setupRoutes from "./routes";

const PORT = accessEnv("PORT", 7100);

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: (origin, cb) => (null, true),
    credentials: true,
  })
);

setupRoutes(app);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listings Service listening on ${PORT}`);
});

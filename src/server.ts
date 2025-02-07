import { serve } from "@hono/node-server";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 3000;

serve(app, (info) => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

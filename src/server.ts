import { serve } from "@hono/node-server";
import app from "./index";

serve(app, (info) => {
  console.log(`🚀 Server is running at http://localhost:${info.port}`);
});

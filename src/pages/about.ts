import { Hono } from "hono";

const about = new Hono();

about.get("/", (c) => {
  return c.html("<h1>About Us</h1><p>This is the About page.</p>");
});

export default about;

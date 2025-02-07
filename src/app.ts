import fs from "fs";
import { Hono } from "hono";
import path from "path";
import { fileURLToPath } from "url";

const app = new Hono();

// __dirname の代わりに `import.meta.url` を使う
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registerRoutes = async () => {
  const pagesDir = path.join(__dirname, "pages"); // ここで `undefined` を防ぐ！
  const files = fs.readdirSync(pagesDir);

  await Promise.all(
    files.map(async (file) => {
      if (file.endsWith(".ts")) {
        const routeName =
          file.replace(".ts", "") === "home"
            ? "/"
            : `/${file.replace(".ts", "")}`;
        const module = await import(`./pages/${file}`);
        app.route(routeName, module.default);
        console.log(`✅ Route registered: ${routeName}`);
      }
    })
  );
};

await registerRoutes();

export default app;

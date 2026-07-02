import "dotenv/config";
import express from "express";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot =
  path.basename(__dirname) === "dist" ? path.join(__dirname, "..") : __dirname;

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(projectRoot, "views"));
app.use(express.static(path.join(projectRoot, "public")));

app.get("/", (req, res) => {
  res.render("landing");
});

app.listen(port, () => {
  console.log(`example app listening on http://localhost:${port}`);
});

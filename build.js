const fs = require("fs");

// Read your HTML template
let html = fs.readFileSync("src/index.html", "utf8");

// Replace placeholders with env vars
html = html.replace("__API_KEY__", process.env.API_KEY || "");
html = html.replace("__APP_NAME__", process.env.APP_NAME || "");

// Write to output dir
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", html);
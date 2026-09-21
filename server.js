const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", ".json": "application/json; charset=utf-8" };

http.createServer((req, res) => {
  let clean;
  try { clean = decodeURIComponent(req.url.split("?")[0]); }
  catch { return res.writeHead(400).end("Bad request"); }
  const file = path.resolve(root, '.' + (clean === '/' ? '/index.html' : clean));
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end("Forbidden");
  fs.readFile(file, (error, data) => {
    if (error) return res.writeHead(404).end("Not found");
    res.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}).listen(Number(process.env.PORT) || 4910, '127.0.0.1', () => console.log("Abilix CH910 demo: http://localhost:" + (process.env.PORT || 4910)));

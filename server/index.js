const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var http = require("http").createServer(app);
var io = require("socket.io")(http);
app.use(bodyParser.json({ limit: "50mb" }));
const options = {
  autoIndex: false,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect("mongodb://localhost:27017/benhvien", options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();
// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  const students = require("./routers/students");
  app.use("/api/students", students);
  const measures = require("./routers/measures");
  app.use("/api/measures", measures);

  app.get("/api/measure", (req, res, next) => {
    io.emit("measure", {
      height: req.query.chieucao ? req.query.chieucao : 0,
      weight: req.query.cannang ? req.query.cannang : 0
    });
    res.send("HeaCare.Work API");
  });
  app.use(nuxt.render);

  // Listen the server
  io.on("connection", socket => {
    console.log("a user connected");
  });

  http.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();

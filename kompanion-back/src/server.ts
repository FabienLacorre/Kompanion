// Import the 'express' module
import express from "express";
import { AppDataSource } from "./database/data-source";
import { routes } from "./API/router";

const SERVER_PORT = 3000;

var bodyParser = require("body-parser");
var cors = require("cors");

export const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json());

app.use(routes);

app.listen(SERVER_PORT, async () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
});

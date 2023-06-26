"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const router = express.Router();
const initializeDatasource_1 = require("./src/repository/initializeDatasource");
const port = 5000;
const userController = require("./src/controller/userController");
app.use(express.json());
app.use("/api/user", userController);
app.listen(port, async () => {
    await (0, initializeDatasource_1.initializeDatasource)();
    console.log(`Server listening on port : ${port} `);
});
//# sourceMappingURL=index.js.map
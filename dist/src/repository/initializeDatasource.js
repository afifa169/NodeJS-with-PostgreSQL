"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatasource = exports.AppDataSource = void 0;
const typeorm = require("typeorm");
const userEntity_1 = require("../entities/userEntity");
let { DataSource } = typeorm;
exports.AppDataSource = new DataSource({
    type: "postgres",
    host: "ep-bold-cloud-100904.us-east-2.aws.neon.tech",
    port: 5432,
    username: "affushaik169",
    password: "04hDkXjaMiAU",
    database: "neondb",
    entities: [userEntity_1.User],
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
});
async function initializeDatasource() {
    exports.AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
}
exports.initializeDatasource = initializeDatasource;
//# sourceMappingURL=initializeDatasource.js.map
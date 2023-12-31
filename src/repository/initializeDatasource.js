const typeorm = require("typeorm");
let { DataSource } = typeorm;

const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-bold-cloud-100904.us-east-2.aws.neon.tech",
  port: 5432,
  username: "affushaik169",
  password: "04hDkXjaMiAU",
  database: "neondb",
  ssl: {
    rejectUnauthorized: false,
  },
});

async function initializeDatasource() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}

module.exports = { initializeDatasource, AppDataSource }; //  { initializeDatasource : function (){}, AppDataSource : AppDataSource }

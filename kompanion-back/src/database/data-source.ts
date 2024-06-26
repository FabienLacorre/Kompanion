import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "main_db",
  entities: ["src/database/entities/**/*{.js,.ts}"],
  migrations: ["src/database/migrations/**/*{.js,.ts}"],
  subscribers: ["src/subscribers/**/*{.js,.ts}"],
});

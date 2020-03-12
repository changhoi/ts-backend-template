import { ConnectionOptions } from "typeorm";
import { User } from "@/models/userModel";

const ormConfig: ConnectionOptions = {
  type: "postgres",
  logging: ["warn", "error", "migration"],
  port: 5432,
  host: "testdb",
  database: "testdb",
  username: "postgres",
  password: "postgres",
  entities: [User],
  synchronize: true
};

export default ormConfig;

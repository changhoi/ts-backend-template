import { createConnection, ConnectionOptions, getConnection } from "typeorm";
import configs from "@/configs";
import { User } from "@/models/userModel";

const defaultOrmConfig: ConnectionOptions = {
    type: "postgres",
    logging: ["warn", "error", "migration"],
    port: 5432,
    host: configs.DB.HOST,
    database: configs.DB.DATABASE,
    username: configs.DB.USERNAME,
    password: configs.DB.PASSWORD,
    entities: [User],
    synchronize: configs.ENV === "local"
}

const dbLoader = (ormConfig:ConnectionOptions = defaultOrmConfig) => createConnection(ormConfig);

export const clearDatabase = () => getConnection().close();

export default dbLoader;

import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import configs from "@/configs";
import components from "./components";

const options = () => {
  const isLocal = configs.ENV === "local";
  const apiPath = isLocal
    ? path.join(__dirname, "..", "routers", "v1", "*.*")
    : path.join(__dirname, "app.js");

  return {
    swaggerDefinition: {
      info: {
        title: "",
        version: ""
      },
      host: configs.APP.HOST,
      basePath: "/api",
      schemas: ["http", "https"],
      components
    },

    apis: [apiPath]
  };
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options());
export default swaggerSpec;

import {MESSAGE} from "@/errors/errRequest"

const components = {
    response: {
      BadRequest: {
        description: MESSAGE.BAD_REQUEST,
        schema: {
          $ref: "#/components/errorResult/Error"
        }
      },
      NotFound: {
        description: MESSAGE.NOT_FOUND,
        schema: {
          $ref: "#/components/errorResult/Error"
        }
      }
    },
    errorResult: {
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "error message"
          },
          error: {
            type: "string",
            description: "error stack"
          },
          statusCode: {
            type: "number",
            description: "error code"
          }
        }
      }
    }
  };
  
  export default components;
import UserModel from "@/models/userModel";
import dbLoader, { clearDatabase } from "@/loaders/dbLoader";
import ormConfig from "../ormConfig";

beforeAll(async () => {
  await dbLoader(ormConfig);
});

afterAll(async () => {
  await clearDatabase();
});

describe("UserModel Test", () => {
  describe("createOne", () => {
    test("username이 있으면 데이터베이스에 저장된다.", async () => {
      const userModel = new UserModel();
      const username = "testUser";
      const ret = await userModel.createOne({ username });
      if (ret.error) throw ret.error;

      expect(ret.success).toBe(true);
      expect(ret.result?.username).toBe(username);
    });
  });
});

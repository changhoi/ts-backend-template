import UserModel, { User } from "@/models/userModel";
import { DeepPartial } from "typeorm";
import UserService from "@/services/userService";

const userModel: Partial<UserModel> = {
  createOne: ({username}: DeepPartial<User>): Promise<Mutation<User>> => {
    const date = new Date();
    const userMock = {
      id: 1,
      username,
      createdAt: date,
      updatedAt: date
    };
    return new Promise((resolve => resolve({result: userMock as User, success: true})))
  }
};

describe("UserService Test", () => {
  describe("Signup", () => {
    test("username을 넣으면 회원가입이 된다.", async () => {
      const userService = new UserService(userModel as UserModel);
      const username = "testUser";
      const ret = await userService.signup(username);
      
      expect(ret.success).toBe(true);
      expect(ret.result?.username).toBe(username)
    });
  });
});

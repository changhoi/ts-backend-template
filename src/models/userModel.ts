import User from "./entities/User.entity";
import { DeepPartial, FindOneOptions } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

class UserModel {
  getAll(): Promise<User[]> {
    return User.find();
  }

  getOneById(id: number): Promise<User | undefined> {
    return User.findOne(id);
  }

  getOne(findOneOptions: FindOneOptions): Promise<User | undefined> {
    return User.findOne(findOneOptions);
  }

  async createOne(user: DeepPartial<User>): Promise<Mutation<User>> {
    try {
      const result = await User.create(user).save();
      return {
        success: true,
        result
      };
    } catch (e) {
      return {
        success: false,
        error: e
      };
    }
  }

  async updateOneById(
    id: number,
    partialData: QueryDeepPartialEntity<User>
  ): Promise<Mutation> {
    try {
      await User.update(id, partialData);
      return {
        success: true
      };
    } catch (e) {
      return {
        success: false,
        error: e
      };
    }
  }
}

export { User };
export default UserModel;

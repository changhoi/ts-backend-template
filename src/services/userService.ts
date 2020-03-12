import { Service } from "typedi";
import UserModel, { User } from "@/models/userModel";

@Service()
class UserService {
  constructor(private userModel: UserModel) {}

  getAllUser() {
    return this.userModel.getAll();
  }

  signup(username: string): Promise<ServiceData<User>> {
    return this.userModel.createOne({ username });
  }
}

export default UserService;

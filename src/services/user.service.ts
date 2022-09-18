import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}
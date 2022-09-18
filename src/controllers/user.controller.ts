import { Request, Response } from 'express';
import UserService from '../services/user.service';
import createToken from '../helpers/token';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const { id, username } = await this.service.create(user);
    const token = createToken(id, username);

    res.status(201).json({ token });
  };
}
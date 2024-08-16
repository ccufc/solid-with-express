import type { User } from "../entities/user";
import type { IUserRepository } from "../interfaces/user-repository-interface";

export class InMemoryUserRepository implements IUserRepository {
  private readonly users: User[] = [];

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async create(user: User): Promise<void> {
    this.users.push(user);
  }
}

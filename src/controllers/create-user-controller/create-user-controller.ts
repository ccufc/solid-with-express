import type { Request, Response } from "express";
import type { ICreateUserController } from "../../interfaces/create-user-controller-interface";
import type { CreateUserUseCase } from "../../use-cases/create-user-use-case";
import { User } from "../../entities/user";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const user = new User({
      id: data.id,
      name: data.name,
      email: data.email,
      age: data.age,
    });

    await this.createUserUseCase.execute(user);

    return response.status(201).send("User created successfully");
  }
}

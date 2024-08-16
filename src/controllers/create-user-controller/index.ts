import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "../../use-cases/create-user-use-case";
import { InMemoryUserRepository } from "../../repositories/in-memory-user-repository";

const inMemoryUserRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;

import type { Request, Response } from "express";

export interface IFindAllUsersController {
  handle: (request: Request, response: Response) => Promise<Response>;
}

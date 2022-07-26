import { UpdateUserService } from "../services/UpdateUserService";
import { Request, Response } from "express"

class UpdateUserController {
    async control(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const userData = request.body;

        const updateUserService = new UpdateUserService()

        const updatedUser = await updateUserService.execute({ id, userData });

        return response.status(200).json(updatedUser);
    }
}


export { UpdateUserController }
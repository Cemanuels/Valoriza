import { Request, Response } from "express";
import { DeleteTagService } from "../service/DeleteTagService";

class DeleteTagController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTagService = new DeleteTagService();

    const tag = await deleteTagService.execute(id);

    return response.json(tag);
  }
}

export { DeleteTagController };

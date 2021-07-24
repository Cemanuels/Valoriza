import { Request, Response } from "express";
import { GetTagsService } from "../service/GetTagsService";

class GetTagsController {
  async handle(request: Request, response: Response) {
    const getTagService = new GetTagsService();

    const tags = await getTagService.execute();

    return response.json(tags);
  }
}

export { GetTagsController };

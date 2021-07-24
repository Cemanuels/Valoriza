import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class GetTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (!tagsRepository) {
      throw new Error("Empty tags database!");
    }

    const tags = await tagsRepository.find();

    return tags;
  }
}

export { GetTagsService };

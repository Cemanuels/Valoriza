import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class DeleteTagService {
  async execute(tag_id: string) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (!tagsRepository) {
      throw new Error("Empty tags repository database.");
    }

    const tag = await tagsRepository.findOne({
      id: tag_id,
    });

    if (!tag) {
      throw new Error("tag not found.");
    }

    await tagsRepository.delete(tag_id);

    return tag;
  }
}

export { DeleteTagService };

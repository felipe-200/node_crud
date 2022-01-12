import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video)

    const video = repo.find({
      relations: ['category']
    })

    return video
  }
}
import { PrismaClient } from "@prisma/client";
import {BodyReqCreate} from '@/server/types/posts'

export default defineEventHandler(async (event) => {

  //Configs api
  const body = await readBody<BodyReqCreate>(event);

  const prisma = new PrismaClient();
  const posts = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      qualityPost: body.qualityPost,
      author: {
        connect: {
          id: body.authorId,
        },
      },
    },
  });
  console.log(posts);
  return {
    users: posts,
  };
});

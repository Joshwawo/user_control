import { PrismaClient } from "@prisma/client";
import { BodyReqPUT } from "@/server/types/posts";
export default defineEventHandler(async (event) => {
  //Configs api
  const body = await readBody<BodyReqPUT>(event);

  const prisma = new PrismaClient();
  const posts = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      published: body.published,
    },
  });
  console.log(posts);
  return {
    posts,
  };
});

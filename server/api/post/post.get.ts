import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    include: {
        author: true
    }
  });
  console.log(posts);
  return {
    posts,
  };
});

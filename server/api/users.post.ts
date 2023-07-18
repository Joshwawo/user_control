import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "papa@hola.com",
      posts: {
        create: {
          title: "Hello World",
        },
      },
      profile: {
        create: {
          bio: "I like turtles",
        },
      },
    },
  });

  const allUsers = await prisma.user.findUnique({
    where: {
      id: users.id,
    },
    include: {
      posts: true,
      profile: true,
    },
  });

  console.log(allUsers, { depth: null });

  return {
    allUsers,
  };
});

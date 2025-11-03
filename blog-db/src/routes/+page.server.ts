import type { Prisma } from '@prisma/client';
import { prisma } from '$lib/server/prisma';

const createNewPost = async (post: Prisma.PostCreateInput) => {
  return await prisma.post.create({
    data: post,
  });
};
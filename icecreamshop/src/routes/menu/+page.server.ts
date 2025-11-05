import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // Get all flavors that have ice cream remaining
    const flavors = await prisma.flavor.findMany({
        where: { quantity: { gt: 0 } },
    });

    // TODO: add bases
    const bases = await prisma.base.findMany();

    return {
        flavors,
        bases,
    };
}) satisfies PageServerLoad;

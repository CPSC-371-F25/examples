import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // Get all flavors that have ice cream remaining
    const flavors = await prisma.flavors.findMany({
        where: { quantity: { gt: 0 } },
    })

    return {
        flavors,
    };
}) satisfies PageServerLoad;

import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Load data from db to populate form
export const load = (async () => {
    // Get all flavors in the database
    const flavors = await prisma.flavor.findMany();

    // Get all bases in the database
    const bases = await prisma.base.findMany();

    return {
        flavors,
        bases,
    };
}) satisfies PageServerLoad;


// Form POST action handler
export const actions = {
    default: async ({ request }) => {
        console.log("Handling form action on server:");
        const formData = await request.formData();
        console.log(formData);

        // Normalize data for db create request
        // Ensure things aren't null and convert to the appropriate types
        const orderToSubmit = {
            customerName: formData.get('customerName')?.toString() ?? '',
            scoops: +(formData.get('scoops')?.valueOf() ?? 0),
            flavorId: +(formData.get('flavor')?.valueOf() ?? 0),
            baseId: +(formData.get('base')?.valueOf() ?? 0),
        }

        // TODO: save formData to database (create a new order)
        try {
            const orderDB = await prisma.order.create({
                data: orderToSubmit,
            });

            //  TODO: populate order number from DB
            return { success: true, orderId: orderDB.id, orderName: orderDB.customerName };
        } catch {
            return fail(500);
        }
    }
};
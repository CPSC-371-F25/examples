import prisma from "$lib/prisma";
import starterData from "$lib/data.json"
import type { Prisma } from "../../generated/prisma/client.js";


// WARNING: THIS IS VERY DANGEROUS. DON'T DO IT IN PRODUCTION.
// Handle DB seeding because prisma/seed.ts doesn't work for me
export async function GET( { url } ) {
    console.log("deleting all records...");
    await prisma.$transaction([
        prisma.order.deleteMany(),
        prisma.flavor.deleteMany(),
        prisma.base.deleteMany(),
    ]);

    console.log("Seeding db...");

    // Seed flavors from data JSON
    for (const flavor of starterData.flavors) {
        const dbFlavor = await prisma.flavor.create({
            data: flavor,
        });
        console.log(`Created flavor ${dbFlavor.name} with id ${dbFlavor.id}`);
    }


    // Seed Bases manually
    await prisma.base.createMany({
        data: [
            { name: 'Waffle Cone' },
            { name: 'Cake Cone' },
            { name: 'Cup' },
        ]
    })

    // Seed orders from JSON
    // TODO: uncomment
    for (const order of starterData.orders) {
        let orderToSubmit: Prisma.OrderCreateInput = {
            scoops: order.scoops,
            customerName: order.customerName,
            flavorId: order.flavorid,
            baseId: order.baseid,
        }
        
        let dbOrder  = await prisma.order.create({ data: orderToSubmit });
        console.log(`Created order ${dbOrder.customerName} with id ${dbOrder.id}`);
    }

    console.log("Finished seeding");
    return new Response(`Finished seeding`);
};
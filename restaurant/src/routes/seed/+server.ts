import prisma from "$lib/prisma";
import starterData from "$lib/data.json"


// Handle DB seeding because prisma/seed.ts doesn't work for me
export async function GET( { url } ) {
    const params = new URLSearchParams(url.searchParams);
    if (params.get('seed') != 'true') {
        return new Response('Not seeding. Specify query param seed=true. WILL WIPE DATABASE')
    }


    console.log("Seeding db...");

    let n = 0;
    for (const flavor of starterData.flavors) {
        const dbFlavor = await prisma.flavors.create({
            data: {
                name: flavor.name,
                price: flavor.price,
                quantity: flavor.quantity,
            }
        });
        console.log(`Created flavor ${dbFlavor.name} with id ${dbFlavor.id}`);
        n += 1;
    }

    console.log("Finished seeding");
    return new Response(`Added ${n} entries`);
};
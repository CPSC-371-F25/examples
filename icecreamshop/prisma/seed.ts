// TODO: Seeding is not working.
// import { PI } from './test'
import { PrismaClient } from '../src/generated/prisma/client.ts';
import starterData from "../src/lib/data.json" with { type: "json" }

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding db...");

    for (const flavor of starterData.flavors) {
        const dbFlavor = await prisma.flavor.create({
            data: {
                name: flavor.name,
                price: flavor.price,
                quantity: flavor.quantity,
            }
        });
        console.log(`Created flavor ${dbFlavor.name} with id ${dbFlavor.id}`);
    }

    console.log("Finished seeding");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

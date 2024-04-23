import { prisma } from '../src/lib/prisma'

async function seed() {

    await prisma.event.create({
        data: {
            id: 'a61f43d4-322d-4a30-a7fa-b8a7d1fe4032',
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para desenvolvedores apaixonados por código",
            maximumAttendees:120,

        }
    })
}

seed().then(() => {
    console.log("Database seeded!");
    
    prisma.$disconnect()
})
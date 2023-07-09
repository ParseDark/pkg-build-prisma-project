import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

console.log("user")

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice' + Math.random(),
      email: 'alice@prisma.io' + Math.random(),
    },
  })
  const user = await prisma.user.findMany()
  console.log(user)
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

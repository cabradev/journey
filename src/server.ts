import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify()

app.get('/signUp', async () => {
  await prisma.trip.create({
    data: {
      destination: 'Patagonia',
      starts_at: new Date(),
      ends_at: new Date(),
    }
  })

  return 'Registered Successfully!'
})

app.get('/list', async () => {
  const trips = await prisma.trip.findMany()

  return trips
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server running!')
})

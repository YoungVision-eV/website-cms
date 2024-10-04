import { Payload } from "payload"

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding data...')

  await payload.create({
    collection: 'users',
    data: {
      email: 'seeded1@youngvision.org',
      password: '1234',
      admin: false,
    },
  })

  // Add additional seed data here
}
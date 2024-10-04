import { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding data...')

  // TODO: don't delet, instead only create when empty
  await payload.delete({
    collection: 'users',
    where: {},
  })
  await payload.delete({
    collection: 'events',
    where: {},
  })
  await payload.delete({
    collection: 'media',
    where: {},
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@test.com',
      password: 'password',
      admin: true,
    },
  })
  await payload.create({
    collection: 'users',
    data: {
      email: 'user@test.com',
      password: 'password',
      admin: false,
    },
  })

  const cat = await payload.create({
    collection: 'media',
    data: {
        title: 'Cats',
        altText: 'zwei Katzen',
    },
    filePath: `${__dirname}/cat-party.webp`
  })
  await payload.create({
    collection: 'events',
    data: {
        title: 'Event 1',
        start: '2024-11-01',
        end: '2024-11-05',
        shortDescription: 'This is a short description',
        address: {street: 'Beispiel Straße 42', zip: '420', city: 'Funkytown'},
        audience: '3-6 Jahre',
        cost: '-100€',
        contentTitle: 'Titel',
        calendarCover: {
          relationTo: 'media',
          value: cat.id
        },
    },
    depth: 0,
  })

  // Add additional seed data here
}
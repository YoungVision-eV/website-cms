import { Payload } from 'payload'

async function all_collections_empty(payload: Payload): Promise<boolean> {
  const count_users = await payload.count({ collection: "users" });
  const count_events = await payload.count({ collection: "events" });
  const count_media = await payload.count({ collection: "media" });
  return count_events.totalDocs == 0 && count_events.totalDocs == 0 && count_media.totalDocs == 0;
}

async function create_user(email: String, password: String, is_admin: boolean, payload: Payload) {
  await payload.create({
    collection: 'users',
    data: {
      email: email,
      password: password,
      amdin: is_admin,
    },
  });
  payload.logger.info(`Created ${is_admin ? 'Admin' : 'User without admin rights'}:\nemail:'${email}'\npassword:'${password}'`);
}

export const seed = async (payload: Payload): Promise<void> => {
  if (!(await all_collections_empty(payload))) {
    return;
  }

  payload.logger.info('Seeding sample data...');

  await create_user('admin@test.com', 'password', true, payload);
  await create_user('user@test.com', 'password', false, payload);

  const cat = await payload.create({
    collection: 'media',
    data: {
      title: 'Cats',
      altText: 'zwei Katzen',
    },
    filePath: `${__dirname}/cat-party.webp`
  });

  await payload.create({
    collection: 'events',
    data: {
      title: 'Event 1',
      start: '2024-11-01',
      end: '2024-11-05',
      shortDescription: 'This is a short description',
      address: { street: 'Beispiel Straße 42', zip: '420', city: 'Funkytown' },
      audience: '3-6 Jahre',
      cost: '-100€',
      contentTitle: 'Titel',
      calendarCover: {
        relationTo: 'media',
        value: cat.id
      },
    },
    depth: 0,
  });

  // Add additional seed data here
}
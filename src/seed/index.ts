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

async function create_media(payload: Payload): Promise<(String | Number)[]> {
  let images: (String | Number)[];
  images = [];
  const cats = await payload.create({
    collection: 'media',
    data: {
      title: 'Cats',
      altText: 'Katzen Party',
    },
    filePath: `${__dirname}/cat-party.webp`
  });
  images.push(cats.id);
  const missing_texture = await payload.create({
    collection: 'media',
    data: {
      title: 'Missing Texture',
      altText: 'missing texture',
    },
    filePath: `${__dirname}/missing_textures.webp`
  });
  images.push(missing_texture.id);
  return images;
}

async function create_events(images: (String | Number)[], payload: Payload) {
  await payload.create({
    collection: 'events',
    data: {
      title: 'Fake Silvester',
      start: '2024-12-29',
      end: '2025-01-03',
      shortDescription: 'Silvester gonna be good',
      address: { street: 'Beispiel Straße 42', zip: '420', city: 'Funkytown' },
      audience: 'A-Z',
      cost: '123€',
      contentTitle: 'Silvester Whoop whoop',
      calendarCover: {
        relationTo: 'media',
        value: images[0],
      },
      heroImage: {
        relationTo: 'media',
        value: images[0],
      },
      slug: 'silvester'
    },
    depth: 0,
  });
  await payload.create({
    collection: 'events',
    data: {
      title: 'Fun Test Evnet',
      start: '2024-10-01',
      end: '2024-10-05',
      shortDescription: 'If it was a real event it would be fun',
      address: { street: 'Beispiel Straße 42', zip: '420', city: 'Funkytown' },
      audience: '3-6 Jahre',
      cost: '-100€',
      contentTitle: 'Titel',
      calendarCover: {
        relationTo: 'media',
        value: images[0],
      },
    },
    depth: 0,
  });
  await payload.create({
    collection: 'events',
    data: {
      title: 'Test Event',
      start: '2026-11-29',
      end: '2026-12-03',
      shortDescription: 'This is a test event',
      address: { street: 'Tolle Straße', zip: '1234', city: 'Fantasie Stadt' },
      audience: '99-111 Jahre',
      cost: '10-100€',
      contentTitle: 'Test Event',
      "content": {
        "root": {
          "children": [
            {
              "children": [
                {
                  "detail": 0,
                  "format": 0,
                  "mode": "normal",
                  "style": "",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec mauris egestas, pellentesque quam sit amet, faucibus justo. Cras nec pulvinar ante, vitae tempor elit. Phasellus commodo nulla ut augue commodo blandit. Sed eu nisi nisl. Donec lobortis, metus eget tempor suscipit, dolor erat posuere magna, ac facilisis libero turpis posuere felis. Sed nulla ex, malesuada vitae volutpat ut, pulvinar sed ligula.",
                  "type": "text",
                  "version": 1
                }
              ],
              "direction": "ltr",
              "format": "",
              "indent": 0,
              "type": "paragraph",
              "version": 1
            },
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "version": 1
        }
      },
      calendarCover: {
        relationTo: 'media',
        value: images[1],
      },
      heroImage: {
        relationTo: 'media',
        value: images[1],
      },
      team: [
        {
          name: "Alice",
          job: "Spec Example User",
          bio: "Das bin ich",
          image: {
            relationTo: 'media',
            value: images[1],
          },
        },
        {
          name: "Bob",
          job: "Spec Example User",
          bio: "Das bin ich",
          image: {
            relationTo: 'media',
            value: images[1],
          },
        }
      ],
      slug: 'test-event',
      registrationLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      sponsorLogo: {
        relationTo: 'media',
        value: images[1],
      }
    },
    depth: 0,
  });
  await payload.create({
    collection: 'events',
    data: {
      title: 'Really old event',
      start: '1900-11-01',
      end: '1900-11-05',
      shortDescription: 'This event happend along time ago',
      address: { street: 'Beispiel Straße 42', zip: '420', city: 'Funkytown' },
      audience: '3-6 Jahre',
      cost: '-100€',
      contentTitle: 'Titel',
      calendarCover: {
        relationTo: 'media',
        value: images[0],
      },
    },
    depth: 0,
  });
}

export const seed_if_empty = async (payload: Payload): Promise<void> => {
  if (!(await all_collections_empty(payload))) {
    payload.logger.info("Skipping seeding, because there is already some data");
    return;
  }

  payload.logger.info('Seeding sample data...');

  await create_user('admin@test.com', 'password', true, payload);
  await create_user('user@test.com', 'password', false, payload);
  const images = await create_media(payload);
  await create_events(images, payload);
}
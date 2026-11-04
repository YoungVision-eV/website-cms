import path from 'path';
import { fileURLToPath } from 'url';

import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Events } from './collections/Events';
import { Media } from './collections/Media';
import Users from './collections/Users';
import { seed_if_empty } from './seed';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Events, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    // disbales declare statement when generating types so there is no ts error when using them in the website repo
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloudPlugin()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  onInit: seed_if_empty,
  endpoints: [
    {
      path: '/health',
      method: 'get',
      handler: () => new Response('OK', { status: 200 }),
    },
  ],
});

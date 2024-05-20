import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import { Events } from './collections/Events'
import { Media } from './collections/Media'

import Users from './collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Events, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
    // disbales declare statement when generating types so there is no ts error when using them in the website repo
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  endpoints: [
    {
      path: '/health',
      method: 'get',
      handler: (_req, res) => {
        res.status(200).send('OK')
      },
    },
  ]
})

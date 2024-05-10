import { CollectionConfig } from "payload/types";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML} from '@payloadcms/richtext-lexical'

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
        name: "date",
        type: "date",
        required: true,
    },
    {
        name: "shortDescription",
        type: "text",
        required: true,
    },
    {
      name: "content",
      type: "richText",
      required: false,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('content', { name: 'content_html' }),
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: 'heroImage',
      type: 'relationship',
      relationTo: ['media'],
    },
  ],
};
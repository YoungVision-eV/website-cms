import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

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
      name: "start",
      type: "date",
      required: true,
    },
    {
      name: "end",
      type: "date",
      required: true,
    },
    {
      name: "timetable",
      type: "relationship",
      relationTo: ["media"],
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "group",
      fields: [
        {
          name: "street",
          type: "text",
          required: true,
        },
        {
          name: "zip",
          type: "text",
          required: true,
        },
        {
          name: "city",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "audience",
      type: "text",
      required: true,
    },
    {
      name: "cost",
      type: "text",
      required: true,
    },
    {
      name: "contentTitle",
      type: "text",
      required: true,
      admin: {
        description: "Will be shown above the content",
      },
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
    lexicalHTML("content", { name: "content_html" }),
    {
      name: "team",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "image",
          type: "relationship",
          relationTo: ["media"],
          required: true,
        },
        {
          name: "job",
          type: "text",
          admin: {
            description:
              "For example Yoga Teacher or Student. Shown below the name.",
          },
          required: true,
        },
        {
          name: "bio",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        description: ({ value }: { value?: unknown }) =>
          `Erreichbar unter: https://youngvision.org/events/${value ?? ""}`,
      },
    },
    {
      name: "calendarCover",
      type: "relationship",
      relationTo: ["media"],
      required: true,
    },
    {
      name: "heroImage",
      type: "relationship",
      relationTo: ["media"],
    },
  ],
};

import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { redeploy } from "../hooks";

export const Events: CollectionConfig = {
  slug: "events",
  hooks: {
    afterChange: [redeploy],
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "start",
      type: "date",
      admin: {
        date: {
          displayFormat: "dd.MM.yyyy",
        },
      },
      required: true,
    },
    {
      name: "end",
      type: "date",
      admin: {
        date: {
          displayFormat: "dd.MM.yyyy",
        },
      },
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
      localized: true,
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
      localized: true,
      required: true,
    },
    {
      name: "cost",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "contentTitle",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description: "Will be shown above the content",
      },
    },
    {
      name: "content",
      type: "richText",
      localized: true,
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
          localized: true,
          required: true,
        },
        {
          name: "bio",
          type: "text",
          localized: true,
          required: true,
        },
      ],
    },
    {
      name: "registrationLink",
      type: "text",
      required: false,
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
    {
      name: "sponsorLogo",
      type: "relationship",
      relationTo: ["media"],
    },
  ],
};

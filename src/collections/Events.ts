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
      validate: (value: string, options) => {
        return value.length > 5 ? true : "Content title is required";
      }
    },
    {
      name: "content",
      type: "richText",
      required: false,
      validate: (value: string, options) => {
        if (options.data.slug && !value) {
          return "Bitte füge einen Text hinzu oder deaktiviere die Eventseite (slug löschen).";
        }
        return true;
      },
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

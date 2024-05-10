import { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticURL: '/media',
        staticDir: 'uploads',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'altText',
            type: 'text',
            required: true,
        }
    ],
}
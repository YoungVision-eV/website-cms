import { CollectionConfig, fieldIsLocalized } from 'payload/types'

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    upload: {
        staticURL: '/media',
        staticDir: 'uploads',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
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
            localized: true,
            required: true,
        }
    ],
}
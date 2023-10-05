import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logs',
  title: 'Logs',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().uppercase()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'eventDate',
      title: 'Event date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name:'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name:'logEmoji',
      title: 'Log Emoji',
      type: 'string',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'image'}
      ]
    }),
  ],
  
})

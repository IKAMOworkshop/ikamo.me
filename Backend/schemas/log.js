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
      name: 'tags',
      title: 'Tags',
      type: 'reference',
      to: {type: 'tags'},
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
      name:'firstImage',
      title: 'First image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'fourthImage',
      title: 'Fourth image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'fifthImage',
      title: 'Fifth image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  
})

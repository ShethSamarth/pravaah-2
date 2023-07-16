import { defineField, defineType } from "sanity"

export default defineType({
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
    }),
    defineField({
      name: "datetime",
      title: "Date Time",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
})

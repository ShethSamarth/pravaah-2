type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Image {
  _type: "image"
  asset: Reference
  alt: string
}

interface Reference {
  ref: string
  _type: "reference"
}

interface Slug {
  _type: "slug"
  current: string
}

interface Span {
  _key: string
  _type: "span"
  marks: string[]
  text: string
}

interface Block {
  _key: string
  _type: "block"
  children: Span[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface General extends Base {
  title: string
  description: string
}

interface Events extends Base {
  title: string
  slug: Slug
  mainImage: Image
  technical: boolean
  shortDescription: string
  longDescription: string
  featured: boolean
  datetime: string
  body: Block[]
}

interface About extends Base {
  title: string
  body: Block[]
}

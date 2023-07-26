import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import events from "./schemas/events"
import general from "./schemas/general"
import about from "./schemas/about"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, blockContent, events, general],
}

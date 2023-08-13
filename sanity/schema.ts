import { type SchemaTypeDefinition } from "sanity"

import about from "./schemas/about"
import blockContent from "./schemas/blockContent"
import coordinators from "./schemas/coordinators"
import events from "./schemas/events"
import general from "./schemas/general"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, blockContent, coordinators, events, general],
}

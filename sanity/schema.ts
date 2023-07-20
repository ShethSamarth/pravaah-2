import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import events from "./schemas/events"
import general from "./schemas/general"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, events, general],
}

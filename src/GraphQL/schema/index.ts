'use strict'

import { buildSchemaSync } from "type-graphql"
import { TestResolver } from "@GraphQL/resolvers/test.resolver";

const schema = buildSchemaSync({
        resolvers: [TestResolver],
        emitSchemaFile: true,
    })
export default schema
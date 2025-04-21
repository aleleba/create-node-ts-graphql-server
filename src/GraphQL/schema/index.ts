'use strict'

import { buildSchemaSync } from "type-graphql"
import {
    TestResolverQuery,
    TestResolverMutation
} from "@GraphQL/resolvers";

export * from './test.schema'

const schema = buildSchemaSync({
        resolvers: [
            TestResolverQuery,
            TestResolverMutation,
        ],
        emitSchemaFile: true,
    })
export default schema
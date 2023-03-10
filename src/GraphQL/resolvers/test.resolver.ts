'use strict';

import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Test, TestMutation } from '@GraphQL/schema/test.schema';

@Resolver(() => Test)
export class TestResolver {
    @Query(() => Test)
    async test() {
        return {};
    }

    @Mutation(() => TestMutation)
    async testMutation() {
        return {};
    }   
}


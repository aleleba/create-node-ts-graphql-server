/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

import { Query, Resolver, Mutation, FieldResolver, Root, Arg } from 'type-graphql';
import { Test, TestMutation } from '@GraphQL/schema';
import { getTest, addText } from '@controllerGraphQL';

@Resolver(() => Test)
export class TestResolverQuery {
    @Query(() => Test)
	async test() {
		return {};
	}

    @FieldResolver(() => String)
    async text() {
        return await getTest({});
    }
}

@Resolver(() => TestMutation)
export class TestResolverMutation {
    @Mutation(() => TestMutation)
    async testMutation() {
        return {};
    }

    @FieldResolver(() => String)
    async text(@Arg('text') text?: string){
		return await addText({text});
	}
}


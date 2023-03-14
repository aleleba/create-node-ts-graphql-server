/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

import { Query, Resolver, Mutation } from 'type-graphql';
import { Test, TestMutation } from '@GraphQL/schema/test.schema';

@Resolver(() => Test)
export class TestResolver {
    @Query(() => Test)
	async test() {
		return Test;
	}

    @Mutation(() => TestMutation)
    async testMutation() {
    	return TestMutation;
    }   
}


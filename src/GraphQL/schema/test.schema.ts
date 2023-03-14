/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

import { Field, ObjectType, Arg } from 'type-graphql';
import { getTest, addText } from '@controllerGraphQL';

@ObjectType()
export class Test {
    @Field(() => String)
	async text(){
		return await getTest({});
	}
}

@ObjectType()
export class TestMutation {
    @Field(() => String)
	async text(@Arg('text') text?: string){
		return await addText({text});
	}
}

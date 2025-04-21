/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Test {
    @Field(() => String)
	text?: string;
}

@ObjectType()
export class TestMutation {
    @Field(() => String)
	text?: string;
}

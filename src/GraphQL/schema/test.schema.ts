'use strict';

import { Field, ObjectType, Arg } from "type-graphql";
import { getTest, addText } from '@controllerGraphQL';

@ObjectType()
export class Test {
    @Field(() => Text)
    async text(){
        return {
            text: await getTest({})
        }
    }
}

@ObjectType()
export class Text {
    @Field()
    text?: string 
}

@ObjectType()
export class TestMutation {
    @Field(type => TextMutation)
    async textMutation(@Arg('text') text?: string){
        return {
            text: await addText({text})
        }
    }
}

@ObjectType()
export class TextMutation {
    @Field()
    text?: string
}

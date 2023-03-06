'use strict';

import { getTestModel, addTextModel } from '@models';

// eslint-disable-next-line
export const getTest = async ({}) => {
	return getTestModel();
};

// eslint-disable-next-line
export const addText = async ({args}: {
	rootValue: any
	args: { text: string }
	context: any
}) => {
	const text = args.text;
	return addTextModel({ text });
};
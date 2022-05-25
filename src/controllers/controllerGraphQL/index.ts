'use strict';

import { getTestModel, addTextModel } from '../../models';

// eslint-disable-next-line
export const getTest = async (rootValue, args, context) => {
	return getTestModel();
};

// eslint-disable-next-line
export const addText = async (rootValue, args, context) => {
	const text = args.text;
	return addTextModel({ text });
};
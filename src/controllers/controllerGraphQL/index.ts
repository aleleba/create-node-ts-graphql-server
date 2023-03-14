'use strict';

import { getTestModel, addTextModel } from '@models';

// eslint-disable-next-line
export const getTest = async ({}) => {
	return getTestModel();
};

// eslint-disable-next-line
export const addText = async ({ text }: {text?: string}) => {
	return addTextModel({ text });
};
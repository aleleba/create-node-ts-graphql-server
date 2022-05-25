'use strict';

// use this to set API REST
import express from 'express';
import bodyParser from 'body-parser';//bodyParser conversionde Api REST,

const apiRouter = express.Router();//Router de Express

apiRouter
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}));

export default apiRouter;
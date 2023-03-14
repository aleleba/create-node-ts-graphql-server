import server from '@src';
import supertest from 'supertest';
describe('global server tests', () => {
	let request: supertest.SuperTest<supertest.Test>;
	beforeEach( async () => {
		request = await supertest(server);
	});

	it('should return Test data from test Query', async () => {
		const bodyResponse = {
			data: {
				test: {
					text: 'This is the text response for Test Query from a model'
				}
			}
		};
		const response = await request.get('/graphql?query=%7B%0A%20%20test%7B%0A%20%20%20%20text%0A%20%20%7D%0A%7D')
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
		expect(response.body).toEqual(bodyResponse);
	});

	it('should return Test data from test Mutation', async () => {
		const bodyResponse = {
			data: {
				testMutation: {
					text: 'Simulate to insert some text: testing text from a model'
				}
			}
		};
		const response = await request.post('/graphql')
			.send({'query': `mutation{
          testMutation{
            text(text: "testing text")
          }
        }`})
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
		expect(response.body).toEqual(bodyResponse);
	});
});
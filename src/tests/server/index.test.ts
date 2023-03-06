import server from '@src';
import supertest from 'supertest';
describe('global server tests', () => {
    let request;
    beforeEach(() => {
        request = supertest(server);
      });
    it('should return Test data from test Query', async () => {
        const bodyResponse = {
            data: {
              test: { test: 'This is the text response for Test Query from a model' }
            }
        }

        const response = await request.get('/graphql?query=%7B%0A%20%20test%7B%0A%20%20%20%20test%0A%20%20%7D%0A%7D%0A')
        .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(bodyResponse);
    });

    it('should return Test data from test Mutation', async () => {
        const bodyResponse = {
            data: {
                testMutation: {
                    testMutation: 'Simulate to insert some text: test text from a model'
                }
            }
        }

        const response = await request.post('/graphql')
        .send({"query":"mutation{\n testMutation{\n testMutation(text: \"test text\")\n }\n}\n","variables":null})
        .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(bodyResponse);
    });
});
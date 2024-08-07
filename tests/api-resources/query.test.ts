// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  test('exec: only required params', async () => {
    const responsePromise = client.query.exec({
      connected_account_id: 'user-123',
      integration: 'github-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exec: required and optional params', async () => {
    const response = await client.query.exec({
      connected_account_id: 'user-123',
      integration: 'github-123',
      alpha: 0,
      collection: 'issues',
      filter: { foo: 'bar' },
      image: 'image',
      limit: 1,
      query: 'query',
      return_properties: ['string', 'string', 'string'],
      type: 'hybrid',
    });
  });

  test('multi', async () => {
    const responsePromise = client.query.multi({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

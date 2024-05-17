// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  test('create: only required params', async () => {
    const responsePromise = embed.integrations.create({ provider_key: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await embed.integrations.create({
      provider_key: 'string',
      auth_scheme: 'oauth2',
      display_name: 'string',
      oauth_client_id: 'string',
      oauth_client_secret: 'string',
      oauth_scopes: ['string', 'string', 'string'],
      use_test_credentials: true,
    });
  });
});

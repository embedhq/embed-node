// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  test('list: only required params', async () => {
    const responsePromise = embed.syncs.runs.list('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await embed.syncs.runs.list('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proxy', () => {
  test('delete: only required params', async () => {
    const responsePromise = embed.proxy.delete('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await embed.proxy.delete('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
      base_url_override: 'string',
      retries: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = embed.proxy.get('string', { connection_id: 'string', integration_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await embed.proxy.get('string', {
      connection_id: 'string',
      integration_id: 'string',
      base_url_override: 'string',
      retries: 0,
    });
  });

  test('post: only required params', async () => {
    const responsePromise = embed.proxy.post('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('post: required and optional params', async () => {
    const response = await embed.proxy.post('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
      base_url_override: 'string',
      retries: 0,
    });
  });

  test('put: only required params', async () => {
    const responsePromise = embed.proxy.put('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('put: required and optional params', async () => {
    const response = await embed.proxy.put('string', {
      body: { foo: 'bar' },
      connection_id: 'string',
      integration_id: 'string',
      base_url_override: 'string',
      retries: 0,
    });
  });
});

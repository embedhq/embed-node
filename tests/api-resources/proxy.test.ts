// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proxy', () => {
  test('delete: only required params', async () => {
    const responsePromise = embed.proxy.delete('string', {
      body: { foo: 'bar' },
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
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
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
      'X-Embed-Base-Url-Override': 'string',
      'X-Embed-Retries': 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = embed.proxy.get('string', {
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
    });
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
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
      'X-Embed-Base-Url-Override': 'string',
      'X-Embed-Retries': 0,
    });
  });

  test('post: only required params', async () => {
    const responsePromise = embed.proxy.post('string', {
      body: { foo: 'bar' },
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
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
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
      'X-Embed-Base-Url-Override': 'string',
      'X-Embed-Retries': 0,
    });
  });

  test('put: only required params', async () => {
    const responsePromise = embed.proxy.put('string', {
      body: { foo: 'bar' },
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
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
      'X-Embed-Connected-Account-Id': 'string',
      'X-Embed-Integration': 'string',
      'X-Embed-Base-Url-Override': 'string',
      'X-Embed-Retries': 0,
    });
  });
});

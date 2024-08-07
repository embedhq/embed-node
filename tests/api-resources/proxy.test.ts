// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proxy', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.proxy.delete({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
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
    const response = await client.proxy.delete({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
      base_url_override: 'base_url_override',
      response_type: 'arraybuffer',
      retries: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.proxy.get({
      endpoint: 'endpoint',
      connected_account_id: 'connected_account_id',
      integration: 'integration',
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
    const response = await client.proxy.get({
      endpoint: 'endpoint',
      connected_account_id: 'connected_account_id',
      integration: 'integration',
      base_url_override: 'base_url_override',
      response_type: 'arraybuffer',
      retries: 0,
    });
  });

  test('post: only required params', async () => {
    const responsePromise = client.proxy.post({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
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
    const response = await client.proxy.post({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
      base_url_override: 'base_url_override',
      response_type: 'arraybuffer',
      retries: 0,
    });
  });

  test('put: only required params', async () => {
    const responsePromise = client.proxy.put({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
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
    const response = await client.proxy.put({
      endpoint: 'endpoint',
      body: { foo: 'bar' },
      connected_account_id: 'connected_account_id',
      integration: 'integration',
      base_url_override: 'base_url_override',
      response_type: 'arraybuffer',
      retries: 0,
    });
  });
});

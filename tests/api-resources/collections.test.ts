// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  test('create: only required params', async () => {
    const responsePromise = client.collections.create({
      collection_template: 'issues',
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

  test('create: required and optional params', async () => {
    const response = await client.collections.create({
      collection_template: 'issues',
      integration: 'github-123',
      configuration: { foo: 'bar' },
      name: 'Issues',
      required_scopes: ['repo'],
      slug: 'issues',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.collections.retrieve({ collection: 'issues', integration: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.collections.retrieve({
      collection: 'issues',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.collections.update({ collection: 'issues', integration: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.collections.update({
      collection: 'issues',
      integration: 'github-123',
      collection_version: '1.2',
      configuration: { foo: 'bar' },
      is_enabled: true,
      name: 'Issues',
      required_scopes: ['repo'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.collections.list({ integration: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.collections.list({ integration: 'github-123' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.collections.delete({ collection: 'issues', integration: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.collections.delete({
      collection: 'issues',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });
});

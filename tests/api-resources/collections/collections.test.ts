// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = embed.collections.retrieve('issues', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await embed.collections.retrieve('issues', { integration_id: 'github-123' });
  });

  test('update: only required params', async () => {
    const responsePromise = embed.collections.update('issues', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await embed.collections.update('issues', {
      integration_id: 'github-123',
      auto_start_syncs: true,
      configuration: { foo: 'bar' },
      default_sync_frequency: 'daily',
      exclude_properties_from_syncs: ['string', 'string', 'string'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = embed.collections.list({ integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await embed.collections.list({ integration_id: 'github-123' });
  });

  test('disable: only required params', async () => {
    const responsePromise = embed.collections.disable('issues', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: required and optional params', async () => {
    const response = await embed.collections.disable('issues', { integration_id: 'github-123' });
  });

  test('enable: only required params', async () => {
    const responsePromise = embed.collections.enable('issues', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await embed.collections.enable('issues', { integration_id: 'github-123' });
  });

  test('query: only required params', async () => {
    const responsePromise = embed.collections.query('issues', {
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

  test('query: required and optional params', async () => {
    const response = await embed.collections.query('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
      alpha: 0,
      filter: { foo: 'bar' },
      image: 'string',
      limit: 1,
      query: 'string',
      return_properties: ['string', 'string', 'string'],
      type: 'hybrid',
    });
  });
});

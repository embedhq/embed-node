// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = embed.connections.retrieve('user-123', { integration_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await embed.connections.retrieve('user-123', { integration_id: 'string' });
  });

  test('update: only required params', async () => {
    const responsePromise = embed.connections.update('user-123', { integration_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await embed.connections.update('user-123', {
      integration_id: 'string',
      exclusions: { foo: 'bar' },
      inclusions: { foo: 'bar' },
      metadata: { foo: 'bar' },
    });
  });

  test('list', async () => {
    const responsePromise = embed.connections.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(embed.connections.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      embed.connections.list(
        { after: 'string', before: 'string', integration_id: 'string', limit: 20, order: 'desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = embed.connections.delete('user-123', { integration_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await embed.connections.delete('user-123', { integration_id: 'string' });
  });

  test('upsert: only required params', async () => {
    const responsePromise = embed.connections.upsert({
      id: 'string',
      auth_scheme: 'oauth2',
      credentials: { access_token: 'string', refresh_token: 'string', expires_at: 0 },
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

  test('upsert: required and optional params', async () => {
    const response = await embed.connections.upsert({
      id: 'string',
      auth_scheme: 'oauth2',
      credentials: { access_token: 'string', refresh_token: 'string', expires_at: 0 },
      integration_id: 'string',
      configuration: { foo: 'bar' },
      exclusions: { foo: 'bar' },
      inclusions: { foo: 'bar' },
      metadata: { foo: 'bar' },
    });
  });
});

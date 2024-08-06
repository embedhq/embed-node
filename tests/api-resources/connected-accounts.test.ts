// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectedAccounts', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.connectedAccounts.retrieve('user-123', { integration: 'integration' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.connectedAccounts.retrieve('user-123', { integration: 'integration' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.connectedAccounts.update('user-123', { integration: 'integration' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.connectedAccounts.update('user-123', {
      integration: 'integration',
      configuration: { foo: 'bar' },
      metadata: { foo: 'bar' },
      name: 'Octocat',
    });
  });

  test('list', async () => {
    const responsePromise = client.connectedAccounts.list();
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
    await expect(client.connectedAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectedAccounts.list(
        { after: 'after', before: 'before', integration: 'integration', limit: 20, order: 'desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.connectedAccounts.delete('user-123', { integration: 'integration' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.connectedAccounts.delete('user-123', { integration: 'integration' });
  });

  test('upsert: only required params', async () => {
    const responsePromise = client.connectedAccounts.upsert({
      id: 'id',
      auth_method: 'oauth2',
      credentials: { access_token: 'access_token', refresh_token: 'refresh_token' },
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

  test('upsert: required and optional params', async () => {
    const response = await client.connectedAccounts.upsert({
      id: 'id',
      auth_method: 'oauth2',
      credentials: { access_token: 'access_token', refresh_token: 'refresh_token', expires_at: 0 },
      integration: 'integration',
      configuration: { foo: 'bar' },
      metadata: { foo: 'bar' },
    });
  });
});

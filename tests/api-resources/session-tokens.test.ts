// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessionTokens', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sessionTokens.create({
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

  test('create: required and optional params', async () => {
    const response = await client.sessionTokens.create({
      connected_account_id: 'user-123',
      integration: 'github-123',
      configuration: { foo: 'bar' },
      expires_in_mins: 60,
      language: 'en',
      metadata: { foo: 'bar' },
      name: 'Octocat',
      redirect_url: 'https://my-app.com/callback',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.sessionTokens.retrieve('st_1a2b3c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessionTokens.retrieve('st_1a2b3c', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sessionTokens.list();
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
    await expect(client.sessionTokens.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessionTokens.list(
        { connected_account_id: 'connected_account_id', integration: 'integration' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sessionTokens.delete('st_1a2b3c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessionTokens.delete('st_1a2b3c', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Embed.NotFoundError);
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embedhq';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessionTokens', () => {
  test('create: only required params', async () => {
    const responsePromise = embed.sessionTokens.create({ integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await embed.sessionTokens.create({
      integration_id: 'github-123',
      auth_scheme: 'oauth2',
      configuration: { foo: 'bar' },
      connection_id: 'user-123',
      exclusions: { foo: 'bar' },
      expires_in_mins: 60,
      inclusions: { foo: 'bar' },
      metadata: { foo: 'bar' },
      redirect_url: 'https://my-app.com/callback',
    });
  });

  test('retrieve', async () => {
    const responsePromise = embed.sessionTokens.retrieve('token-123');
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
      embed.sessionTokens.retrieve('token-123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = embed.sessionTokens.list();
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
    await expect(embed.sessionTokens.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = embed.sessionTokens.delete('token-123');
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
      embed.sessionTokens.delete('token-123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Embed.NotFoundError);
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test('create: only required params', async () => {
    const responsePromise = embed.webhooks.create({
      events: ['sync.succeeded', 'sync.failed'],
      url: 'https://my-app.com/webhook',
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
    const response = await embed.webhooks.create({
      events: ['sync.succeeded', 'sync.failed'],
      url: 'https://my-app.com/webhook',
    });
  });

  test('retrieve', async () => {
    const responsePromise = embed.webhooks.retrieve('webhook-123');
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
      embed.webhooks.retrieve('webhook-123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = embed.webhooks.update('webhook-123', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = embed.webhooks.list();
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
    await expect(embed.webhooks.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = embed.webhooks.delete('webhook-123');
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
    await expect(embed.webhooks.delete('webhook-123', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('disable', async () => {
    const responsePromise = embed.webhooks.disable('webhook-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(embed.webhooks.disable('webhook-123', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('enable', async () => {
    const responsePromise = embed.webhooks.enable('webhook-123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(embed.webhooks.enable('webhook-123', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });
});

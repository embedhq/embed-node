// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource syncs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.syncs.create({
      collection: 'issues',
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
    const response = await client.syncs.create({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
      exclusions: ['string', 'string', 'string'],
      frequency: 'Every 6 hours',
      inclusions: ['string', 'string', 'string'],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.syncs.retrieve({
      collection: 'issues',
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

  test('retrieve: required and optional params', async () => {
    const response = await client.syncs.retrieve({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.syncs.update({
      collection: 'issues',
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

  test('update: required and optional params', async () => {
    const response = await client.syncs.update({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
      exclusions: ['string', 'string', 'string'],
      frequency: 'Every 6 hours',
      inclusions: ['string', 'string', 'string'],
    });
  });

  test('list', async () => {
    const responsePromise = client.syncs.list();
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
    await expect(client.syncs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Embed.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.syncs.list(
        { connected_account_id: 'user-123', integration: 'github-123' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Embed.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.syncs.delete({
      collection: 'issues',
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

  test('delete: required and optional params', async () => {
    const response = await client.syncs.delete({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });

  test('start: only required params', async () => {
    const responsePromise = client.syncs.start({
      collection: 'issues',
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

  test('start: required and optional params', async () => {
    const response = await client.syncs.start({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });

  test('stop: only required params', async () => {
    const responsePromise = client.syncs.stop({
      collection: 'issues',
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

  test('stop: required and optional params', async () => {
    const response = await client.syncs.stop({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });

  test('trigger: only required params', async () => {
    const responsePromise = client.syncs.trigger({
      collection: 'issues',
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

  test('trigger: required and optional params', async () => {
    const response = await client.syncs.trigger({
      collection: 'issues',
      connected_account_id: 'user-123',
      integration: 'github-123',
      collection_version: '1.2',
    });
  });
});

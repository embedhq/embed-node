// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource syncs', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = embed.syncs.retrieve('issues', {
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

  test('retrieve: required and optional params', async () => {
    const response = await embed.syncs.retrieve('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = embed.syncs.update('issues', {
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

  test('update: required and optional params', async () => {
    const response = await embed.syncs.update('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
      frequency: 'daily',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = embed.syncs.list({ connection_id: 'user-123', integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await embed.syncs.list({ connection_id: 'user-123', integration_id: 'github-123' });
  });

  test('start: only required params', async () => {
    const responsePromise = embed.syncs.start('issues', {
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

  test('start: required and optional params', async () => {
    const response = await embed.syncs.start('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
  });

  test('stop: only required params', async () => {
    const responsePromise = embed.syncs.stop('issues', {
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

  test('stop: required and optional params', async () => {
    const response = await embed.syncs.stop('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
  });

  test('trigger: only required params', async () => {
    const responsePromise = embed.syncs.trigger('issues', {
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

  test('trigger: required and optional params', async () => {
    const response = await embed.syncs.trigger('issues', {
      connection_id: 'user-123',
      integration_id: 'github-123',
    });
  });
});

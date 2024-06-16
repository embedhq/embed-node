// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from 'embed';
import { Response } from 'node-fetch';

const embed = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = embed.actions.retrieve('create-issue', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await embed.actions.retrieve('create-issue', { integration_id: 'github-123' });
  });

  test('list: only required params', async () => {
    const responsePromise = embed.actions.list({ integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await embed.actions.list({ integration_id: 'github-123' });
  });

  test('disable: only required params', async () => {
    const responsePromise = embed.actions.disable('create-issue', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: required and optional params', async () => {
    const response = await embed.actions.disable('create-issue', { integration_id: 'github-123' });
  });

  test('enable: only required params', async () => {
    const responsePromise = embed.actions.enable('create-issue', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await embed.actions.enable('create-issue', { integration_id: 'github-123' });
  });

  test('schema: only required params', async () => {
    const responsePromise = embed.actions.schema('create-issue', { integration_id: 'github-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('schema: required and optional params', async () => {
    const response = await embed.actions.schema('create-issue', { integration_id: 'github-123' });
  });

  test('trigger: only required params', async () => {
    const responsePromise = embed.actions.trigger('create-issue', {
      connection_id: 'user-123',
      integration_id: 'github-123',
      input: { title: 'bar', body: 'bar' },
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
    const response = await embed.actions.trigger('create-issue', {
      connection_id: 'user-123',
      integration_id: 'github-123',
      input: { title: 'bar', body: 'bar' },
    });
  });
});

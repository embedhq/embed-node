// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Embed from '@embedhq/node';
import { Response } from 'node-fetch';

const client = new Embed({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.actions.runs.retrieve({
      action: 'create-issue',
      action_run_id: 'action-run-123',
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
    const response = await client.actions.runs.retrieve({
      action: 'create-issue',
      action_run_id: 'action-run-123',
      connected_account_id: 'user-123',
      integration: 'github-123',
      action_version: '1.2',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.actions.runs.list({
      action: 'create-issue',
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

  test('list: required and optional params', async () => {
    const response = await client.actions.runs.list({
      action: 'create-issue',
      connected_account_id: 'user-123',
      integration: 'github-123',
      action_version: '1.2',
    });
  });
});

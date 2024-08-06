// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ProxyAPI from './proxy';

export class Proxy extends APIResource {
  /**
   * Proxy DELETE request with connected account's credentials.
   */
  delete(params: ProxyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ProxyDeleteResponse> {
    const { endpoint, body, connected_account_id, integration, base_url_override, retries } = params;
    return this._client.delete(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connected_account_id: connected_account_id,
        integration: integration,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy GET request with connected account's credentials.
   */
  get(params: ProxyGetParams, options?: Core.RequestOptions): Core.APIPromise<ProxyGetResponse> {
    const { endpoint, connected_account_id, integration, base_url_override, retries } = params;
    return this._client.get(`/proxy/${endpoint}`, {
      ...options,
      headers: {
        connected_account_id: connected_account_id,
        integration: integration,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy POST request with connected account's credentials.
   */
  post(params: ProxyPostParams, options?: Core.RequestOptions): Core.APIPromise<ProxyPostResponse> {
    const { endpoint, body, connected_account_id, integration, base_url_override, retries } = params;
    return this._client.post(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connected_account_id: connected_account_id,
        integration: integration,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy PUT request with connected account's credentials.
   */
  put(params: ProxyPutParams, options?: Core.RequestOptions): Core.APIPromise<ProxyPutResponse> {
    const { endpoint, body, connected_account_id, integration, base_url_override, retries } = params;
    return this._client.put(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connected_account_id: connected_account_id,
        integration: integration,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }
}

export type ProxyDeleteResponse = Record<string, unknown>;

export type ProxyGetResponse = Record<string, unknown>;

export type ProxyPostResponse = Record<string, unknown>;

export type ProxyPutResponse = Record<string, unknown>;

export interface ProxyDeleteParams {
  /**
   * Path param: The endpoint to proxy the request to.
   */
  endpoint: string;

  /**
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connected account to use for the request.
   */
  connected_account_id: string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  integration: string;

  /**
   * Header param: Override the base URL for the request.
   */
  base_url_override?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  retries?: number;
}

export interface ProxyGetParams {
  /**
   * Path param: The endpoint to proxy the request to.
   */
  endpoint: string;

  /**
   * Header param: The ID of the connected account to use for the request.
   */
  connected_account_id: string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  integration: string;

  /**
   * Header param: Override the base URL for the request.
   */
  base_url_override?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  retries?: number;
}

export interface ProxyPostParams {
  /**
   * Path param: The endpoint to proxy the request to.
   */
  endpoint: string;

  /**
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connected account to use for the request.
   */
  connected_account_id: string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  integration: string;

  /**
   * Header param: Override the base URL for the request.
   */
  base_url_override?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  retries?: number;
}

export interface ProxyPutParams {
  /**
   * Path param: The endpoint to proxy the request to.
   */
  endpoint: string;

  /**
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connected account to use for the request.
   */
  connected_account_id: string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  integration: string;

  /**
   * Header param: Override the base URL for the request.
   */
  base_url_override?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  retries?: number;
}

export namespace Proxy {
  export import ProxyDeleteResponse = ProxyAPI.ProxyDeleteResponse;
  export import ProxyGetResponse = ProxyAPI.ProxyGetResponse;
  export import ProxyPostResponse = ProxyAPI.ProxyPostResponse;
  export import ProxyPutResponse = ProxyAPI.ProxyPutResponse;
  export import ProxyDeleteParams = ProxyAPI.ProxyDeleteParams;
  export import ProxyGetParams = ProxyAPI.ProxyGetParams;
  export import ProxyPostParams = ProxyAPI.ProxyPostParams;
  export import ProxyPutParams = ProxyAPI.ProxyPutParams;
}

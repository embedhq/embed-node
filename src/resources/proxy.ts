// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ProxyAPI from './proxy';

export class Proxy extends APIResource {
  /**
   * Proxy DELETE request with connection credentials.
   */
  delete(
    endpoint: string,
    params: ProxyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyDeleteResponse> {
    const { body, connection_id, integration_id, base_url_override, retries } = params;
    return this._client.delete(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connection_id: connection_id,
        integration_id: integration_id,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy GET request with connection credentials.
   */
  get(
    endpoint: string,
    params: ProxyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyGetResponse> {
    const { connection_id, integration_id, base_url_override, retries } = params;
    return this._client.get(`/proxy/${endpoint}`, {
      ...options,
      headers: {
        connection_id: connection_id,
        integration_id: integration_id,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy POST request with connection credentials.
   */
  post(
    endpoint: string,
    params: ProxyPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyPostResponse> {
    const { body, connection_id, integration_id, base_url_override, retries } = params;
    return this._client.post(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connection_id: connection_id,
        integration_id: integration_id,
        ...(base_url_override != null ? { base_url_override: base_url_override } : undefined),
        ...(retries?.toString() != null ? { retries: retries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy PUT request with connection credentials.
   */
  put(
    endpoint: string,
    params: ProxyPutParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyPutResponse> {
    const { body, connection_id, integration_id, base_url_override, retries } = params;
    return this._client.put(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        connection_id: connection_id,
        integration_id: integration_id,
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
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connection to use for the request.
   */
  connection_id: string;

  /**
   * Header param: The ID of the integration to use for the request.
   */
  integration_id: string;

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
   * The ID of the connection to use for the request.
   */
  connection_id: string;

  /**
   * The ID of the integration to use for the request.
   */
  integration_id: string;

  /**
   * Override the base URL for the request.
   */
  base_url_override?: string;

  /**
   * The number of times to retry the request.
   */
  retries?: number;
}

export interface ProxyPostParams {
  /**
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connection to use for the request.
   */
  connection_id: string;

  /**
   * Header param: The ID of the integration to use for the request.
   */
  integration_id: string;

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
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Header param: The ID of the connection to use for the request.
   */
  connection_id: string;

  /**
   * Header param: The ID of the integration to use for the request.
   */
  integration_id: string;

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

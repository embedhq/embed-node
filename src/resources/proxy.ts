// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ProxyAPI from './proxy';

export class Proxy extends APIResource {
  /**
   * Proxy DELETE request with connected account's credentials.
   */
  delete(params: ProxyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ProxyDeleteResponse> {
    const {
      endpoint,
      body,
      'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
      'X-Embed-Integration': xEmbedIntegration,
      'X-Embed-Base-Url-Override': xEmbedBaseURLOverride,
      'X-Embed-Retries': xEmbedRetries,
    } = params;
    return this._client.delete(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
        'X-Embed-Integration': xEmbedIntegration,
        ...(xEmbedBaseURLOverride != null ?
          { 'X-Embed-Base-Url-Override': xEmbedBaseURLOverride }
        : undefined),
        ...(xEmbedRetries?.toString() != null ? { 'X-Embed-Retries': xEmbedRetries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy GET request with connected account's credentials.
   */
  get(params: ProxyGetParams, options?: Core.RequestOptions): Core.APIPromise<ProxyGetResponse> {
    const {
      endpoint,
      'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
      'X-Embed-Integration': xEmbedIntegration,
      'X-Embed-Base-Url-Override': xEmbedBaseURLOverride,
      'X-Embed-Retries': xEmbedRetries,
    } = params;
    return this._client.get(`/proxy/${endpoint}`, {
      ...options,
      headers: {
        'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
        'X-Embed-Integration': xEmbedIntegration,
        ...(xEmbedBaseURLOverride != null ?
          { 'X-Embed-Base-Url-Override': xEmbedBaseURLOverride }
        : undefined),
        ...(xEmbedRetries?.toString() != null ? { 'X-Embed-Retries': xEmbedRetries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy POST request with connected account's credentials.
   */
  post(params: ProxyPostParams, options?: Core.RequestOptions): Core.APIPromise<ProxyPostResponse> {
    const {
      endpoint,
      body,
      'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
      'X-Embed-Integration': xEmbedIntegration,
      'X-Embed-Base-Url-Override': xEmbedBaseURLOverride,
      'X-Embed-Retries': xEmbedRetries,
    } = params;
    return this._client.post(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
        'X-Embed-Integration': xEmbedIntegration,
        ...(xEmbedBaseURLOverride != null ?
          { 'X-Embed-Base-Url-Override': xEmbedBaseURLOverride }
        : undefined),
        ...(xEmbedRetries?.toString() != null ? { 'X-Embed-Retries': xEmbedRetries?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Proxy PUT request with connected account's credentials.
   */
  put(params: ProxyPutParams, options?: Core.RequestOptions): Core.APIPromise<ProxyPutResponse> {
    const {
      endpoint,
      body,
      'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
      'X-Embed-Integration': xEmbedIntegration,
      'X-Embed-Base-Url-Override': xEmbedBaseURLOverride,
      'X-Embed-Retries': xEmbedRetries,
    } = params;
    return this._client.put(`/proxy/${endpoint}`, {
      body: body,
      ...options,
      headers: {
        'X-Embed-Connected-Account-Id': xEmbedConnectedAccountId,
        'X-Embed-Integration': xEmbedIntegration,
        ...(xEmbedBaseURLOverride != null ?
          { 'X-Embed-Base-Url-Override': xEmbedBaseURLOverride }
        : undefined),
        ...(xEmbedRetries?.toString() != null ? { 'X-Embed-Retries': xEmbedRetries?.toString() } : undefined),
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
  'X-Embed-Connected-Account-Id': string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  'X-Embed-Integration': string;

  /**
   * Header param: Override the base URL for the request.
   */
  'X-Embed-Base-Url-Override'?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  'X-Embed-Retries'?: number;
}

export interface ProxyGetParams {
  /**
   * Path param: The endpoint to proxy the request to.
   */
  endpoint: string;

  /**
   * Header param: The ID of the connected account to use for the request.
   */
  'X-Embed-Connected-Account-Id': string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  'X-Embed-Integration': string;

  /**
   * Header param: Override the base URL for the request.
   */
  'X-Embed-Base-Url-Override'?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  'X-Embed-Retries'?: number;
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
  'X-Embed-Connected-Account-Id': string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  'X-Embed-Integration': string;

  /**
   * Header param: Override the base URL for the request.
   */
  'X-Embed-Base-Url-Override'?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  'X-Embed-Retries'?: number;
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
  'X-Embed-Connected-Account-Id': string;

  /**
   * Header param: The slug of the integration to use for the request.
   */
  'X-Embed-Integration': string;

  /**
   * Header param: Override the base URL for the request.
   */
  'X-Embed-Base-Url-Override'?: string;

  /**
   * Header param: The number of times to retry the request.
   */
  'X-Embed-Retries'?: number;
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

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as ProxyAPI from '@embedhq/node/resources/proxy';

export class Proxy extends APIResource {
  /**
   * Proxy DELETE request with connected account's credentials.
   */
  delete(
    endpoint: string,
    params: ProxyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyDeleteResponse> {
    const {
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
  get(
    endpoint: string,
    params: ProxyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyGetResponse> {
    const {
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
  post(
    endpoint: string,
    params: ProxyPostParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyPostResponse> {
    const {
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
  put(
    endpoint: string,
    params: ProxyPutParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyPutResponse> {
    const {
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
   * The ID of the connected account to use for the request.
   */
  'X-Embed-Connected-Account-Id': string;

  /**
   * The slug of the integration to use for the request.
   */
  'X-Embed-Integration': string;

  /**
   * Override the base URL for the request.
   */
  'X-Embed-Base-Url-Override'?: string;

  /**
   * The number of times to retry the request.
   */
  'X-Embed-Retries'?: number;
}

export interface ProxyPostParams {
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

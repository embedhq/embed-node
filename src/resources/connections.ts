// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import { isRequestOptions } from '@embedhq/node/core';
import * as ConnectionsAPI from '@embedhq/node/resources/connections';

export class Connections extends APIResource {
  /**
   * Returns a connection.
   */
  retrieve(
    connectionId: string,
    query: ConnectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Connection> {
    return this._client.get(`/connections/${connectionId}`, { query, ...options });
  }

  /**
   * Updates a connection.
   */
  update(
    connectionId: string,
    params: ConnectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Connection> {
    const { integration_id, ...body } = params;
    return this._client.put(`/connections/${connectionId}`, { query: { integration_id }, body, ...options });
  }

  /**
   * Returns a list of connections.
   */
  list(query?: ConnectionListParams, options?: Core.RequestOptions): Core.APIPromise<ConnectionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectionListResponse>;
  list(
    query: ConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/connections', { query, ...options });
  }

  /**
   * Deletes a connection.
   */
  delete(
    connectionId: string,
    params: ConnectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    const { integration_id } = params;
    return this._client.delete(`/connections/${connectionId}`, { query: { integration_id }, ...options });
  }

  /**
   * Manually add a connection. We recommend using the authentication flow provided
   * by Embed. However, if you've already obtained account credentials, you can use
   * them to create a connection with this endpoint.
   */
  upsert(body: ConnectionUpsertParams, options?: Core.RequestOptions): Core.APIPromise<Connection> {
    return this._client.post('/connections', { body, ...options });
  }
}

/**
 * Represents an account connected to an integration.
 */
export interface Connection {
  /**
   * The unique identifier for the connection.
   */
  id: string;

  /**
   * The authentication scheme the connection uses.
   */
  auth_scheme: 'oauth2' | 'oauth1' | 'basic' | 'api_key';

  /**
   * Configuration options for the connection.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The Unix timestamp (in seconds) for when the connection was created.
   */
  created_at: number;

  /**
   * Exclusions rules for the connection.
   */
  exclusions: Record<string, unknown> | null;

  /**
   * Inclusion rules for the connection.
   */
  inclusions: Record<string, unknown> | null;

  /**
   * The unique identifier of the integration used by the connection.
   */
  integration_id: string;

  /**
   * Additional metadata associated with the connection.
   */
  metadata: Record<string, unknown> | null;

  /**
   * The object type, which is always `connection`.
   */
  object: 'connection';

  /**
   * The Unix timestamp (in seconds) for when the connection was updated.
   */
  updated_at: number;
}

export interface ConnectionListResponse {
  data: Array<Connection>;

  object: 'list';

  first_id?: string | null;

  has_more?: boolean;

  last_id?: string | null;
}

export interface ConnectionDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'connection';
}

export interface ConnectionRetrieveParams {
  /**
   * The integration to which the connection belongs.
   */
  integration_id: string;
}

export interface ConnectionUpdateParams {
  /**
   * Query param: The integration to which the connection belongs.
   */
  integration_id: string;

  /**
   * Body param: Exclusion rules for the connection. Only applicable for integrations
   * that support exclusions.
   */
  exclusions?: Record<string, unknown> | null;

  /**
   * Body param: Inclusion rules for the connection. Only applicable for integrations
   * that support inclusions.
   */
  inclusions?: Record<string, unknown> | null;

  /**
   * Body param: Additional metadata for the connection.
   */
  metadata?: Record<string, unknown> | null;
}

export interface ConnectionListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list.
   */
  before?: string;

  /**
   * Filter for connections belonging to a specific integration.
   */
  integration_id?: string;

  /**
   * A limit on the number of objects to be returned.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects.
   */
  order?: 'asc' | 'desc';
}

export interface ConnectionDeleteParams {
  /**
   * The integration to which the connection belongs.
   */
  integration_id: string;
}

export interface ConnectionUpsertParams {
  /**
   * The unique identifier for the connection.
   */
  id: string;

  /**
   * The authentication scheme the connection should use.
   */
  auth_scheme: 'oauth2' | 'oauth1' | 'basic' | 'api_key';

  /**
   * The connection's account credentials.
   */
  credentials:
    | ConnectionUpsertParams.OAuth2Credentials
    | ConnectionUpsertParams.OAuth1Credentials
    | ConnectionUpsertParams.BasicCredentials
    | ConnectionUpsertParams.APIKeyCredentials;

  /**
   * The unique identifier of the integration used by the connection.
   */
  integration_id: string;

  /**
   * Configuration options for the connection.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Exclusion rules for the connection. Only applicable for integrations that
   * support exclusions.
   */
  exclusions?: Record<string, unknown> | null;

  /**
   * Inclusion rules for the connection. Only applicable for integrations that
   * support inclusions.
   */
  inclusions?: Record<string, unknown> | null;

  /**
   * Additional metadata for the connection.
   */
  metadata?: Record<string, unknown> | null;
}

export namespace ConnectionUpsertParams {
  export interface OAuth2Credentials {
    /**
     * The OAuth 2.0 access token.
     */
    access_token: string;

    /**
     * The timestamp when the access token expires.
     */
    expires_at: number;

    /**
     * The OAuth 2.0 refresh token.
     */
    refresh_token: string;
  }

  export interface OAuth1Credentials {
    /**
     * The OAuth 1.0a token.
     */
    oauth_token: string;

    /**
     * The OAuth 1.0a token.
     */
    token_secret: string;
  }

  export interface BasicCredentials {
    /**
     * The password required for `basic` auth.
     */
    password: string;

    /**
     * The username required for `basic` auth.
     */
    username: string;
  }

  export interface APIKeyCredentials {
    /**
     * The API key.
     */
    api_key: string;
  }
}

export namespace Connections {
  export import Connection = ConnectionsAPI.Connection;
  export import ConnectionListResponse = ConnectionsAPI.ConnectionListResponse;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionRetrieveParams = ConnectionsAPI.ConnectionRetrieveParams;
  export import ConnectionUpdateParams = ConnectionsAPI.ConnectionUpdateParams;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
  export import ConnectionUpsertParams = ConnectionsAPI.ConnectionUpsertParams;
}

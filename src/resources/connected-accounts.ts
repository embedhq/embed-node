// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ConnectedAccountsAPI from './connected-accounts';

export class ConnectedAccounts extends APIResource {
  /**
   * Returns a connected account.
   */
  retrieve(
    params: ConnectedAccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccount> {
    const { connected_account_id, ...query } = params;
    return this._client.get(`/connected-accounts/${connected_account_id}`, { query, ...options });
  }

  /**
   * Updates a connected account.
   */
  update(
    params: ConnectedAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccount> {
    const { connected_account_id, integration, ...body } = params;
    return this._client.put(`/connected-accounts/${connected_account_id}`, {
      query: { integration },
      body,
      ...options,
    });
  }

  /**
   * Returns a list of connected accounts.
   */
  list(
    query?: ConnectedAccountListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccountListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectedAccountListResponse>;
  list(
    query: ConnectedAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/connected-accounts', { query, ...options });
  }

  /**
   * Deletes a connected account.
   */
  delete(
    params: ConnectedAccountDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccountDeleteResponse> {
    const { connected_account_id, integration } = params;
    return this._client.delete(`/connected-accounts/${connected_account_id}`, {
      query: { integration },
      ...options,
    });
  }

  /**
   * Manually add a connected account. We recommend using the
   * [authentication flow](https://useembed.com/docs/guides/connect-an-account)
   * provided by Embed. However, if you've already obtained account credentials, you
   * can use them to create a connected account with this endpoint.
   */
  upsert(
    body: ConnectedAccountUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectedAccount> {
    return this._client.post('/connected-accounts', { body, ...options });
  }
}

/**
 * Represents an account connected to an integration.
 */
export interface ConnectedAccount {
  /**
   * The unique identifier for the connected account.
   */
  id: string;

  /**
   * The authentication method used to connect the account.
   */
  auth_method: 'oauth2' | 'basic' | 'api_key' | 'none';

  /**
   * Configuration options for the connected account.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The Unix timestamp (in seconds) for when the connected account was created.
   */
  created_at: number;

  /**
   * The unique slug of the integration associated with the connected account.
   */
  integration: string;

  /**
   * Additional metadata associated with the connected account.
   */
  metadata: Record<string, unknown> | null;

  /**
   * The display name of the connected account.
   */
  name: string;

  /**
   * The object type, which is always `connected_account`.
   */
  object: 'connected_account';

  /**
   * The Unix timestamp (in seconds) for when the connected account was updated.
   */
  updated_at: number;
}

export interface ConnectedAccountListResponse {
  data: Array<ConnectedAccount>;

  object: 'list';

  first?: string | null;

  has_more?: boolean;

  last?: string | null;
}

export interface ConnectedAccountDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'connected_account';
}

export interface ConnectedAccountRetrieveParams {
  /**
   * Path param: The unique identifier for the connected account.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the connected account belongs.
   */
  integration: string;
}

export interface ConnectedAccountUpdateParams {
  /**
   * Path param: The unique identifier for the connected account.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the connected account belongs.
   */
  integration: string;

  /**
   * Body param: Configuration options for the connected account.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Body param: Additional metadata for the connected account.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * Body param: The display name of the connected account.
   */
  name?: string;
}

export interface ConnectedAccountListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID or slug that defines
   * your place in the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID or slug that defines
   * your place in the list.
   */
  before?: string;

  /**
   * Filter connected accounts by integration slug.
   */
  integration?: string;

  /**
   * A limit on the number of objects to be returned.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects.
   */
  order?: 'asc' | 'desc';
}

export interface ConnectedAccountDeleteParams {
  /**
   * Path param: The unique identifier for the connected account.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the connected account belongs.
   */
  integration: string;
}

export interface ConnectedAccountUpsertParams {
  /**
   * The unique identifier for the connected account.
   */
  id: string;

  /**
   * The authentication method used to connect the account.
   */
  auth_method: 'oauth2' | 'basic' | 'api_key' | 'none';

  /**
   * The connected account's authentication credentials.
   */
  credentials:
    | ConnectedAccountUpsertParams.OAuth2Credentials
    | ConnectedAccountUpsertParams.BasicCredentials
    | ConnectedAccountUpsertParams.APIKeyCredentials;

  /**
   * The unique slug of the integration associated with the connected account.
   */
  integration: string;

  /**
   * Configuration options for the connected account.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Additional metadata for the connected account.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The display name of the connected account.
   */
  name?: string;
}

export namespace ConnectedAccountUpsertParams {
  export interface OAuth2Credentials {
    /**
     * The OAuth 2.0 access token.
     */
    access_token: string;

    /**
     * The OAuth 2.0 refresh token.
     */
    refresh_token: string;

    /**
     * The unix timestamp (in seconds) for when the access token expires.
     */
    expires_at?: number;
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

export namespace ConnectedAccounts {
  export import ConnectedAccount = ConnectedAccountsAPI.ConnectedAccount;
  export import ConnectedAccountListResponse = ConnectedAccountsAPI.ConnectedAccountListResponse;
  export import ConnectedAccountDeleteResponse = ConnectedAccountsAPI.ConnectedAccountDeleteResponse;
  export import ConnectedAccountRetrieveParams = ConnectedAccountsAPI.ConnectedAccountRetrieveParams;
  export import ConnectedAccountUpdateParams = ConnectedAccountsAPI.ConnectedAccountUpdateParams;
  export import ConnectedAccountListParams = ConnectedAccountsAPI.ConnectedAccountListParams;
  export import ConnectedAccountDeleteParams = ConnectedAccountsAPI.ConnectedAccountDeleteParams;
  export import ConnectedAccountUpsertParams = ConnectedAccountsAPI.ConnectedAccountUpsertParams;
}

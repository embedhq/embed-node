// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionTokensAPI from './session-tokens';

export class SessionTokens extends APIResource {
  /**
   * Creates a session token.
   */
  create(body: SessionTokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionToken> {
    return this._client.post('/session-tokens', { body, ...options });
  }

  /**
   * Returns a session token.
   */
  retrieve(token: string, options?: Core.RequestOptions): Core.APIPromise<SessionToken> {
    return this._client.get(`/session-tokens/${token}`, options);
  }

  /**
   * Returns a list of session tokens.
   */
  list(
    query?: SessionTokenListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionTokenListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SessionTokenListResponse>;
  list(
    query: SessionTokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionTokenListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/session-tokens', { query, ...options });
  }

  /**
   * Deletes a session token.
   */
  delete(token: string, options?: Core.RequestOptions): Core.APIPromise<SessionTokenDeleteResponse> {
    return this._client.delete(`/session-tokens/${token}`, options);
  }
}

/**
 * A short-lived token used to connect an account securely.
 */
export interface SessionToken {
  /**
   * The unique token for the session.
   */
  token: string;

  /**
   * Configuration options to assign to the connected account.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The URL used to connect an account.
   */
  connect_url: string;

  /**
   * The unique identifier to assign to the connected account.
   */
  connected_account_id: string;

  /**
   * The Unix timestamp (in seconds) for when the session token was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the session token expires.
   */
  expires_at: number;

  /**
   * The unique slug of the integration to connect the account to.
   */
  integration: string;

  /**
   * The language to use for the authorization flow.
   */
  language: string | null;

  /**
   * Additional metadata to assign to the connected account.
   */
  metadata: Record<string, unknown> | null;

  /**
   * The display name to assign to the connected account.
   */
  name: string | null;

  /**
   * The object type, which is always `session_token`.
   */
  object: 'session_token';

  /**
   * The URL to redirect to after the authorization flow is complete.
   */
  redirect_url: string | null;
}

export interface SessionTokenListResponse {
  data: Array<SessionToken>;

  object: 'list';
}

export interface SessionTokenDeleteResponse {
  deleted: boolean;

  object: 'session_token';

  token?: string;
}

export interface SessionTokenCreateParams {
  /**
   * The unique identifier to assign to the connected account.
   */
  connected_account_id: string;

  /**
   * The unique slug of the integration to connect the account to.
   */
  integration: string;

  /**
   * Configuration options to assign to the connected account.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * The number of minutes until the session token expires.
   */
  expires_in_mins?: number;

  /**
   * The language to use for the authorization flow.
   */
  language?: string | null;

  /**
   * Additional metadata to assign to the connected account.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The display name to assign to the connected account.
   */
  name?: string | null;

  /**
   * The URL to redirect to after the authorization flow is complete.
   */
  redirect_url?: string | null;
}

export interface SessionTokenListParams {
  /**
   * Filter for session tokens associated with a connected account.
   */
  connected_account_id?: string;

  /**
   * Filter for session tokens associated with an integration.
   */
  integration?: string;
}

export namespace SessionTokens {
  export import SessionToken = SessionTokensAPI.SessionToken;
  export import SessionTokenListResponse = SessionTokensAPI.SessionTokenListResponse;
  export import SessionTokenDeleteResponse = SessionTokensAPI.SessionTokenDeleteResponse;
  export import SessionTokenCreateParams = SessionTokensAPI.SessionTokenCreateParams;
  export import SessionTokenListParams = SessionTokensAPI.SessionTokenListParams;
}

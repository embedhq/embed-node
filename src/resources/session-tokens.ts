// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as SessionTokensAPI from '@embedhq/node/resources/session-tokens';

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
  list(options?: Core.RequestOptions): Core.APIPromise<SessionTokenListResponse> {
    return this._client.get('/session-tokens', options);
  }

  /**
   * Deletes a session token.
   */
  delete(token: string, options?: Core.RequestOptions): Core.APIPromise<SessionTokenDeleteResponse> {
    return this._client.delete(`/session-tokens/${token}`, options);
  }
}

/**
 * Represents a session token for a user.
 */
export interface SessionToken {
  /**
   * The unique token that identifies the session.
   */
  token: string;

  /**
   * The authentication scheme to use to connect the account. Only applicable for
   * integrations that support multiple auth schemes.
   */
  auth_scheme: 'oauth2' | 'oauth1' | 'basic' | 'api_key';

  /**
   * Configuration options to assign to the connection.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The unique identifier of the connection.
   */
  connection_id: string | null;

  /**
   * The Unix timestamp (in seconds) for when the session token was created.
   */
  created_at: number;

  /**
   * Exclusion rules to assign to the connection. Only applicable for integrations
   * that support exclusions.
   */
  exclusions: Record<string, unknown> | null;

  /**
   * The Unix timestamp (in seconds) for when the session token expires.
   */
  expires_at: number;

  /**
   * Inclusion rules to assign to the connection. Only applicable for integrations
   * that support inclusions.
   */
  inclusions: Record<string, unknown> | null;

  /**
   * The unique identifier of the integration to connect the account to.
   */
  integration_id: string;

  /**
   * Additional metadata to assign to the connection.
   */
  metadata: Record<string, unknown> | null;

  /**
   * The object type, which is always `session_token`.
   */
  object: 'session_token';

  /**
   * The URL to redirect to after the authentication flow is complete.
   */
  redirect_url: string | null;

  /**
   * The magic link used to connect an account with the session token.
   */
  url: string;
}

export interface SessionTokenListResponse {
  data: Array<SessionToken>;

  object: 'list';
}

export interface SessionTokenDeleteResponse {
  token: string;

  deleted: boolean;

  object: 'session_token';
}

export interface SessionTokenCreateParams {
  /**
   * The unique identifier of the integration to connect the account to.
   */
  integration_id: string;

  /**
   * The authentication scheme to use to connect the account. Only applicable for
   * integrations that support multiple auth schemes.
   */
  auth_scheme?: 'oauth2' | 'oauth1' | 'basic' | 'api_key';

  /**
   * Configuration options to assign to the connection.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * The unique identifier of the connection.
   */
  connection_id?: string;

  /**
   * Exclusion rules to assign to the connection. Only applicable for integrations
   * that support exclusions.
   */
  exclusions?: Record<string, unknown> | null;

  /**
   * The number of minutes until the session token expires.
   */
  expires_in_mins?: number;

  /**
   * Inclusion rules to assign to the connection. Only applicable for integrations
   * that support inclusions.
   */
  inclusions?: Record<string, unknown> | null;

  /**
   * Additional metadata to assign to the connection.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The URL to redirect to after the authentication flow is complete.
   */
  redirect_url?: string | null;
}

export namespace SessionTokens {
  export import SessionToken = SessionTokensAPI.SessionToken;
  export import SessionTokenListResponse = SessionTokensAPI.SessionTokenListResponse;
  export import SessionTokenDeleteResponse = SessionTokensAPI.SessionTokenDeleteResponse;
  export import SessionTokenCreateParams = SessionTokensAPI.SessionTokenCreateParams;
}

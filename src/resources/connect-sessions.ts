// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ConnectSessionsAPI from './connect-sessions';

export class ConnectSessions extends APIResource {
  /**
   * Creates a connect session.
   */
  create(body: ConnectSessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<ConnectSession> {
    return this._client.post('/connect-sessions', { body, ...options });
  }

  /**
   * Returns a connect session.
   */
  retrieve(connectSessionId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectSession> {
    return this._client.get(`/connect-sessions/${connectSessionId}`, options);
  }

  /**
   * Returns a list of connect sessions.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectSessionListResponse> {
    return this._client.get('/connect-sessions', options);
  }

  /**
   * Deletes a connect session.
   */
  delete(
    connectSessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectSessionDeleteResponse> {
    return this._client.delete(`/connect-sessions/${connectSessionId}`, options);
  }
}

/**
 * A secure, short-lived session used to connect an account.
 */
export interface ConnectSession {
  /**
   * The unique identifier for the connect session.
   */
  id: string;

  /**
   * Configuration options to assign to the connected account.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The unique identifier for the connected account.
   */
  connected_account_id: string;

  /**
   * The Unix timestamp (in seconds) for when the session token was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the connect session expires.
   */
  expires_at: number;

  /**
   * The unique slug of the integration to connect the account to.
   */
  integration: string;

  /**
   * Additional metadata to assign to the connected account.
   */
  metadata: Record<string, unknown> | null;

  /**
   * The display name of the connected account.
   */
  name: string | null;

  /**
   * The object type, which is always `connect_session`.
   */
  object: 'connect_session';

  /**
   * The URL to redirect to after the authorization flow is complete.
   */
  redirect_url: string | null;

  /**
   * The magic link used to connect an account.
   */
  url: string;
}

export interface ConnectSessionListResponse {
  data: Array<ConnectSession>;

  object: 'list';
}

export interface ConnectSessionDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'connect_session';
}

export interface ConnectSessionCreateParams {
  /**
   * The unique identifier for the connected account.
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
   * The number of minutes until the connect session expires.
   */
  expires_in_mins?: number;

  /**
   * Additional metadata to assign to the connected account.
   */
  metadata?: Record<string, unknown> | null;

  /**
   * The display name of the connected account.
   */
  name?: string | null;

  /**
   * The URL to redirect to after the authorization flow is complete.
   */
  redirect_url?: string | null;
}

export namespace ConnectSessions {
  export import ConnectSession = ConnectSessionsAPI.ConnectSession;
  export import ConnectSessionListResponse = ConnectSessionsAPI.ConnectSessionListResponse;
  export import ConnectSessionDeleteResponse = ConnectSessionsAPI.ConnectSessionDeleteResponse;
  export import ConnectSessionCreateParams = ConnectSessionsAPI.ConnectSessionCreateParams;
}

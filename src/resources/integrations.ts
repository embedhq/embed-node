// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as IntegrationsAPI from './integrations';

export class Integrations extends APIResource {
  /**
   * Creates an integration.
   */
  create(
    body: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationCreateResponse> {
    return this._client.post('/integrations', { body, ...options });
  }
}

/**
 * Represents an integration with a third-party provider.
 */
export interface IntegrationCreateResponse {
  /**
   * The unique identifier for the integration.
   */
  id: string;

  /**
   * The authentication scheme the integration uses.
   */
  auth_scheme: 'oauth2' | 'oauth1' | 'basic' | 'api_key' | 'service_account' | 'none';

  /**
   * The Unix timestamp (in seconds) for when the integration was created.
   */
  created_at: number;

  /**
   * Whether the integration is enabled.
   */
  is_enabled: boolean;

  /**
   * The object type, which is always `integration`.
   */
  object: 'integration';

  /**
   * The unique key of the integration provider.
   */
  provider_key: string;

  /**
   * The Unix timestamp (in seconds) for when the integration was updated.
   */
  updated_at: number;

  /**
   * The display name of the integration.
   */
  display_name?: string | null;

  /**
   * The URL of the integration provider's logo.
   */
  logo_url?: string | null;

  /**
   * The URL of the integration provider's logo suitable for dark mode.
   */
  logo_url_dark_mode?: string | null;
}

export interface IntegrationCreateParams {
  /**
   * The unique key of the integration provider.
   */
  provider_key: string;

  /**
   * The authentication scheme the integration should use. Only applicable for
   * providers that support multiple authentication schemes.
   */
  auth_scheme?: 'oauth2' | 'oauth1' | 'basic' | 'api_key' | 'service_account' | 'none';

  /**
   * The display name of the integration.
   */
  display_name?: string | null;

  /**
   * The OAuth Client ID. Required if `auth_scheme` is `oauth2`.
   */
  oauth_client_id?: string | null;

  /**
   * The OAuth Client Secret. Required if `auth_scheme` is `oauth2`.
   */
  oauth_client_secret?: string | null;

  /**
   * Additional OAuth scopes to request. By default, Embed will request the minimum
   * required scopes for the [collections](/docs/api-reference/collections) and
   * [actions](/docs/api-reference/actions) enabled on the integration.
   */
  oauth_scopes?: Array<string> | null;

  /**
   * Whether to use test credentials provided by Embed. Only available in staging
   * environment.
   */
  use_test_credentials?: boolean | null;
}

export namespace Integrations {
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
}

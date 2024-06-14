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
  auth_scheme: 'oauth2' | 'oauth1' | 'basic' | 'api_key';

  /**
   * The Unix timestamp (in seconds) for when the integration was created.
   */
  created_at: number;

  /**
   * Whether the integration is enabled.
   */
  is_enabled: boolean;

  /**
   * Whether the integration is using test credentials provided by Embed.
   */
  is_using_test_credentials: boolean;

  /**
   * The URL of the integration provider's logo.
   */
  logo_url: string;

  /**
   * The OAuth Client ID. Required for integrations that use OAuth.
   */
  oauth_client_id: string | null;

  /**
   * The OAuth Client Secret. Required for integrations that use OAuth.
   */
  oauth_client_secret: string | null;

  /**
   * Additional OAuth scopes to request from the user. By default, Embed will request
   * the minimum required scopes for the
   * [collections](/docs/api-reference/collections) and
   * [actions](/docs/api-reference/actions) enabled on the integration.
   */
  oauth_scopes: Array<string>;

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
   * The unique identifier for the integration.
   */
  id?: string;

  /**
   * The authentication scheme the integration should use. Only applicable for
   * providers that support multiple auth schemes.
   */
  auth_scheme?: 'oauth1' | 'oauth2' | 'basic' | 'api_key';

  /**
   * The OAuth Client ID. Required for integrations that use OAuth.
   */
  oauth_client_id?: string | null;

  /**
   * The OAuth Client Secret. Required for integrations that use OAuth.
   */
  oauth_client_secret?: string | null;

  /**
   * Additional OAuth scopes to request from the user. By default, Embed will request
   * the minimum required scopes for the collections and actions enabled on the
   * integration.
   */
  oauth_scopes?: Array<string>;

  /**
   * Use test credentials provided by Embed. Only available in staging environment.
   */
  use_test_credentials?: boolean;
}

export namespace Integrations {
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
}

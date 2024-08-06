// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import { isRequestOptions } from '@embedhq/node/core';
import * as Core from '@embedhq/node/core';
import * as IntegrationsAPI from '@embedhq/node/resources/integrations';

export class Integrations extends APIResource {
  /**
   * Creates an integration.
   */
  create(body: IntegrationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Integration> {
    return this._client.post('/integrations', { body, ...options });
  }

  /**
   * Returns a list of integrations.
   */
  list(
    query?: IntegrationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<IntegrationListResponse>;
  list(
    query: IntegrationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/integrations', { query, ...options });
  }
}

/**
 * Represents an integration with a third-party provider.
 */
export interface Integration {
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
   * the minimum required scopes for the collections and actions enabled on the
   * integration.
   */
  oauth_scopes: Array<string>;

  /**
   * The object type, which is always `integration`.
   */
  object: 'integration';

  /**
   * The unique slug of the provider.
   */
  provider: string;

  /**
   * The Unix timestamp (in seconds) for when the integration was updated.
   */
  updated_at: number;

  /**
   * The authentication schemes the integration supports.
   */
  auth_schemes?: Array<'oauth1' | 'oauth2' | 'basic' | 'api_key'>;

  /**
   * The URL of the integration provider's logo suitable for dark mode.
   */
  logo_url_dark_mode?: string | null;

  /**
   * The unique slug of the integration.
   */
  slug?: string;
}

export interface IntegrationListResponse {
  data: Array<Integration>;

  object: 'list';

  first?: string | null;

  has_more?: boolean;

  last?: string | null;
}

export interface IntegrationCreateParams {
  /**
   * The unique slug of the integration provider.
   */
  provider: string;

  /**
   * The display name of the integration (defaults to provider name).
   */
  name?: string;

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
   * The unique slug of the integration (defaults to provider slug).
   */
  slug?: string;

  /**
   * Use test credentials provided by Embed.
   */
  use_test_credentials?: boolean;
}

export interface IntegrationListParams {
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
   * A limit on the number of objects to be returned.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects.
   */
  order?: 'asc' | 'desc';
}

export namespace Integrations {
  export import Integration = IntegrationsAPI.Integration;
  export import IntegrationListResponse = IntegrationsAPI.IntegrationListResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
}

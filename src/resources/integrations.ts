// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as IntegrationsAPI from './integrations';

export class Integrations extends APIResource {
  /**
   * Creates an integration.
   */
  create(body: IntegrationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Integration> {
    return this._client.post('/integrations', { body, ...options });
  }

  /**
   * Returns an integration.
   */
  retrieve(integrationId: string, options?: Core.RequestOptions): Core.APIPromise<Integration> {
    return this._client.get(`/integrations/${integrationId}`, options);
  }

  /**
   * Updates an integration.
   */
  update(
    integrationId: string,
    body: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Integration> {
    return this._client.put(`/integrations/${integrationId}`, { body, ...options });
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

  /**
   * Deletes an integration.
   */
  delete(integrationId: string, options?: Core.RequestOptions): Core.APIPromise<IntegrationDeleteResponse> {
    return this._client.delete(`/integrations/${integrationId}`, options);
  }

  /**
   * Disables an integration.
   */
  disable(integrationId: string, options?: Core.RequestOptions): Core.APIPromise<Integration> {
    return this._client.post(`/integrations/${integrationId}/disable`, options);
  }

  /**
   * Enables an integration.
   */
  enable(integrationId: string, options?: Core.RequestOptions): Core.APIPromise<Integration> {
    return this._client.post(`/integrations/${integrationId}/enable`, options);
  }
}

/**
 * Represents an integration with a third-party provider.
 */
export interface Integration {
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
   * the minimum required scopes for the collections and actions enabled on the
   * integration.
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

export interface IntegrationListResponse {
  data: Array<Integration>;

  object: 'list';

  first_id?: string | null;

  has_more?: boolean;

  last_id?: string | null;
}

export interface IntegrationDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'integration';
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

export interface IntegrationUpdateParams {
  /**
   * Whether the integration is using test credentials provided by Embed.
   */
  is_using_test_credentials?: boolean;

  /**
   * The OAuth Client ID. Required for integrations that use OAuth authentication.
   */
  oauth_client_id?: string | null;

  /**
   * The OAuth Client Secret. Required for integrations that use OAuth
   * authentication.
   */
  oauth_client_secret?: string | null;

  /**
   * Additional OAuth scopes to request from the user. By default, Embed will request
   * the minimum required scopes for the collections and actions enabled on the
   * integration.
   */
  oauth_scopes?: Array<string>;
}

export interface IntegrationListParams {
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
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProvidersAPI from './providers';
import * as ActionTemplatesAPI from './action-templates';
import * as CollectionTemplatesAPI from './collection-templates';

export class Providers extends APIResource {
  collectionTemplates: CollectionTemplatesAPI.CollectionTemplates =
    new CollectionTemplatesAPI.CollectionTemplates(this._client);
  actionTemplates: ActionTemplatesAPI.ActionTemplates = new ActionTemplatesAPI.ActionTemplates(this._client);

  /**
   * Returns a provider.
   */
  retrieve(
    provider: string,
    query?: ProviderRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Provider>;
  retrieve(provider: string, options?: Core.RequestOptions): Core.APIPromise<Provider>;
  retrieve(
    provider: string,
    query: ProviderRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Provider> {
    if (isRequestOptions(query)) {
      return this.retrieve(provider, {}, query);
    }
    return this._client.get(`/providers/${provider}`, { query, ...options });
  }

  /**
   * Returns a list of integration providers.
   */
  list(query?: ProviderListParams, options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse>;
  list(
    query: ProviderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProviderListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/providers', { query, ...options });
  }
}

/**
 * Represents an integration provider.
 */
export interface Provider {
  /**
   * The authentication methods supported by the provider.
   */
  auth_methods: Array<string>;

  /**
   * The base URL of the provider's API.
   */
  base_url: string;

  /**
   * The URL to the provider's API documentation.
   */
  docs_url: string | null;

  /**
   * Headers to attach to requests made to the provider.
   */
  headers: Record<string, unknown> | null;

  /**
   * The URL to the provider's logo.
   */
  logo_url: string | null;

  /**
   * The URL to the provider's logo, optimized for dark mode.
   */
  logo_url_dark_mode: string;

  /**
   * The display name of the provider.
   */
  name: string;

  /**
   * The configuration details required for OAuth authentication.
   */
  oauth_configuration: Record<string, unknown> | null;

  /**
   * The object type, which is always `provider`.
   */
  object: 'provider';

  /**
   * The configuration details required to handle rate limits imposed by the
   * provider.
   */
  rate_limit_configuration: Record<string, unknown> | null;

  /**
   * The unique slug of the integration provider.
   */
  slug: string;

  /**
   * Whether the provider is public or private.
   */
  visibility: 'public' | 'private';
}

export interface ProviderListResponse {
  data: Array<Provider>;

  object: 'list';
}

export interface ProviderRetrieveParams {
  /**
   * Include action templates in the response.
   */
  include_action_templates?: boolean;

  /**
   * Include collection templates in the response.
   */
  include_collection_templates?: boolean;
}

export interface ProviderListParams {
  /**
   * Include action templates for each provider in the response.
   */
  include_action_templates?: boolean;

  /**
   * Include collection templates for each provider in the response.
   */
  include_collection_templates?: boolean;
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
  export import ProviderRetrieveParams = ProvidersAPI.ProviderRetrieveParams;
  export import ProviderListParams = ProvidersAPI.ProviderListParams;
  export import CollectionTemplates = CollectionTemplatesAPI.CollectionTemplates;
  export import CollectionTemplateRetrieveResponse = CollectionTemplatesAPI.CollectionTemplateRetrieveResponse;
  export import CollectionTemplateListResponse = CollectionTemplatesAPI.CollectionTemplateListResponse;
  export import ActionTemplates = ActionTemplatesAPI.ActionTemplates;
  export import ActionTemplateRetrieveResponse = ActionTemplatesAPI.ActionTemplateRetrieveResponse;
  export import ActionTemplateListResponse = ActionTemplatesAPI.ActionTemplateListResponse;
}

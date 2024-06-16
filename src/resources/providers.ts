// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ProvidersAPI from './providers';
import * as SchemasAPI from './actions/schemas';
import * as CollectionsSchemasAPI from './collections/schemas';

export class Providers extends APIResource {
  /**
   * Returns a provider.
   */
  retrieve(providerKey: string, options?: Core.RequestOptions): Core.APIPromise<Provider> {
    return this._client.get(`/providers/${providerKey}`, options);
  }

  /**
   * Returns a list of integration providers.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse> {
    return this._client.get('/providers', options);
  }
}

/**
 * Represents an integration provider.
 */
export interface Provider {
  /**
   * The object type, which is always `provider`.
   */
  object: 'provider';

  schema: Provider.Schema;

  /**
   * The unique key of the integration provider.
   */
  unique_key: string;
}

export namespace Provider {
  export interface Schema {
    /**
     * The authentication schemes supported by the integration provider.
     */
    auth: Array<Record<string, unknown>>;

    /**
     * The base URL of the integration provider.
     */
    base_url: string;

    /**
     * The URL of the logo of the integration provider.
     */
    logo_url: string;

    /**
     * The name of the integration provider.
     */
    name: string;

    /**
     * The unique key of the integration provider.
     */
    unique_key: string;

    actions?: Array<SchemasAPI.ActionSchema>;

    collections?: Array<CollectionsSchemasAPI.CollectionSchema>;

    /**
     * The documentation URL of the integration provider.
     */
    docs_url?: string;

    /**
     * The URL of the dark mode logo of the integration provider.
     */
    logo_url_dark_mode?: string;
  }
}

export interface ProviderListResponse {
  data: Array<Provider>;

  object: 'list';
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
}

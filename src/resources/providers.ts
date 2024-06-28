// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as ProvidersAPI from '@embedhq/node/resources/providers';
import * as SchemasAPI from '@embedhq/node/resources/actions/schemas';
import * as CollectionsSchemasAPI from '@embedhq/node/resources/collections/schemas';

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
     * The actions supported by the integration provider.
     */
    actions?: Array<SchemasAPI.ActionSchema>;

    /**
     * The collections supported by the integration provider.
     */
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

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CollectionTemplatesAPI from './collection-templates';

export class CollectionTemplates extends APIResource {
  /**
   * Returns a collection template for a provider.
   */
  retrieve(
    provider: string,
    collection: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionTemplateRetrieveResponse> {
    return this._client.get(`/providers/${provider}/collection-templates/${collection}`, options);
  }

  /**
   * Returns a list of collection templates for a provider.
   */
  list(provider: string, options?: Core.RequestOptions): Core.APIPromise<CollectionTemplateListResponse> {
    return this._client.get(`/providers/${provider}/collection-templates`, options);
  }
}

export interface CollectionTemplateRetrieveResponse {
  /**
   * Configuration options for the collection template.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The display name of the collection template.
   */
  name: string;

  /**
   * The object type, which is always `collection_template`.
   */
  object: 'collection_template';

  /**
   * The unique slug of the provider.
   */
  provider: string;

  /**
   * The OAuth scopes required for the collection template.
   */
  required_scopes: Array<string>;

  /**
   * The schema of the collection template.
   */
  schema: Record<string, unknown>;

  /**
   * The unique slug of the collection template.
   */
  slug: string;
}

export interface CollectionTemplateListResponse {
  data: Array<CollectionTemplateListResponse.Data>;

  object: 'list';
}

export namespace CollectionTemplateListResponse {
  export interface Data {
    /**
     * Configuration options for the collection template.
     */
    configuration: Record<string, unknown> | null;

    /**
     * The display name of the collection template.
     */
    name: string;

    /**
     * The object type, which is always `collection_template`.
     */
    object: 'collection_template';

    /**
     * The unique slug of the provider.
     */
    provider: string;

    /**
     * The OAuth scopes required for the collection template.
     */
    required_scopes: Array<string>;

    /**
     * The schema of the collection template.
     */
    schema: Record<string, unknown>;

    /**
     * The unique slug of the collection template.
     */
    slug: string;
  }
}

export namespace CollectionTemplates {
  export import CollectionTemplateRetrieveResponse = CollectionTemplatesAPI.CollectionTemplateRetrieveResponse;
  export import CollectionTemplateListResponse = CollectionTemplatesAPI.CollectionTemplateListResponse;
}

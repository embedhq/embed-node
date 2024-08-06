// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CollectionsAPI from './collections';

export class Collections extends APIResource {
  /**
   * Creates a collection from a template.
   */
  create(body: CollectionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Collection> {
    return this._client.post('/collections', { body, ...options });
  }

  /**
   * Returns a collection.
   */
  retrieve(
    collection: string,
    query: CollectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/collections/${collection}`, { query, ...options });
  }

  /**
   * Updates a collection.
   */
  update(
    collection: string,
    params: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    const { integration, collection_version, ...body } = params;
    return this._client.put(`/collections/${collection}`, {
      query: { integration, collection_version },
      body,
      ...options,
    });
  }

  /**
   * Returns a list of collections.
   */
  list(query: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionListResponse> {
    return this._client.get('/collections', { query, ...options });
  }

  /**
   * Deletes a collection.
   */
  delete(
    collection: string,
    params: CollectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionDeleteResponse> {
    const { integration, collection_version } = params;
    return this._client.delete(`/collections/${collection}`, {
      query: { integration, collection_version },
      ...options,
    });
  }
}

/**
 * Represents a collection of data objects synced from a third-party app.
 */
export interface Collection {
  /**
   * Configuration options for the collection.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The Unix timestamp (in seconds) for when the collection was created.
   */
  created_at: number;

  /**
   * The slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * Whether the collection is enabled.
   */
  is_enabled: boolean;

  /**
   * The display name of the collection.
   */
  name: string;

  /**
   * The object type, which is always `collection`.
   */
  object: 'collection';

  /**
   * The collection schema.
   */
  schema: Record<string, unknown>;

  /**
   * The unique slug of the collection.
   */
  slug: string;

  /**
   * The Unix timestamp (in seconds) for when the collection was updated.
   */
  updated_at: number;

  /**
   * The version of the collection, formatted as "MAJOR.MINOR".
   */
  version: string;

  /**
   * The OAuth scopes required to sync the collection.
   */
  required_scopes?: Array<string>;
}

export interface CollectionListResponse {
  data: Array<Collection>;

  object: 'list';
}

export interface CollectionDeleteResponse {
  deleted: boolean;

  object: 'collection';

  slug: string;
}

export interface CollectionCreateParams {
  /**
   * The unique slug of the collection template to use.
   */
  collection_template: string;

  /**
   * The unique slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * Configuration options for the collection.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * The display name of the collection (defaults to the collection template name).
   */
  name?: string;

  /**
   * The OAuth scopes required to sync the collection (defaults to the collection
   * template scopes, if applicable).
   */
  required_scopes?: Array<string>;

  /**
   * The unique slug of the collection (defaults to the collection template slug).
   */
  slug?: string;
}

export interface CollectionRetrieveParams {
  /**
   * The slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * The version of the collection to retrieve (defaults to latest).
   */
  collection_version?: string;
}

export interface CollectionUpdateParams {
  /**
   * Query param: The slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * Query param: The version of the collection to update (defaults to latest).
   */
  collection_version?: string;

  /**
   * Body param: Configuration options for the collection.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Body param: Whether the collection is enabled.
   */
  is_enabled?: boolean;

  /**
   * Body param: The display name of the collection.
   */
  name?: string;

  /**
   * Body param: The OAuth scopes required to sync the collection.
   */
  required_scopes?: Array<string>;
}

export interface CollectionListParams {
  /**
   * The slug of the integration to which the collections belong.
   */
  integration: string;
}

export interface CollectionDeleteParams {
  /**
   * The slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * The version of the collection to delete (defaults to latest).
   */
  collection_version?: string;
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import CollectionListResponse = CollectionsAPI.CollectionListResponse;
  export import CollectionDeleteResponse = CollectionsAPI.CollectionDeleteResponse;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionRetrieveParams = CollectionsAPI.CollectionRetrieveParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionDeleteParams = CollectionsAPI.CollectionDeleteParams;
}

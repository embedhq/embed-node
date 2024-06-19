// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import * as CollectionsAPI from '@embedhq/node/resources/collections/collections';
import * as SchemasAPI from '@embedhq/node/resources/collections/schemas';

export class Collections extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);

  /**
   * Returns a collection.
   */
  retrieve(
    collectionKey: string,
    query: CollectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    return this._client.get(`/collections/${collectionKey}`, { query, ...options });
  }

  /**
   * Updates a collection.
   */
  update(
    collectionKey: string,
    params: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    const { integration_id, ...body } = params;
    return this._client.put(`/collections/${collectionKey}`, { query: { integration_id }, body, ...options });
  }

  /**
   * Returns a list of collections.
   */
  list(query: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionListResponse> {
    return this._client.get('/collections', { query, ...options });
  }

  /**
   * Disables a collection.
   */
  disable(
    collectionKey: string,
    params: CollectionDisableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    const { integration_id } = params;
    return this._client.post(`/collections/${collectionKey}/disable`, {
      query: { integration_id },
      ...options,
    });
  }

  /**
   * Enables a collection.
   */
  enable(
    collectionKey: string,
    params: CollectionEnableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Collection> {
    const { integration_id } = params;
    return this._client.post(`/collections/${collectionKey}/enable`, {
      query: { integration_id },
      ...options,
    });
  }

  /**
   * Query a collection.
   */
  query(
    collectionKey: string,
    params: CollectionQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionQueryResponse> {
    const { connection_id, integration_id, ...body } = params;
    return this._client.post(`/collections/${collectionKey}/query`, {
      query: { connection_id, integration_id },
      body,
      ...options,
    });
  }
}

/**
 * Represents a collection of records from a third-party provider.
 */
export interface Collection {
  /**
   * Whether to automatically start syncing this collection after a connection is
   * created.
   */
  auto_start_syncs: boolean;

  /**
   * The Unix timestamp (in seconds) for when the collection was created.
   */
  created_at: number;

  /**
   * The default sync frequency for the collection.
   */
  default_sync_frequency: 'real_time' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  /**
   * An array of properties to exclude from being synced.
   */
  exclude_properties_from_syncs: Array<string>;

  /**
   * The ID of the integration to which the collection belongs.
   */
  integration_id: string;

  /**
   * Whether the collection is enabled.
   */
  is_enabled: boolean;

  /**
   * The object type, which is always `collection`.
   */
  object: 'collection';

  /**
   * The unique key of the integration provider.
   */
  provider_key: string;

  /**
   * The unique key of the collection.
   */
  unique_key: string;

  /**
   * The Unix timestamp (in seconds) for when the collection was updated.
   */
  updated_at: number;

  /**
   * Configuration options for the collection.
   */
  configuration?: Record<string, unknown> | null;
}

export interface CollectionListResponse {
  data: Array<Collection>;

  object: 'list';
}

export interface CollectionQueryResponse {
  data: Array<Record<string, unknown>>;

  object: 'list';
}

export interface CollectionRetrieveParams {
  /**
   * The ID of the integration to which the collection belongs.
   */
  integration_id: string;
}

export interface CollectionUpdateParams {
  /**
   * Query param: The ID of the integration to which the collection belongs.
   */
  integration_id: string;

  /**
   * Body param: Whether to automatically start syncing this collection after a
   * connection is created.
   */
  auto_start_syncs?: boolean;

  /**
   * Body param: Configuration options for the collection.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Body param: The default sync frequency for the collection.
   */
  default_sync_frequency?: 'real_time' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  /**
   * Body param: An array of properties to exclude from being synced.
   */
  exclude_properties_from_syncs?: Array<string>;
}

export interface CollectionListParams {
  /**
   * The ID of the integration to which the collections belong.
   */
  integration_id: string;
}

export interface CollectionDisableParams {
  /**
   * The ID of the integration to which the collection belongs.
   */
  integration_id: string;
}

export interface CollectionEnableParams {
  /**
   * The ID of the integration to which the collection belongs.
   */
  integration_id: string;
}

export interface CollectionQueryParams {
  /**
   * Query param: The ID of the connection to use for the query.
   */
  connection_id: string;

  /**
   * Query param: The ID of the integration to which the collection belongs.
   */
  integration_id: string;

  /**
   * Body param: The relative weight used to merge vector and hybrid result sets.
   * Only applicable for `hybrid` queries.
   */
  alpha?: number;

  /**
   * Body param: The filter to apply to the query.
   */
  filter?: Record<string, unknown>;

  /**
   * Body param: The URL or base-64 string of the image to match against. Only
   * applicable for `vector` queries.
   */
  image?: string;

  /**
   * Body param: A limit on the number of objects to be returned.
   */
  limit?: number;

  /**
   * Body param: The query string to match against.
   */
  query?: string;

  /**
   * Body param: Specify properties you want to return in the results set.
   */
  return_properties?: Array<string>;

  /**
   * Body param: The type of query.
   */
  type?: 'hybrid' | 'vector' | 'keyword';
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import CollectionListResponse = CollectionsAPI.CollectionListResponse;
  export import CollectionQueryResponse = CollectionsAPI.CollectionQueryResponse;
  export import CollectionRetrieveParams = CollectionsAPI.CollectionRetrieveParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import CollectionDisableParams = CollectionsAPI.CollectionDisableParams;
  export import CollectionEnableParams = CollectionsAPI.CollectionEnableParams;
  export import CollectionQueryParams = CollectionsAPI.CollectionQueryParams;
  export import Schemas = SchemasAPI.Schemas;
  export import CollectionSchema = SchemasAPI.CollectionSchema;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaRetrieveParams = SchemasAPI.SchemaRetrieveParams;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as CollectionsAPI from '@embedhq/node/resources/collections/collections';
import * as SchemasAPI from '@embedhq/node/resources/collections/schemas';

export class Collections extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);

  /**
   * Returns a list of collections.
   */
  list(query: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionListResponse> {
    return this._client.get('/collections', { query, ...options });
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

export interface CollectionListParams {
  /**
   * The slug of the integration to which the collections belong.
   */
  integration: string;
}

export namespace Collections {
  export import Collection = CollectionsAPI.Collection;
  export import CollectionListResponse = CollectionsAPI.CollectionListResponse;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import Schemas = SchemasAPI.Schemas;
}

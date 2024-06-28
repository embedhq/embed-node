// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as SchemasAPI from '@embedhq/node/resources/collections/schemas';

export class Schemas extends APIResource {
  /**
   * Returns a collection schema.
   */
  retrieve(
    collectionKey: string,
    query: SchemaRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionSchema> {
    return this._client.get(`/collections/${collectionKey}/schema`, { query, ...options });
  }

  /**
   * Returns a list of collection schemas.
   */
  list(query: SchemaListParams, options?: Core.RequestOptions): Core.APIPromise<SchemaListResponse> {
    return this._client.get('/collections/schemas', { query, ...options });
  }
}

export interface CollectionSchema {
  /**
   * A description of the schema.
   */
  description: string;

  /**
   * The name of the schema.
   */
  name: string;

  /**
   * The properties of the schema.
   */
  properties: Record<string, unknown>;

  /**
   * The required properties of the schema.
   */
  required?: Array<string>;
}

export interface SchemaListResponse {
  data: Array<CollectionSchema>;

  object: 'list';
}

export interface SchemaRetrieveParams {
  /**
   * The ID of the integration to which the collection schema belongs.
   */
  integration_id: string;
}

export interface SchemaListParams {
  /**
   * The ID of the integration to which the collection schemas belong.
   */
  integration_id: string;
}

export namespace Schemas {
  export import CollectionSchema = SchemasAPI.CollectionSchema;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaRetrieveParams = SchemasAPI.SchemaRetrieveParams;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}

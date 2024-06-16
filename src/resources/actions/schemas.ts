// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import * as SchemasAPI from '@embedhq/node/resources/actions/schemas';

export class Schemas extends APIResource {
  /**
   * Returns an action schema.
   */
  retrieve(
    actionKey: string,
    query: SchemaRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionSchema> {
    return this._client.get(`/actions/${actionKey}/schema`, { query, ...options });
  }

  /**
   * Returns a list of action schemas.
   */
  list(query: SchemaListParams, options?: Core.RequestOptions): Core.APIPromise<SchemaListResponse> {
    return this._client.get('/actions/schemas', { query, ...options });
  }
}

export interface ActionSchema {
  /**
   * A description of the action schema.
   */
  description: string;

  /**
   * The name of the action schema.
   */
  name: string;

  /**
   * The input schema of the action.
   */
  parameters: ActionSchema.Parameters;
}

export namespace ActionSchema {
  /**
   * The input schema of the action.
   */
  export interface Parameters {
    /**
     * The properties of the input schema.
     */
    properties: Record<string, unknown>;

    /**
     * The type of the input schema.
     */
    type: 'object';

    /**
     * The required properties of the input schema.
     */
    required?: Array<string>;
  }
}

export interface SchemaListResponse {
  data: Array<ActionSchema>;

  object: 'list';
}

export interface SchemaRetrieveParams {
  /**
   * The ID of the integration to which the action schema belongs.
   */
  integration_id: string;
}

export interface SchemaListParams {
  /**
   * The ID of the integration to which the action schemas belong.
   */
  integration_id: string;
}

export namespace Schemas {
  export import ActionSchema = SchemasAPI.ActionSchema;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaRetrieveParams = SchemasAPI.SchemaRetrieveParams;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}

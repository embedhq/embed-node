// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as QueryAPI from './query';

export class Query extends APIResource {
  /**
   * Executes a single query.
   */
  exec(body: QueryExecParams, options?: Core.RequestOptions): Core.APIPromise<QueryExecResponse> {
    return this._client.post('/query', { body, ...options });
  }

  /**
   * Executes multiple queries in a single request.
   */
  multi(body: QueryMultiParams, options?: Core.RequestOptions): Core.APIPromise<QueryMultiResponse> {
    return this._client.post('/multi-query', { body, ...options });
  }
}

export interface QueryExecResponse {
  /**
   * The total number of objects matching the query.
   */
  found: number;

  hits: Array<QueryExecResponse.Hit>;

  /**
   * The total number of objects considered for the query.
   */
  out_of: number;

  /**
   * The current page number of the results.
   */
  page: number;

  /**
   * The time taken to execute the search in milliseconds.
   */
  search_time_ms: number;
}

export namespace QueryExecResponse {
  export interface Hit {
    highlights?: Array<Hit.Highlight>;

    /**
     * The data object returned by the query.
     */
    object?: Record<string, unknown>;

    /**
     * The relevance score of the object for the given query.
     */
    score?: number;
  }

  export namespace Hit {
    export interface Highlight {
      field?: string;

      matched_tokens?: Array<string>;

      snippet?: string;
    }
  }
}

export interface QueryMultiResponse {
  /**
   * An array of query results corresponding to the input queries.
   */
  results: Array<QueryMultiResponse.Result>;
}

export namespace QueryMultiResponse {
  export interface Result {
    /**
     * The total number of objects matching the query.
     */
    found: number;

    hits: Array<Result.Hit>;

    /**
     * The total number of objects considered for the query.
     */
    out_of: number;

    /**
     * The current page number of the results.
     */
    page: number;

    /**
     * The time taken to execute the search in milliseconds.
     */
    search_time_ms: number;
  }

  export namespace Result {
    export interface Hit {
      highlights?: Array<Hit.Highlight>;

      /**
       * The data object returned by the query.
       */
      object?: Record<string, unknown>;

      /**
       * The relevance score of the object for the given query.
       */
      score?: number;
    }

    export namespace Hit {
      export interface Highlight {
        field?: string;

        matched_tokens?: Array<string>;

        snippet?: string;
      }
    }
  }
}

export interface QueryExecParams {
  /**
   * The unique identifier of the connected account to query.
   */
  connected_account_id: string;

  /**
   * The unique slug of the integration to query.
   */
  integration: string;

  /**
   * The relative weight used to merge vector and hybrid result sets. Only applicable
   * for `hybrid` queries.
   */
  alpha?: number;

  /**
   * The unique slug of the collection to query. If empty, all collections associated
   * with the integration/connected account will be queried.
   */
  collection?: string;

  /**
   * The filter to apply to the query.
   */
  filter?: Record<string, unknown>;

  /**
   * The URL or base-64 string of the image to match against. Only applicable for
   * `vector` queries.
   */
  image?: string;

  /**
   * A limit on the number of objects to be returned.
   */
  limit?: number;

  /**
   * The query string to match against.
   */
  query?: string;

  /**
   * Specify properties you want to return in the results set.
   */
  return_properties?: Array<string>;

  /**
   * The type of query.
   */
  type?: 'hybrid' | 'vector' | 'keyword';
}

export interface QueryMultiParams {
  /**
   * An array of query objects to execute in parallel.
   */
  queries?: Array<QueryMultiParams.Query>;
}

export namespace QueryMultiParams {
  export interface Query {
    /**
     * The unique identifier of the connected account to query.
     */
    connected_account_id: string;

    /**
     * The unique slug of the integration to query.
     */
    integration: string;

    /**
     * The relative weight used to merge vector and hybrid result sets. Only applicable
     * for `hybrid` queries.
     */
    alpha?: number;

    /**
     * The unique slug of the collection to query. If empty, all collections associated
     * with the integration/connected account will be queried.
     */
    collection?: string;

    /**
     * The filter to apply to the query.
     */
    filter?: Record<string, unknown>;

    /**
     * The URL or base-64 string of the image to match against. Only applicable for
     * `vector` queries.
     */
    image?: string;

    /**
     * A limit on the number of objects to be returned.
     */
    limit?: number;

    /**
     * The query string to match against.
     */
    query?: string;

    /**
     * Specify properties you want to return in the results set.
     */
    return_properties?: Array<string>;

    /**
     * The type of query.
     */
    type?: 'hybrid' | 'vector' | 'keyword';
  }
}

export namespace Query {
  export import QueryExecResponse = QueryAPI.QueryExecResponse;
  export import QueryMultiResponse = QueryAPI.QueryMultiResponse;
  export import QueryExecParams = QueryAPI.QueryExecParams;
  export import QueryMultiParams = QueryAPI.QueryMultiParams;
}

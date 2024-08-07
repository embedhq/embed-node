// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RunsAPI from './runs';

export class Runs extends APIResource {
  /**
   * Returns a sync run.
   */
  retrieve(params: RunRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SyncRun> {
    const { collection, sync_run_id, ...query } = params;
    return this._client.get(`/syncs/${collection}/runs/${sync_run_id}`, { query, ...options });
  }

  /**
   * Returns a list of recent sync runs.
   */
  list(params: RunListParams, options?: Core.RequestOptions): Core.APIPromise<RunListResponse> {
    const { collection, ...query } = params;
    return this._client.get(`/syncs/${collection}/runs`, { query, ...options });
  }
}

/**
 * Represents a single run of a sync.
 */
export interface SyncRun {
  /**
   * The unique identifier of the sync run.
   */
  id: string;

  /**
   * The unique slug of the collection being synced.
   */
  collection: string;

  /**
   * The collection version used for the sync.
   */
  collection_version: string;

  /**
   * The unique identifier of the connected account to which the sync belongs.
   */
  connected_account_id: string;

  /**
   * The duration of the sync run (in seconds).
   */
  duration: number | null;

  /**
   * The unique slug of the integration to which the sync belongs.
   */
  integration: string;

  /**
   * The object type, which is always `sync_run`.
   */
  object: 'sync_run';

  /**
   * The number of records added during the sync run.
   */
  records_added: number | null;

  /**
   * The number of records deleted during the sync run.
   */
  records_deleted: number | null;

  /**
   * The number of records updated during the sync run.
   */
  records_updated: number | null;

  /**
   * The status of the sync run.
   */
  status: 'running' | 'stopped' | 'succeeded' | 'failed';

  /**
   * The Unix timestamp (in seconds) for when the sync run started.
   */
  timestamp: number;
}

export interface RunListResponse {
  data: Array<SyncRun>;

  object: 'list';
}

export interface RunRetrieveParams {
  /**
   * Path param: The slug of the collection to which the syncs belong.
   */
  collection: string;

  /**
   * Path param: The ID of the sync run.
   */
  sync_run_id: string;

  /**
   * Query param: The ID of the connected account to which the syncs belong.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the sync belongs.
   */
  integration: string;

  /**
   * Query param: The collection version (defaults to latest).
   */
  collection_version?: string;
}

export interface RunListParams {
  /**
   * Path param: The slug of the collection to which the syncs belong.
   */
  collection: string;

  /**
   * Query param: The ID of the connected account to which the syncs belong.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the sync belongs.
   */
  integration: string;

  /**
   * Query param: The collection version (defaults to latest).
   */
  collection_version?: string;
}

export namespace Runs {
  export import SyncRun = RunsAPI.SyncRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

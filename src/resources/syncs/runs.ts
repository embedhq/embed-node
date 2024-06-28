// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as RunsAPI from '@embedhq/node/resources/syncs/runs';

export class Runs extends APIResource {
  /**
   * Returns a sync run.
   */
  retrieve(
    collectionKey: string,
    syncRunId: string,
    query: RunRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SyncRun> {
    return this._client.get(`/syncs/${collectionKey}/runs/${syncRunId}`, { query, ...options });
  }

  /**
   * Returns a list of recent sync runs.
   */
  list(
    collectionKey: string,
    query: RunListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse> {
    return this._client.get(`/syncs/${collectionKey}/runs`, { query, ...options });
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
   * The unique key of the collection being synced.
   */
  collection_key: string;

  /**
   * The unique identifier of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The unique identifier of the integration to which the sync belongs.
   */
  integration_id: string;

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
   * The duration of the sync run (in seconds).
   */
  duration?: number | null;

  /**
   * The Unix timestamp (in seconds) for when the sync run started.
   */
  timestamp?: number;
}

export interface RunListResponse {
  data: Array<SyncRun>;

  object: 'list';
}

export interface RunRetrieveParams {
  /**
   * The ID of the connection to which the sync run belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync run belongs.
   */
  integration_id: string;
}

export interface RunListParams {
  /**
   * The ID of the connection to which the sync runs belong.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync runs belong.
   */
  integration_id: string;
}

export namespace Runs {
  export import SyncRun = RunsAPI.SyncRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

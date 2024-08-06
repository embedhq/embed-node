// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import { isRequestOptions } from '@embedhq/node/core';
import * as Core from '@embedhq/node/core';
import * as SyncsAPI from '@embedhq/node/resources/syncs/syncs';
import * as RunsAPI from '@embedhq/node/resources/syncs/runs';

export class Syncs extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns a list of syncs.
   */
  list(query?: SyncListParams, options?: Core.RequestOptions): Core.APIPromise<SyncListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SyncListResponse>;
  list(
    query: SyncListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SyncListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/syncs', { query, ...options });
  }
}

/**
 * Represents the continuous synchronization of a collection.
 */
export interface Sync {
  /**
   * The unique slug of the collection being synced.
   */
  collection: string;

  /**
   * The version of the collection schema used for the sync.
   */
  collection_version: string;

  /**
   * The unique identifier of the connected account being synced.
   */
  connected_account_id: string;

  /**
   * The Unix timestamp (in seconds) for when the sync was created.
   */
  created_at: number;

  /**
   * Array of IDs to exclude from the sync. If present, objects with matching IDs
   * will not be synced.
   */
  exclusions: Array<string>;

  /**
   * The frequency of the sync.
   */
  frequency: string;

  /**
   * Array of IDs to include in the sync. If present, only objects with matching IDs
   * will be synced.
   */
  inclusions: Array<string>;

  /**
   * The unique slug of the integration to which the collection belongs.
   */
  integration: string;

  /**
   * The Unix timestamp (in seconds) for when the collection was last synced.
   */
  last_synced_at: number | null;

  /**
   * The object type, which is always `sync`.
   */
  object: 'sync';

  /**
   * The status of the sync.
   */
  status: 'running' | 'stopped' | 'error';

  /**
   * The Unix timestamp (in seconds) for when the sync was updated.
   */
  updated_at: number;
}

export interface SyncListResponse {
  data: Array<Sync>;

  object: 'list';
}

export interface SyncListParams {
  /**
   * Filter syncs by connected account.
   */
  connected_account_id?: string;

  /**
   * Filter syncs by integration.
   */
  integration?: string;
}

export namespace Syncs {
  export import Sync = SyncsAPI.Sync;
  export import SyncListResponse = SyncsAPI.SyncListResponse;
  export import SyncListParams = SyncsAPI.SyncListParams;
  export import Runs = RunsAPI.Runs;
  export import SyncRun = RunsAPI.SyncRun;
}

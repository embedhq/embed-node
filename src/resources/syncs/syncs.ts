// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SyncsAPI from './syncs';
import * as RunsAPI from './runs';

export class Syncs extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Creates a sync.
   */
  create(body: SyncCreateParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    return this._client.post('/syncs', { body, ...options });
  }

  /**
   * Returns a sync.
   */
  retrieve(params: SyncRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { collection, ...query } = params;
    return this._client.get(`/syncs/${collection}`, { query, ...options });
  }

  /**
   * Updates a sync.
   */
  update(params: SyncUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { collection, connected_account_id, integration, collection_version, ...body } = params;
    return this._client.put(`/syncs/${collection}`, {
      query: { connected_account_id, integration, collection_version },
      body,
      ...options,
    });
  }

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

  /**
   * Deletes a sync.
   */
  delete(params: SyncDeleteParams, options?: Core.RequestOptions): Core.APIPromise<SyncDeleteResponse> {
    const { collection, connected_account_id, integration, collection_version } = params;
    return this._client.delete(`/syncs/${collection}`, {
      query: { connected_account_id, integration, collection_version },
      ...options,
    });
  }

  /**
   * Starts a sync.
   */
  start(params: SyncStartParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { collection, connected_account_id, integration, collection_version } = params;
    return this._client.post(`/syncs/${collection}/start`, {
      query: { connected_account_id, integration, collection_version },
      ...options,
    });
  }

  /**
   * Stops a sync.
   */
  stop(params: SyncStopParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { collection, connected_account_id, integration, collection_version } = params;
    return this._client.post(`/syncs/${collection}/stop`, {
      query: { connected_account_id, integration, collection_version },
      ...options,
    });
  }

  /**
   * Triggers a one-time sync run.
   */
  trigger(params: SyncTriggerParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { collection, connected_account_id, integration, collection_version } = params;
    return this._client.post(`/syncs/${collection}/trigger`, {
      query: { connected_account_id, integration, collection_version },
      ...options,
    });
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

export interface SyncDeleteResponse {
  collection: string;

  deleted: boolean;

  object: 'sync';
}

export interface SyncCreateParams {
  /**
   * The unique slug of the collection.
   */
  collection: string;

  /**
   * The unique identifier of the connected account.
   */
  connected_account_id: string;

  /**
   * The unique slug of the integration.
   */
  integration: string;

  /**
   * The collection version used for the sync (defaults to latest).
   */
  collection_version?: string;

  /**
   * Array of IDs to exclude from the sync. If present, objects with matching IDs
   * will not be synced.
   */
  exclusions?: Array<string>;

  /**
   * The frequency of the sync.
   */
  frequency?: string;

  /**
   * Array of IDs to include in the sync. If present, only objects with matching IDs
   * will be synced.
   */
  inclusions?: Array<string>;
}

export interface SyncRetrieveParams {
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

export interface SyncUpdateParams {
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

  /**
   * Body param: Array of IDs to exclude from the sync. If present, objects with
   * matching IDs will not be synced.
   */
  exclusions?: Array<string>;

  /**
   * Body param: The frequency of the sync.
   */
  frequency?: string;

  /**
   * Body param: Array of IDs to include in the sync. If present, only objects with
   * matching IDs will be synced.
   */
  inclusions?: Array<string>;
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

export interface SyncDeleteParams {
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

export interface SyncStartParams {
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

export interface SyncStopParams {
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

export interface SyncTriggerParams {
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

export namespace Syncs {
  export import Sync = SyncsAPI.Sync;
  export import SyncListResponse = SyncsAPI.SyncListResponse;
  export import SyncDeleteResponse = SyncsAPI.SyncDeleteResponse;
  export import SyncCreateParams = SyncsAPI.SyncCreateParams;
  export import SyncRetrieveParams = SyncsAPI.SyncRetrieveParams;
  export import SyncUpdateParams = SyncsAPI.SyncUpdateParams;
  export import SyncListParams = SyncsAPI.SyncListParams;
  export import SyncDeleteParams = SyncsAPI.SyncDeleteParams;
  export import SyncStartParams = SyncsAPI.SyncStartParams;
  export import SyncStopParams = SyncsAPI.SyncStopParams;
  export import SyncTriggerParams = SyncsAPI.SyncTriggerParams;
  export import Runs = RunsAPI.Runs;
  export import SyncRun = RunsAPI.SyncRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

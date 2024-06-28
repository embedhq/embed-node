// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as SyncsAPI from '@embedhq/node/resources/syncs/syncs';
import * as RunsAPI from '@embedhq/node/resources/syncs/runs';

export class Syncs extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns a sync.
   */
  retrieve(
    collectionKey: string,
    query: SyncRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sync> {
    return this._client.get(`/syncs/${collectionKey}`, { query, ...options });
  }

  /**
   * Updates a sync.
   */
  update(
    collectionKey: string,
    params: SyncUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sync> {
    const { connection_id, integration_id, ...body } = params;
    return this._client.put(`/syncs/${collectionKey}`, {
      query: { connection_id, integration_id },
      body,
      ...options,
    });
  }

  /**
   * Returns a list of syncs.
   */
  list(query: SyncListParams, options?: Core.RequestOptions): Core.APIPromise<SyncListResponse> {
    return this._client.get('/syncs', { query, ...options });
  }

  /**
   * Starts a sync.
   */
  start(
    collectionKey: string,
    params: SyncStartParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sync> {
    const { connection_id, integration_id } = params;
    return this._client.post(`/syncs/${collectionKey}/start`, {
      query: { connection_id, integration_id },
      ...options,
    });
  }

  /**
   * Stops a sync.
   */
  stop(collectionKey: string, params: SyncStopParams, options?: Core.RequestOptions): Core.APIPromise<Sync> {
    const { connection_id, integration_id } = params;
    return this._client.post(`/syncs/${collectionKey}/stop`, {
      query: { connection_id, integration_id },
      ...options,
    });
  }

  /**
   * Triggers a one-time sync run.
   */
  trigger(
    collectionKey: string,
    params: SyncTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sync> {
    const { connection_id, integration_id } = params;
    return this._client.post(`/syncs/${collectionKey}/trigger`, {
      query: { connection_id, integration_id },
      ...options,
    });
  }
}

/**
 * Represents the continuous synchronization of a collection.
 */
export interface Sync {
  /**
   * The unique key of the collection being synced.
   */
  collection_key: string;

  /**
   * The unique identifier of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The Unix timestamp (in seconds) for when the sync was created.
   */
  created_at: number;

  /**
   * The frequency of the sync.
   */
  frequency: 'real_time' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  /**
   * The unique identifier of the integration to which the sync belongs.
   */
  integration_id: string;

  /**
   * The Unix timestamp (in seconds) for when the collection was last synced.
   */
  last_synced_at: number | null;

  /**
   * The object type, which is always `sync`.
   */
  object: 'sync';

  /**
   * The unique key of the integration provider.
   */
  provider_key: string;

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

export interface SyncRetrieveParams {
  /**
   * The ID of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync belongs.
   */
  integration_id: string;
}

export interface SyncUpdateParams {
  /**
   * Query param: The ID of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * Query param: The ID of the integration to which the sync belongs.
   */
  integration_id: string;

  /**
   * Body param: The frequency of the sync.
   */
  frequency?: 'real_time' | 'hourly' | 'daily' | 'weekly' | 'monthly';
}

export interface SyncListParams {
  /**
   * The ID of the connection to which the syncs belong.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the syncs belong.
   */
  integration_id: string;
}

export interface SyncStartParams {
  /**
   * The ID of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync belongs.
   */
  integration_id: string;
}

export interface SyncStopParams {
  /**
   * The ID of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync belongs.
   */
  integration_id: string;
}

export interface SyncTriggerParams {
  /**
   * The ID of the connection to which the sync belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the sync belongs.
   */
  integration_id: string;
}

export namespace Syncs {
  export import Sync = SyncsAPI.Sync;
  export import SyncListResponse = SyncsAPI.SyncListResponse;
  export import SyncRetrieveParams = SyncsAPI.SyncRetrieveParams;
  export import SyncUpdateParams = SyncsAPI.SyncUpdateParams;
  export import SyncListParams = SyncsAPI.SyncListParams;
  export import SyncStartParams = SyncsAPI.SyncStartParams;
  export import SyncStopParams = SyncsAPI.SyncStopParams;
  export import SyncTriggerParams = SyncsAPI.SyncTriggerParams;
  export import Runs = RunsAPI.Runs;
  export import SyncRun = RunsAPI.SyncRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

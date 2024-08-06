// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as RunsAPI from '@embedhq/node/resources/syncs/runs';

export class Runs extends APIResource {}

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

export namespace Runs {
  export import SyncRun = RunsAPI.SyncRun;
}

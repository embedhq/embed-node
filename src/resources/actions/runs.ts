// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RunsAPI from './runs';

export class Runs extends APIResource {
  /**
   * Returns an action run.
   */
  retrieve(params: RunRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<ActionRun> {
    const { action, action_run_id, ...query } = params;
    return this._client.get(`/actions/${action}/runs/${action_run_id}`, { query, ...options });
  }

  /**
   * Returns a list of recent action runs.
   */
  list(params: RunListParams, options?: Core.RequestOptions): Core.APIPromise<RunListResponse> {
    const { action, ...query } = params;
    return this._client.get(`/actions/${action}/runs`, { query, ...options });
  }
}

/**
 * Represents an execution of an action.
 */
export interface ActionRun {
  /**
   * The unique identifier of the action run.
   */
  id: string;

  /**
   * The unique slug of the action being run.
   */
  action: string;

  /**
   * The unique identifier of the connected account to which the action belongs.
   */
  connected_account_id: string;

  /**
   * The duration of the action run (in seconds).
   */
  duration: number | null;

  /**
   * The input parameters for the action run.
   */
  input: Record<string, unknown>;

  /**
   * The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * The object type, which is always `action_run`.
   */
  object: 'action_run';

  /**
   * The output of the action run.
   */
  output: Record<string, unknown> | null;

  /**
   * The status of the action run.
   */
  status: 'running' | 'succeeded' | 'failed';

  /**
   * The Unix timestamp (in seconds) for when the action ran.
   */
  timestamp: number;
}

export interface RunListResponse {
  data: Array<ActionRun>;

  object: 'list';
}

export interface RunRetrieveParams {
  /**
   * Path param: The unique slug of the action to which the run belongs.
   */
  action: string;

  /**
   * Path param: The ID of the action run.
   */
  action_run_id: string;

  /**
   * Query param: The ID of the connected account to which the action belongs.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Query param: The version of the action (defaults to latest).
   */
  action_version?: string;
}

export interface RunListParams {
  /**
   * Path param: The unique slug of the action to which the runs belong.
   */
  action: string;

  /**
   * Query param: The ID of the connected account to which the action belongs.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Query param: The version of the action (defaults to latest).
   */
  action_version?: string;
}

export namespace Runs {
  export import ActionRun = RunsAPI.ActionRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

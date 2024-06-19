// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import * as RunsAPI from '@embedhq/node/resources/actions/runs';

export class Runs extends APIResource {
  /**
   * Returns an action run.
   */
  retrieve(
    actionKey: string,
    actionRunId: string,
    query: RunRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionRun> {
    return this._client.get(`/actions/${actionKey}/runs/${actionRunId}`, { query, ...options });
  }

  /**
   * Returns a list of recent action runs.
   */
  list(
    actionKey: string,
    query: RunListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse> {
    return this._client.get(`/actions/${actionKey}/runs`, { query, ...options });
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
   * The unique key of the action being run.
   */
  action_key: string;

  /**
   * The unique identifier of the connection to which the action belongs.
   */
  connection_id: string;

  /**
   * The duration of the action run (in seconds).
   */
  duration: number;

  /**
   * The input parameters for the action run.
   */
  input: Record<string, unknown>;

  /**
   * The unique identifier of the integration to which the action belongs.
   */
  integration_id: string;

  /**
   * The object type, which is always `action_run`.
   */
  object: 'action_run';

  /**
   * The output of the action run.
   */
  output: Record<string, unknown>;

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
   * The ID of the connection to which the action run belongs.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the action run belongs.
   */
  integration_id: string;
}

export interface RunListParams {
  /**
   * The ID of the connection to which the action runs belong.
   */
  connection_id: string;

  /**
   * The ID of the integration to which the action runs belong.
   */
  integration_id: string;
}

export namespace Runs {
  export import ActionRun = RunsAPI.ActionRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as RunsAPI from '@embedhq/node/resources/actions/runs';

export class Runs extends APIResource {}

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

export namespace Runs {
  export import ActionRun = RunsAPI.ActionRun;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActionsAPI from './actions';
import * as RunsAPI from './runs';

export class Actions extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns an action.
   */
  retrieve(
    action: string,
    query: ActionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Action> {
    return this._client.get(`/actions/${action}`, { query, ...options });
  }

  /**
   * Returns a list of actions.
   */
  list(query: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
  }

  /**
   * Triggers an action.
   */
  trigger(
    action: string,
    params: ActionTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTriggerResponse> {
    const { connected_account_id, integration, action_version, ...body } = params;
    return this._client.post(`/actions/${action}/trigger`, {
      query: { connected_account_id, integration, action_version },
      body,
      ...options,
    });
  }
}

/**
 * Represents an action that can be performed on a collection.
 */
export interface Action {
  /**
   * Configuration options for the action.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The Unix timestamp (in seconds) for when the action was created.
   */
  created_at: number;

  /**
   * The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Whether the action is enabled.
   */
  is_enabled: boolean;

  /**
   * The display name of the action.
   */
  name: string;

  /**
   * The object type, which is always `action`.
   */
  object: 'action';

  /**
   * The unique slug of the action.
   */
  slug: string;

  /**
   * The Unix timestamp (in seconds) for when the action was updated.
   */
  updated_at: number;

  /**
   * The version of the action, formatted as "MAJOR.MINOR".
   */
  version: string;

  /**
   * The OAuth scopes required to trigger the action.
   */
  required_scopes?: Array<string>;
}

export interface ActionListResponse {
  data: Array<Action>;

  object: 'list';
}

/**
 * The action response.
 */
export type ActionTriggerResponse = Record<string, unknown>;

export interface ActionRetrieveParams {
  /**
   * The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * The version of the action to retrieve (defaults to latest).
   */
  action_version?: string;
}

export interface ActionListParams {
  /**
   * The slug of the integration to which the actions belong.
   */
  integration: string;
}

export interface ActionTriggerParams {
  /**
   * Query param: The ID of the connected account used to trigger the action.
   */
  connected_account_id: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Body param: The input parameters for the action.
   */
  input: Record<string, unknown>;

  /**
   * Query param: The version of the action to trigger (defaults to latest).
   */
  action_version?: string;
}

export namespace Actions {
  export import Action = ActionsAPI.Action;
  export import ActionListResponse = ActionsAPI.ActionListResponse;
  export import ActionTriggerResponse = ActionsAPI.ActionTriggerResponse;
  export import ActionRetrieveParams = ActionsAPI.ActionRetrieveParams;
  export import ActionListParams = ActionsAPI.ActionListParams;
  export import ActionTriggerParams = ActionsAPI.ActionTriggerParams;
  export import Runs = RunsAPI.Runs;
  export import ActionRun = RunsAPI.ActionRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

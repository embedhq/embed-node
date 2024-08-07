// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActionsAPI from './actions';
import * as RunsAPI from './runs';

export class Actions extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Creates an action from a template.
   */
  create(body: ActionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Action> {
    return this._client.post('/actions', { body, ...options });
  }

  /**
   * Returns an action.
   */
  retrieve(params: ActionRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Action> {
    const { action, ...query } = params;
    return this._client.get(`/actions/${action}`, { query, ...options });
  }

  /**
   * Updates an action.
   */
  update(params: ActionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Action> {
    const { action, integration, action_version, ...body } = params;
    return this._client.put(`/actions/${action}`, {
      query: { integration, action_version },
      body,
      ...options,
    });
  }

  /**
   * Returns a list of actions.
   */
  list(query: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
  }

  /**
   * Deletes an action.
   */
  delete(params: ActionDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ActionDeleteResponse> {
    const { action, integration, action_version } = params;
    return this._client.delete(`/actions/${action}`, { query: { integration, action_version }, ...options });
  }

  /**
   * Triggers an action.
   */
  trigger(
    params: ActionTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTriggerResponse> {
    const { action, connected_account_id, integration, action_version, ...body } = params;
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
   * The action schema.
   */
  schema: Record<string, unknown>;

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

export interface ActionDeleteResponse {
  deleted: boolean;

  object: 'action';

  slug: string;
}

/**
 * The action response.
 */
export type ActionTriggerResponse = Record<string, unknown>;

export interface ActionCreateParams {
  /**
   * The slug of the action template to use.
   */
  action_template: string;

  /**
   * The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Configuration options for the action.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * The display name of the action (defaults to the action template name).
   */
  name?: string;

  /**
   * The OAuth scopes required to trigger the action (defaults to the action template
   * scopes, if applicable).
   */
  required_scopes?: Array<string>;

  /**
   * The unique slug of the action (defaults to the action template slug).
   */
  slug?: string;
}

export interface ActionRetrieveParams {
  /**
   * Path param: The unique slug of the action.
   */
  action: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Query param: The version of the action to retrieve (defaults to latest).
   */
  action_version?: string;
}

export interface ActionUpdateParams {
  /**
   * Path param: The unique slug of the action.
   */
  action: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Query param: The version of the action to update (defaults to latest).
   */
  action_version?: string;

  /**
   * Body param: Configuration options for the action.
   */
  configuration?: Record<string, unknown> | null;

  /**
   * Body param: Whether the action is enabled.
   */
  is_enabled?: boolean;

  /**
   * Body param: The display name of the action.
   */
  name?: string;

  /**
   * Body param: The OAuth scopes required to trigger the action.
   */
  required_scopes?: Array<string>;
}

export interface ActionListParams {
  /**
   * The slug of the integration to which the actions belong.
   */
  integration: string;
}

export interface ActionDeleteParams {
  /**
   * Path param: The unique slug of the action.
   */
  action: string;

  /**
   * Query param: The slug of the integration to which the action belongs.
   */
  integration: string;

  /**
   * Query param: The version of the action to delete (defaults to latest).
   */
  action_version?: string;
}

export interface ActionTriggerParams {
  /**
   * Path param: The unique slug of the action.
   */
  action: string;

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

  /**
   * Body param: Whether to trigger the action asynchronously.
   */
  async?: boolean;
}

export namespace Actions {
  export import Action = ActionsAPI.Action;
  export import ActionListResponse = ActionsAPI.ActionListResponse;
  export import ActionDeleteResponse = ActionsAPI.ActionDeleteResponse;
  export import ActionTriggerResponse = ActionsAPI.ActionTriggerResponse;
  export import ActionCreateParams = ActionsAPI.ActionCreateParams;
  export import ActionRetrieveParams = ActionsAPI.ActionRetrieveParams;
  export import ActionUpdateParams = ActionsAPI.ActionUpdateParams;
  export import ActionListParams = ActionsAPI.ActionListParams;
  export import ActionDeleteParams = ActionsAPI.ActionDeleteParams;
  export import ActionTriggerParams = ActionsAPI.ActionTriggerParams;
  export import Runs = RunsAPI.Runs;
  export import ActionRun = RunsAPI.ActionRun;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunRetrieveParams = RunsAPI.RunRetrieveParams;
  export import RunListParams = RunsAPI.RunListParams;
}

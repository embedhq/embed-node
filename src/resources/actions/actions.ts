// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActionsAPI from './actions';
import * as RunsAPI from './runs';
import * as SchemasAPI from './schemas';

export class Actions extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns a list of actions.
   */
  list(query: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
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

export interface ActionListParams {
  /**
   * The slug of the integration to which the actions belong.
   */
  integration: string;
}

export namespace Actions {
  export import Action = ActionsAPI.Action;
  export import ActionListResponse = ActionsAPI.ActionListResponse;
  export import ActionListParams = ActionsAPI.ActionListParams;
  export import Schemas = SchemasAPI.Schemas;
  export import Runs = RunsAPI.Runs;
  export import ActionRun = RunsAPI.ActionRun;
}

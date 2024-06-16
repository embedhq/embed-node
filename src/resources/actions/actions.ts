// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import * as ActionsAPI from '@embedhq/node/resources/actions/actions';
import * as SchemasAPI from '@embedhq/node/resources/actions/schemas';

export class Actions extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);

  /**
   * Returns an action.
   */
  retrieve(
    actionKey: string,
    query: ActionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Action> {
    return this._client.get(`/actions/${actionKey}`, { query, ...options });
  }

  /**
   * Returns a list of actions.
   */
  list(query: ActionListParams, options?: Core.RequestOptions): Core.APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
  }

  /**
   * Disables an action.
   */
  disable(
    actionKey: string,
    params: ActionDisableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionDisableResponse> {
    const { integration_id } = params;
    return this._client.post(`/actions/${actionKey}/disable`, { query: { integration_id }, ...options });
  }

  /**
   * Enables an action.
   */
  enable(
    actionKey: string,
    params: ActionEnableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Action> {
    const { integration_id } = params;
    return this._client.post(`/actions/${actionKey}/enable`, { query: { integration_id }, ...options });
  }

  /**
   * Returns an action schema.
   */
  schema(
    actionKey: string,
    query: ActionSchemaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemasAPI.ActionSchema> {
    return this._client.get(`/actions/${actionKey}/schema`, { query, ...options });
  }

  /**
   * Triggers an action.
   */
  trigger(
    actionKey: string,
    params: ActionTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTriggerResponse> {
    const { connection_id, integration_id, ...body } = params;
    return this._client.post(`/actions/${actionKey}/trigger`, {
      query: { connection_id, integration_id },
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
   * The Unix timestamp (in seconds) for when the action was created.
   */
  created_at: number;

  /**
   * The ID of the integration to which the action belongs.
   */
  integration_id: string;

  /**
   * Whether the action is enabled.
   */
  is_enabled: boolean;

  /**
   * The object type, which is always `action`.
   */
  object: 'action';

  /**
   * The unique key of the integration provider.
   */
  provider_key: string;

  /**
   * The unique key of the action.
   */
  unique_key: string;

  /**
   * The Unix timestamp (in seconds) for when the action was updated.
   */
  updated_at: number;
}

export interface ActionListResponse {
  data: Array<Action>;

  object: 'list';
}

/**
 * Represents an action that can be performed on a collection.
 */
export interface ActionDisableResponse extends Action {
  is_enabled?: boolean;
}

/**
 * The action response.
 */
export type ActionTriggerResponse = Record<string, unknown>;

export interface ActionRetrieveParams {
  /**
   * The ID of the integration to which the action belongs.
   */
  integration_id: string;
}

export interface ActionListParams {
  /**
   * The ID of the integration to which the actions belong.
   */
  integration_id: string;
}

export interface ActionDisableParams {
  /**
   * The ID of the integration to which the action belongs.
   */
  integration_id: string;
}

export interface ActionEnableParams {
  /**
   * The ID of the integration to which the action belongs.
   */
  integration_id: string;
}

export interface ActionSchemaParams {
  /**
   * The ID of the integration to which the action schema belongs.
   */
  integration_id: string;
}

export interface ActionTriggerParams {
  /**
   * Query param: The ID of the connection to use for the action.
   */
  connection_id: string;

  /**
   * Query param: The ID of the integration to which the action belongs.
   */
  integration_id: string;

  /**
   * Body param: The input parameters for the action.
   */
  input: Record<string, unknown>;
}

export namespace Actions {
  export import Action = ActionsAPI.Action;
  export import ActionListResponse = ActionsAPI.ActionListResponse;
  export import ActionDisableResponse = ActionsAPI.ActionDisableResponse;
  export import ActionTriggerResponse = ActionsAPI.ActionTriggerResponse;
  export import ActionRetrieveParams = ActionsAPI.ActionRetrieveParams;
  export import ActionListParams = ActionsAPI.ActionListParams;
  export import ActionDisableParams = ActionsAPI.ActionDisableParams;
  export import ActionEnableParams = ActionsAPI.ActionEnableParams;
  export import ActionSchemaParams = ActionsAPI.ActionSchemaParams;
  export import ActionTriggerParams = ActionsAPI.ActionTriggerParams;
  export import Schemas = SchemasAPI.Schemas;
  export import ActionSchema = SchemasAPI.ActionSchema;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaRetrieveParams = SchemasAPI.SchemaRetrieveParams;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}
